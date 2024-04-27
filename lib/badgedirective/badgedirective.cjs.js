'use strict';

var utils = require('primevue2/utils');

var BadgeDirective = {
  inserted: function inserted(el, binding) {
    var id = utils.UniqueComponentId() + '_badge';
    el.$_pbadgeId = id;
    var badge = document.createElement('span');
    badge.id = id;
    badge.className = 'p-badge p-component';
    for (var modifier in binding.modifiers) {
      utils.DomHandler.addClass(badge, 'p-badge-' + modifier);
    }
    if (binding.value != null) {
      badge.appendChild(document.createTextNode(binding.value));
      if (String(binding.value).length === 1) {
        utils.DomHandler.addClass(badge, 'p-badge-no-gutter');
      }
    } else {
      utils.DomHandler.addClass(badge, 'p-badge-dot');
    }
    utils.DomHandler.addClass(el, 'p-overlay-badge');
    el.appendChild(badge);
  },
  update: function update(el, binding) {
    utils.DomHandler.addClass(el, 'p-overlay-badge');
    if (binding.oldValue !== binding.value) {
      var badge = document.getElementById(el.$_pbadgeId);
      if (binding.value) {
        if (utils.DomHandler.hasClass(badge, 'p-badge-dot')) {
          utils.DomHandler.removeClass(badge, 'p-badge-dot');
        }
        if (String(binding.value).length === 1) utils.DomHandler.addClass(badge, 'p-badge-no-gutter');else utils.DomHandler.removeClass(badge, 'p-badge-no-gutter');
      } else if (!binding.value && !utils.DomHandler.hasClass(badge, 'p-badge-dot')) {
        utils.DomHandler.addClass(badge, 'p-badge-dot');
      }
      badge.innerHTML = '';
      badge.appendChild(document.createTextNode(binding.value));
    }
  }
};
BadgeDirective.install = function (Vue) {
  Vue.directive('badge', BadgeDirective);
};

module.exports = BadgeDirective;
