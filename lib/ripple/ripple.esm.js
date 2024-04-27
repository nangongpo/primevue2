import { DomHandler } from 'primevue2/utils';

function bindEvents(el) {
  el.addEventListener('mousedown', onMouseDown);
}
function unbindEvents(el) {
  el.removeEventListener('mousedown', onMouseDown);
}
function create(el) {
  var ink = document.createElement('span');
  ink.className = 'p-ink';
  el.appendChild(ink);
  ink.addEventListener('animationend', onAnimationEnd);
}
function remove(el) {
  var ink = getInk(el);
  if (ink) {
    unbindEvents(el);
    ink.removeEventListener('animationend', onAnimationEnd);
    ink.remove();
  }
}
function onMouseDown(event) {
  var target = event.currentTarget;
  var ink = getInk(target);
  if (!ink || getComputedStyle(ink, null).display === 'none') {
    return;
  }
  DomHandler.removeClass(ink, 'p-ink-active');
  if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
    var d = Math.max(DomHandler.getOuterWidth(target), DomHandler.getOuterHeight(target));
    ink.style.height = d + 'px';
    ink.style.width = d + 'px';
  }
  var offset = DomHandler.getOffset(target);
  var x = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(ink) / 2;
  var y = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(ink) / 2;
  ink.style.top = y + 'px';
  ink.style.left = x + 'px';
  DomHandler.addClass(ink, 'p-ink-active');
}
function onAnimationEnd(event) {
  DomHandler.removeClass(event.currentTarget, 'p-ink-active');
}
function getInk(el) {
  for (var i = 0; i < el.children.length; i++) {
    if (typeof el.children[i].className === 'string' && el.children[i].className.indexOf('p-ink') !== -1) {
      return el.children[i];
    }
  }
  return null;
}
var Ripple = {
  inserted: function inserted(el, binding, vnode) {
    if (vnode.context.$primevue && vnode.context.$primevue.config.ripple) {
      create(el);
      bindEvents(el);
    }
  },
  unbind: function unbind(el) {
    remove(el);
  }
};

export { Ripple as default };
