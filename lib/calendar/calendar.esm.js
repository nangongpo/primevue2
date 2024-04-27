import { DomHandler, ConnectedOverlayScrollHandler, UniqueComponentId } from 'primevue2/utils';
import InputText from 'primevue2/inputtext';
import Button from 'primevue2/button';
import Ripple from 'primevue2/ripple';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var script = {
  name: 'Calendar',
  inheritAttrs: false,
  props: {
    value: null,
    selectionMode: {
      type: String,
      default: 'single'
    },
    dateFormat: String,
    inline: {
      type: Boolean,
      default: false
    },
    showOtherMonths: {
      type: Boolean,
      default: true
    },
    selectOtherMonths: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'pi pi-calendar'
    },
    numberOfMonths: {
      type: Number,
      default: 1
    },
    responsiveOptions: Array,
    view: {
      type: String,
      default: 'date'
    },
    touchUI: {
      type: Boolean,
      default: false
    },
    monthNavigator: {
      type: Boolean,
      default: false
    },
    yearNavigator: {
      type: Boolean,
      default: false
    },
    yearRange: {
      type: String,
      default: null
    },
    panelClass: {
      type: String,
      default: null
    },
    panelStyle: {
      type: String,
      default: null
    },
    minDate: {
      type: Date,
      value: null
    },
    maxDate: {
      type: Date,
      value: null
    },
    disabledDates: {
      type: Array,
      value: null
    },
    disabledDays: {
      type: Array,
      value: null
    },
    maxDateCount: {
      type: Number,
      value: null
    },
    showOnFocus: {
      type: Boolean,
      default: true
    },
    autoZIndex: {
      type: Boolean,
      default: true
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    showButtonBar: {
      type: Boolean,
      default: false
    },
    shortYearCutoff: {
      type: String,
      default: '+10'
    },
    showTime: {
      type: Boolean,
      default: false
    },
    timeOnly: {
      type: Boolean,
      default: false
    },
    hourFormat: {
      type: String,
      default: '24'
    },
    stepHour: {
      type: Number,
      default: 1
    },
    stepMinute: {
      type: Number,
      default: 1
    },
    stepSecond: {
      type: Number,
      default: 1
    },
    showSeconds: {
      type: Boolean,
      default: false
    },
    hideOnDateTimeSelect: {
      type: Boolean,
      default: false
    },
    timeSeparator: {
      type: String,
      default: ':'
    },
    showWeek: {
      type: Boolean,
      default: false
    },
    manualInput: {
      type: Boolean,
      default: true
    },
    ariaLabelledBy: {
      type: String,
      default: null
    },
    appendTo: {
      type: String,
      default: null
    },
    inputClass: null,
    inputStyle: null,
    className: null,
    styles: null
  },
  navigationState: null,
  timePickerChange: false,
  scrollHandler: null,
  outsideClickListener: null,
  maskClickListener: null,
  resizeListener: null,
  mask: null,
  timePickerTimer: null,
  isKeydown: false,
  preventFocus: false,
  created: function created() {
    this.updateCurrentMetaData();
  },
  mounted: function mounted() {
    this.createResponsiveStyle();
    if (this.inline) {
      this.$refs.overlay && this.$refs.overlay.setAttribute(this.attributeSelector, '');
      if (!this.$attrs.disabled) {
        this.initFocusableCell();
        this.$refs.overlay.style.width = DomHandler.getOuterWidth(this.$el) + 'px';
      }
    }
  },
  updated: function updated() {
    if (this.$refs.overlay) {
      this.preventFocus = true;
      this.updateFocus();
    }
    if (this.$refs.input && this.selectionStart != null && this.selectionEnd != null) {
      this.$refs.input.$el.selectionStart = this.selectionStart;
      this.$refs.input.$el.selectionEnd = this.selectionEnd;
      this.selectionStart = null;
      this.selectionEnd = null;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.timePickerTimer) {
      clearTimeout(this.timePickerTimer);
    }
    if (this.mask) {
      this.destroyMask();
    }
    this.destroyResponsiveStyleElement();
    this.restoreAppend();
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  },
  data: function data() {
    return {
      currentMonth: null,
      currentYear: null,
      currentHour: null,
      currentMinute: null,
      currentSecond: null,
      pm: null,
      focused: false,
      overlayVisible: false,
      currentView: this.view
    };
  },
  watch: {
    value: function value() {
      this.updateCurrentMetaData();
    },
    months: function months() {
      if (this.$refs.overlay) {
        if (!this.focused) {
          setTimeout(this.updateFocus, 0);
        }
      }
    },
    numberOfMonths: function numberOfMonths() {
      this.destroyResponsiveStyleElement();
      this.createResponsiveStyle();
    },
    responsiveOptions: function responsiveOptions() {
      this.destroyResponsiveStyleElement();
      this.createResponsiveStyle();
    },
    currentView: function currentView() {
      var _this = this;
      Promise.resolve(null).then(function () {
        return _this.alignOverlay();
      });
    }
  },
  methods: {
    isComparable: function isComparable() {
      return this.value != null && typeof this.value !== 'string';
    },
    isSelected: function isSelected(dateMeta) {
      if (!this.isComparable()) {
        return false;
      }
      if (this.value) {
        if (this.isSingleSelection()) {
          return this.isDateEquals(this.value, dateMeta);
        } else if (this.isMultipleSelection()) {
          var selected = false;
          var _iterator = _createForOfIteratorHelper(this.value),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var date = _step.value;
              selected = this.isDateEquals(date, dateMeta);
              if (selected) {
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return selected;
        } else if (this.isRangeSelection()) {
          if (this.value[1]) return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);else {
            return this.isDateEquals(this.value[0], dateMeta);
          }
        }
      }
      return false;
    },
    isMonthSelected: function isMonthSelected(month) {
      var _this2 = this;
      if (this.isComparable()) {
        if (this.view !== 'month') {
          return false;
        }
        var value = this.isRangeSelection() ? this.value[0] : this.value;
        var isMonthSelected = function isMonthSelected(valueDate) {
          return valueDate.getMonth() === month && valueDate.getFullYear() === _this2.currentYear;
        };
        if (this.isMultipleSelection()) {
          return value.some(isMonthSelected);
        }
        return isMonthSelected(value);
      }
      return false;
    },
    isYearSelected: function isYearSelected(year) {
      if (this.isComparable()) {
        if (this.view !== 'year') {
          return false;
        }
        var value = this.isRangeSelection() ? this.value[0] : this.value;
        return !this.isMultipleSelection() && this.isComparable() ? value.getFullYear() === year : false;
      }
      return false;
    },
    isDateEquals: function isDateEquals(value, dateMeta) {
      if (value) return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;else return false;
    },
    isDateBetween: function isDateBetween(start, end, dateMeta) {
      var between = false;
      if (start && end) {
        var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
        return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
      }
      return between;
    },
    getFirstDayOfMonthIndex: function getFirstDayOfMonthIndex(month, year) {
      var day = new Date();
      day.setDate(1);
      day.setMonth(month);
      day.setFullYear(year);
      var dayIndex = day.getDay() + this.sundayIndex;
      return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
    },
    getDaysCountInMonth: function getDaysCountInMonth(month, year) {
      return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
    },
    getDaysCountInPrevMonth: function getDaysCountInPrevMonth(month, year) {
      var prev = this.getPreviousMonthAndYear(month, year);
      return this.getDaysCountInMonth(prev.month, prev.year);
    },
    getPreviousMonthAndYear: function getPreviousMonthAndYear(month, year) {
      var m, y;
      if (month === 0) {
        m = 11;
        y = year - 1;
      } else {
        m = month - 1;
        y = year;
      }
      return {
        'month': m,
        'year': y
      };
    },
    getNextMonthAndYear: function getNextMonthAndYear(month, year) {
      var m, y;
      if (month === 11) {
        m = 0;
        y = year + 1;
      } else {
        m = month + 1;
        y = year;
      }
      return {
        'month': m,
        'year': y
      };
    },
    daylightSavingAdjust: function daylightSavingAdjust(date) {
      if (!date) {
        return null;
      }
      date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
      return date;
    },
    isToday: function isToday(today, day, month, year) {
      return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
    },
    isSelectable: function isSelectable(day, month, year, otherMonth) {
      var validMin = true;
      var validMax = true;
      var validDate = true;
      var validDay = true;
      if (otherMonth && !this.selectOtherMonths) {
        return false;
      }
      if (this.minDate) {
        if (this.minDate.getFullYear() > year) {
          validMin = false;
        } else if (this.minDate.getFullYear() === year) {
          if (this.minDate.getMonth() > month) {
            validMin = false;
          } else if (this.minDate.getMonth() === month) {
            if (this.minDate.getDate() > day) {
              validMin = false;
            }
          }
        }
      }
      if (this.maxDate) {
        if (this.maxDate.getFullYear() < year) {
          validMax = false;
        } else if (this.maxDate.getFullYear() === year) {
          if (this.maxDate.getMonth() < month) {
            validMax = false;
          } else if (this.maxDate.getMonth() === month) {
            if (this.maxDate.getDate() < day) {
              validMax = false;
            }
          }
        }
      }
      if (this.disabledDates) {
        validDate = !this.isDateDisabled(day, month, year);
      }
      if (this.disabledDays) {
        validDay = !this.isDayDisabled(day, month, year);
      }
      return validMin && validMax && validDate && validDay;
    },
    onOverlayEnter: function onOverlayEnter(el) {
      el.setAttribute(this.attributeSelector, '');
      if (this.autoZIndex) {
        this.$refs.overlay.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
      }
      this.appendContainer();
      this.alignOverlay();
      this.$emit('show');
    },
    onOverlayEnterComplete: function onOverlayEnterComplete() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
    },
    onOverlayLeave: function onOverlayLeave() {
      this.currentView = this.view;
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit('hide');
      if (this.mask) {
        this.disableModality();
      }
    },
    onPrevButtonClick: function onPrevButtonClick(event) {
      if (this.showOtherMonths) {
        this.navigationState = {
          backward: true,
          button: true
        };
        this.navBackward(event);
      }
    },
    onNextButtonClick: function onNextButtonClick(event) {
      if (this.showOtherMonths) {
        this.navigationState = {
          backward: false,
          button: true
        };
        this.navForward(event);
      }
    },
    navBackward: function navBackward(event) {
      event.preventDefault();
      if (!this.isEnabled()) {
        return;
      }
      if (this.currentView === 'month') {
        this.decrementYear();
      } else if (this.currentView === 'year') {
        this.decrementDecade();
      } else {
        if (this.currentMonth === 0) {
          this.currentMonth = 11;
          this.decrementYear();
        } else {
          this.currentMonth--;
        }
        this.$emit('month-change', {
          month: this.currentMonth + 1,
          year: this.currentYear
        });
      }
    },
    navForward: function navForward(event) {
      event.preventDefault();
      if (!this.isEnabled()) {
        return;
      }
      if (this.currentView === 'month') {
        this.incrementYear();
      } else if (this.currentView === 'year') {
        this.incrementDecade();
      } else {
        if (this.currentMonth === 11) {
          this.currentMonth = 0;
          this.incrementYear();
        } else {
          this.currentMonth++;
        }
        this.$emit('month-change', {
          month: this.currentMonth + 1,
          year: this.currentYear
        });
      }
    },
    decrementYear: function decrementYear() {
      this.currentYear--;
    },
    decrementDecade: function decrementDecade() {
      this.currentYear = this.currentYear - 10;
    },
    incrementYear: function incrementYear() {
      this.currentYear++;
    },
    incrementDecade: function incrementDecade() {
      this.currentYear = this.currentYear + 10;
    },
    switchToMonthView: function switchToMonthView(event) {
      this.currentView = 'month';
      setTimeout(this.updateFocus, 0);
      event.preventDefault();
    },
    switchToYearView: function switchToYearView(event) {
      this.currentView = 'year';
      setTimeout(this.updateFocus, 0);
      event.preventDefault();
    },
    isEnabled: function isEnabled() {
      return !this.$attrs.disabled && !this.$attrs.readonly;
    },
    updateCurrentTimeMeta: function updateCurrentTimeMeta(date) {
      var hours = date.getHours();
      if (this.hourFormat === '12') {
        this.pm = hours > 11;
        if (hours >= 12) this.currentHour = hours == 12 ? 12 : hours - 12;else this.currentHour = hours == 0 ? 12 : hours;
      } else {
        this.currentHour = date.getHours();
      }
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this3 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function (event) {
          if (_this3.overlayVisible && _this3.isOutsideClicked(event)) {
            _this3.overlayVisible = false;
          }
        };
        document.addEventListener('mousedown', this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('mousedown', this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this4 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$el, function () {
          if (_this4.overlayVisible) {
            _this4.overlayVisible = false;
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this5 = this;
      if (!this.resizeListener) {
        this.resizeListener = function () {
          if (_this5.overlayVisible) {
            _this5.overlayVisible = false;
          }
        };
        window.addEventListener('resize', this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    },
    isOutsideClicked: function isOutsideClicked(event) {
      return !(this.$el.isSameNode(event.target) || this.isNavIconClicked(event) || this.$el.contains(event.target) || this.$refs.overlay && this.$refs.overlay.contains(event.target));
    },
    isNavIconClicked: function isNavIconClicked(event) {
      return DomHandler.hasClass(event.target, 'p-datepicker-prev') || DomHandler.hasClass(event.target, 'p-datepicker-prev-icon') || DomHandler.hasClass(event.target, 'p-datepicker-next') || DomHandler.hasClass(event.target, 'p-datepicker-next-icon');
    },
    alignOverlay: function alignOverlay() {
      if (this.touchUI) {
        this.enableModality();
      } else if (this.$refs.overlay) {
        if (this.appendTo) DomHandler.absolutePosition(this.$refs.overlay, this.$el);else DomHandler.relativePosition(this.$refs.overlay, this.$el);
      }
    },
    onButtonClick: function onButtonClick() {
      if (this.isEnabled()) {
        if (!this.overlayVisible) {
          this.$refs.input.$el.focus();
          this.overlayVisible = true;
        } else {
          this.overlayVisible = false;
        }
      }
    },
    isDateDisabled: function isDateDisabled(day, month, year) {
      if (this.disabledDates) {
        var _iterator2 = _createForOfIteratorHelper(this.disabledDates),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var disabledDate = _step2.value;
            if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
              return true;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return false;
    },
    isDayDisabled: function isDayDisabled(day, month, year) {
      if (this.disabledDays) {
        var weekday = new Date(year, month, day);
        var weekdayNumber = weekday.getDay();
        return this.disabledDays.indexOf(weekdayNumber) !== -1;
      }
      return false;
    },
    onMonthDropdownChange: function onMonthDropdownChange(value) {
      this.currentMonth = parseInt(value);
      this.$emit('month-change', {
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    },
    onYearDropdownChange: function onYearDropdownChange(value) {
      this.currentYear = parseInt(value);
      this.$emit('year-change', {
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    },
    onDateSelect: function onDateSelect(event, dateMeta) {
      var _this6 = this;
      if (this.$attrs.disabled || !dateMeta.selectable) {
        return;
      }
      DomHandler.find(this.$refs.overlay, '.p-datepicker-calendar td span:not(.p-disabled)').forEach(function (cell) {
        return cell.tabIndex = -1;
      });
      if (event) {
        event.currentTarget.focus();
      }
      if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
        var newValue = this.value.filter(function (date) {
          return !_this6.isDateEquals(date, dateMeta);
        });
        this.updateModel(newValue);
      } else {
        if (this.shouldSelectDate(dateMeta)) {
          if (dateMeta.otherMonth) {
            this.currentMonth = dateMeta.month;
            this.currentYear = dateMeta.year;
            this.selectDate(dateMeta);
          } else {
            this.selectDate(dateMeta);
          }
        }
      }
      if (this.isSingleSelection() && (!this.showTime || this.hideOnDateTimeSelect)) {
        setTimeout(function () {
          _this6.overlayVisible = false;
        }, 150);
      }
    },
    selectDate: function selectDate(dateMeta) {
      var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
      if (this.showTime) {
        if (this.hourFormat === '12' && this.pm && this.currentHour != 12) date.setHours(this.currentHour + 12);else date.setHours(this.currentHour);
        date.setMinutes(this.currentMinute);
        date.setSeconds(this.currentSecond);
      }
      if (this.minDate && this.minDate > date) {
        date = this.minDate;
        this.currentHour = date.getHours();
        this.currentMinute = date.getMinutes();
        this.currentSecond = date.getSeconds();
      }
      if (this.maxDate && this.maxDate < date) {
        date = this.maxDate;
        this.currentHour = date.getHours();
        this.currentMinute = date.getMinutes();
        this.currentSecond = date.getSeconds();
      }
      var modelVal = null;
      if (this.isSingleSelection()) {
        modelVal = date;
      } else if (this.isMultipleSelection()) {
        modelVal = this.value ? [].concat(_toConsumableArray(this.value), [date]) : [date];
      } else if (this.isRangeSelection()) {
        if (this.value && this.value.length) {
          var startDate = this.value[0];
          var endDate = this.value[1];
          if (!endDate && date.getTime() >= startDate.getTime()) {
            endDate = date;
          } else {
            startDate = date;
            endDate = null;
          }
          modelVal = [startDate, endDate];
        } else {
          modelVal = [date, null];
        }
      }
      if (modelVal !== null) {
        this.updateModel(modelVal);
      }
      this.$emit('date-select', date);
    },
    updateModel: function updateModel(value) {
      this.$emit('input', value);
    },
    shouldSelectDate: function shouldSelectDate() {
      if (this.isMultipleSelection()) return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;else return true;
    },
    isSingleSelection: function isSingleSelection() {
      return this.selectionMode === 'single';
    },
    isRangeSelection: function isRangeSelection() {
      return this.selectionMode === 'range';
    },
    isMultipleSelection: function isMultipleSelection() {
      return this.selectionMode === 'multiple';
    },
    formatValue: function formatValue(value) {
      if (typeof value === 'string') {
        return value;
      }
      var formattedValue = '';
      if (value) {
        try {
          if (this.isSingleSelection()) {
            formattedValue = this.formatDateTime(value);
          } else if (this.isMultipleSelection()) {
            for (var i = 0; i < value.length; i++) {
              var dateAsString = this.formatDateTime(value[i]);
              formattedValue += dateAsString;
              if (i !== value.length - 1) {
                formattedValue += ', ';
              }
            }
          } else if (this.isRangeSelection()) {
            if (value && value.length) {
              var startDate = value[0];
              var endDate = value[1];
              formattedValue = this.formatDateTime(startDate);
              if (endDate) {
                formattedValue += ' - ' + this.formatDateTime(endDate);
              }
            }
          }
        } catch (err) {
          formattedValue = value;
        }
      }
      return formattedValue;
    },
    formatDateTime: function formatDateTime(date) {
      var formattedValue = null;
      if (date) {
        if (this.timeOnly) {
          formattedValue = this.formatTime(date);
        } else {
          formattedValue = this.formatDate(date, this.datePattern);
          if (this.showTime) {
            formattedValue += ' ' + this.formatTime(date);
          }
        }
      }
      return formattedValue;
    },
    formatDate: function formatDate(date, format) {
      if (!date) {
        return '';
      }
      var iFormat;
      var lookAhead = function lookAhead(match) {
          var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
          if (matches) {
            iFormat++;
          }
          return matches;
        },
        formatNumber = function formatNumber(match, value, len) {
          var num = '' + value;
          if (lookAhead(match)) {
            while (num.length < len) {
              num = '0' + num;
            }
          }
          return num;
        },
        formatName = function formatName(match, value, shortNames, longNames) {
          return lookAhead(match) ? longNames[value] : shortNames[value];
        };
      var output = '';
      var literal = false;
      if (date) {
        for (iFormat = 0; iFormat < format.length; iFormat++) {
          if (literal) {
            if (format.charAt(iFormat) === '\'' && !lookAhead('\'')) {
              literal = false;
            } else {
              output += format.charAt(iFormat);
            }
          } else {
            switch (format.charAt(iFormat)) {
              case 'd':
                output += formatNumber('d', date.getDate(), 2);
                break;
              case 'D':
                output += formatName('D', date.getDay(), this.$primevue.config.locale.dayNamesShort, this.$primevue.config.locale.dayNames);
                break;
              case 'o':
                output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                break;
              case 'm':
                output += formatNumber('m', date.getMonth() + 1, 2);
                break;
              case 'M':
                output += formatName('M', date.getMonth(), this.$primevue.config.locale.monthNamesShort, this.$primevue.config.locale.monthNames);
                break;
              case 'y':
                output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + date.getFullYear() % 100;
                break;
              case '@':
                output += date.getTime();
                break;
              case '!':
                output += date.getTime() * 10000 + this.ticksTo1970;
                break;
              case '\'':
                if (lookAhead('\'')) {
                  output += '\'';
                } else {
                  literal = true;
                }
                break;
              default:
                output += format.charAt(iFormat);
            }
          }
        }
      }
      return output;
    },
    formatTime: function formatTime(date) {
      if (!date) {
        return '';
      }
      var output = '';
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      if (this.hourFormat === '12' && hours > 11 && hours !== 12) {
        hours -= 12;
      }
      if (this.hourFormat === '12') {
        output += hours === 0 ? 12 : hours < 10 ? '0' + hours : hours;
      } else {
        output += hours < 10 ? '0' + hours : hours;
      }
      output += ':';
      output += minutes < 10 ? '0' + minutes : minutes;
      if (this.showSeconds) {
        output += ':';
        output += seconds < 10 ? '0' + seconds : seconds;
      }
      if (this.hourFormat === '12') {
        output += date.getHours() > 11 ? ' ' + this.pmLabel : ' ' + this.amLabel;
      }
      return output;
    },
    onTodayButtonClick: function onTodayButtonClick(event) {
      var date = new Date();
      var dateMeta = {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,
        today: true,
        selectable: true
      };
      this.onDateSelect(null, dateMeta);
      this.$emit('today-click', date);
      event.preventDefault();
    },
    onClearButtonClick: function onClearButtonClick(event) {
      this.updateModel(null);
      this.overlayVisible = false;
      this.$emit('clear-click', event);
      event.preventDefault();
    },
    onTimePickerElementMouseDown: function onTimePickerElementMouseDown(event, type, direction) {
      if (this.isEnabled()) {
        this.repeat(event, null, type, direction);
        event.preventDefault();
      }
    },
    onTimePickerElementMouseUp: function onTimePickerElementMouseUp(event) {
      if (this.isEnabled()) {
        this.clearTimePickerTimer();
        this.updateModelTime();
        event.preventDefault();
      }
    },
    onTimePickerElementMouseLeave: function onTimePickerElementMouseLeave() {
      this.clearTimePickerTimer();
    },
    repeat: function repeat(event, interval, type, direction) {
      var _this7 = this;
      var i = interval || 500;
      this.clearTimePickerTimer();
      this.timePickerTimer = setTimeout(function () {
        _this7.repeat(event, 100, type, direction);
      }, i);
      switch (type) {
        case 0:
          if (direction === 1) this.incrementHour(event);else this.decrementHour(event);
          break;
        case 1:
          if (direction === 1) this.incrementMinute(event);else this.decrementMinute(event);
          break;
        case 2:
          if (direction === 1) this.incrementSecond(event);else this.decrementSecond(event);
          break;
      }
    },
    convertTo24Hour: function convertTo24Hour(hours, pm) {
      if (this.hourFormat == '12') {
        if (hours === 12) {
          return pm ? 12 : 0;
        } else {
          return pm ? hours + 12 : hours;
        }
      }
      return hours;
    },
    validateTime: function validateTime(hour, minute, second, pm) {
      var value = this.isComparable() ? this.value : this.viewDate;
      var convertedHour = this.convertTo24Hour(hour, pm);
      if (this.isRangeSelection()) {
        value = this.value[1] || this.value[0];
      }
      if (this.isMultipleSelection()) {
        value = this.value[this.value.length - 1];
      }
      var valueDateString = value ? value.toDateString() : null;
      if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
        if (this.minDate.getHours() > convertedHour) {
          return false;
        }
        if (this.minDate.getHours() === convertedHour) {
          if (this.minDate.getMinutes() > minute) {
            return false;
          }
          if (this.minDate.getMinutes() === minute) {
            if (this.minDate.getSeconds() > second) {
              return false;
            }
          }
        }
      }
      if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
        if (this.maxDate.getHours() < convertedHour) {
          return false;
        }
        if (this.maxDate.getHours() === convertedHour) {
          if (this.maxDate.getMinutes() < minute) {
            return false;
          }
          if (this.maxDate.getMinutes() === minute) {
            if (this.maxDate.getSeconds() < second) {
              return false;
            }
          }
        }
      }
      return true;
    },
    incrementHour: function incrementHour(event) {
      var prevHour = this.currentHour;
      var newHour = this.currentHour + this.stepHour;
      var newPM = this.pm;
      if (this.hourFormat == '24') newHour = newHour >= 24 ? newHour - 24 : newHour;else if (this.hourFormat == '12') {
        // Before the AM/PM break, now after
        if (prevHour < 12 && newHour > 11) {
          newPM = !this.pm;
        }
        newHour = newHour >= 13 ? newHour - 12 : newHour;
      }
      if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
        this.currentHour = newHour;
        this.pm = newPM;
      }
      event.preventDefault();
    },
    decrementHour: function decrementHour(event) {
      var newHour = this.currentHour - this.stepHour;
      var newPM = this.pm;
      if (this.hourFormat == '24') newHour = newHour < 0 ? 24 + newHour : newHour;else if (this.hourFormat == '12') {
        // If we were at noon/midnight, then switch
        if (this.currentHour === 12) {
          newPM = !this.pm;
        }
        newHour = newHour <= 0 ? 12 + newHour : newHour;
      }
      if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
        this.currentHour = newHour;
        this.pm = newPM;
      }
      event.preventDefault();
    },
    incrementMinute: function incrementMinute(event) {
      var newMinute = this.currentMinute + this.stepMinute;
      if (this.validateTime(this.currentHour, newMinute, this.currentSecond, true)) {
        this.currentMinute = newMinute > 59 ? newMinute - 60 : newMinute;
      }
      event.preventDefault();
    },
    decrementMinute: function decrementMinute(event) {
      var newMinute = this.currentMinute - this.stepMinute;
      newMinute = newMinute < 0 ? 60 + newMinute : newMinute;
      if (this.validateTime(this.currentHour, newMinute, this.currentSecond, true)) {
        this.currentMinute = newMinute;
      }
      event.preventDefault();
    },
    incrementSecond: function incrementSecond(event) {
      var newSecond = this.currentSecond + this.stepSecond;
      if (this.validateTime(this.currentHour, this.currentMinute, newSecond, true)) {
        this.currentSecond = newSecond > 59 ? newSecond - 60 : newSecond;
      }
      event.preventDefault();
    },
    decrementSecond: function decrementSecond(event) {
      var newSecond = this.currentSecond - this.stepSecond;
      newSecond = newSecond < 0 ? 60 + newSecond : newSecond;
      if (this.validateTime(this.currentHour, this.currentMinute, newSecond, true)) {
        this.currentSecond = newSecond;
      }
      event.preventDefault();
    },
    updateModelTime: function updateModelTime() {
      var _this8 = this;
      this.timePickerChange = true;
      var value = this.isComparable() ? this.value : new Date();
      if (this.isRangeSelection()) {
        value = this.value[1] || this.value[0];
      }
      if (this.isMultipleSelection()) {
        value = this.value[this.value.length - 1];
      }
      value = value ? new Date(value.getTime()) : new Date();
      if (this.hourFormat == '12') {
        if (this.currentHour === 12) value.setHours(this.pm ? 12 : 0);else value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
      } else {
        value.setHours(this.currentHour);
      }
      value.setMinutes(this.currentMinute);
      value.setSeconds(this.currentSecond);
      if (this.isRangeSelection()) {
        if (this.value[1]) value = [this.value[0], value];else value = [value, null];
      }
      if (this.isMultipleSelection()) {
        value = [].concat(_toConsumableArray(this.value.slice(0, -1)), [value]);
      }
      this.updateModel(value);
      this.$emit('date-select', value);
      setTimeout(function () {
        return _this8.timePickerChange = false;
      }, 0);
    },
    toggleAMPM: function toggleAMPM(event) {
      this.pm = !this.pm;
      this.updateModelTime();
      event.preventDefault();
    },
    clearTimePickerTimer: function clearTimePickerTimer() {
      if (this.timePickerTimer) {
        clearInterval(this.timePickerTimer);
      }
    },
    onMonthSelect: function onMonthSelect(event, month) {
      if (this.view === 'month') {
        this.onDateSelect(event, {
          year: this.currentYear,
          month: month,
          day: 1,
          selectable: true
        });
      } else {
        this.currentMonth = month;
        this.currentView = 'date';
        this.$emit('month-change', {
          month: this.currentMonth + 1,
          year: this.currentYear
        });
      }
      setTimeout(this.updateFocus, 0);
    },
    onYearSelect: function onYearSelect(event, year) {
      if (this.view === 'year') {
        this.onDateSelect(event, {
          year: year,
          month: 0,
          day: 1,
          selectable: true
        });
      } else {
        this.currentYear = year;
        this.currentView = 'month';
        this.$emit('year-change', {
          month: this.currentMonth + 1,
          year: this.currentYear
        });
      }
      setTimeout(this.updateFocus, 0);
    },
    enableModality: function enableModality() {
      var _this9 = this;
      if (!this.mask) {
        this.mask = document.createElement('div');
        this.mask.style.zIndex = String(parseInt(this.$refs.overlay.style.zIndex, 10) - 1);
        DomHandler.addMultipleClasses(this.mask, 'p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay p-component-overlay-enter');
        this.maskClickListener = function () {
          _this9.overlayVisible = false;
        };
        this.mask.addEventListener('click', this.maskClickListener);
        document.body.appendChild(this.mask);
        DomHandler.addClass(document.body, 'p-overflow-hidden');
      }
    },
    disableModality: function disableModality() {
      var _this10 = this;
      if (this.mask) {
        this.overlayVisible = false;
        DomHandler.addClass(this.mask, 'p-component-overlay-leave');
        this.mask.addEventListener('animationend', function () {
          _this10.destroyMask();
        });
      }
    },
    destroyMask: function destroyMask() {
      this.mask.removeEventListener('click', this.maskClickListener);
      this.maskClickListener = null;
      document.body.removeChild(this.mask);
      this.mask = null;
      var bodyChildren = document.body.children;
      var hasBlockerMasks;
      for (var i = 0; i < bodyChildren.length; i++) {
        var bodyChild = bodyChildren[i];
        if (DomHandler.hasClass(bodyChild, 'p-datepicker-mask-scrollblocker')) {
          hasBlockerMasks = true;
          break;
        }
      }
      if (!hasBlockerMasks) {
        DomHandler.removeClass(document.body, 'p-overflow-hidden');
      }
    },
    updateCurrentMetaData: function updateCurrentMetaData() {
      var viewDate = this.viewDate;
      this.currentMonth = viewDate.getMonth();
      this.currentYear = viewDate.getFullYear();
      if (this.showTime || this.timeOnly) {
        this.updateCurrentTimeMeta(viewDate);
      }
    },
    isValidSelection: function isValidSelection(value) {
      var _this11 = this;
      var isValid = true;
      if (this.isSingleSelection()) {
        if (!this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false)) {
          isValid = false;
        }
      } else if (value.every(function (v) {
        return _this11.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false);
      })) {
        if (this.isRangeSelection()) {
          isValid = value.length > 1 && value[1] > value[0] ? true : false;
        }
      }
      return isValid;
    },
    parseValue: function parseValue(text) {
      if (!text || text.trim().length === 0) {
        return null;
      }
      var value;
      if (this.isSingleSelection()) {
        value = this.parseDateTime(text);
      } else if (this.isMultipleSelection()) {
        var tokens = text.split(',');
        value = [];
        var _iterator3 = _createForOfIteratorHelper(tokens),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var token = _step3.value;
            value.push(this.parseDateTime(token.trim()));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else if (this.isRangeSelection()) {
        var _tokens = text.split(' - ');
        value = [];
        for (var i = 0; i < _tokens.length; i++) {
          value[i] = this.parseDateTime(_tokens[i].trim());
        }
      }
      return value;
    },
    parseDateTime: function parseDateTime(text) {
      var date;
      var parts = text.split(' ');
      if (this.timeOnly) {
        date = new Date();
        this.populateTime(date, parts[0], parts[1]);
      } else {
        var dateFormat = this.datePattern;
        if (this.showTime) {
          date = this.parseDate(parts[0], dateFormat);
          this.populateTime(date, parts[1], parts[2]);
        } else {
          date = this.parseDate(text, dateFormat);
        }
      }
      return date;
    },
    populateTime: function populateTime(value, timeString, ampm) {
      if (this.hourFormat == '12' && !ampm) {
        throw 'Invalid Time';
      }
      this.pm = ampm === 'PM' || ampm === 'pm';
      var time = this.parseTime(timeString);
      value.setHours(time.hour);
      value.setMinutes(time.minute);
      value.setSeconds(time.second);
    },
    parseTime: function parseTime(value) {
      var tokens = value.split(':');
      var validTokenLength = this.showSeconds ? 3 : 2;
      var regex = /^[0-9][0-9]$/;
      if (tokens.length !== validTokenLength || !tokens[0].match(regex) || !tokens[1].match(regex) || this.showSeconds && !tokens[2].match(regex)) {
        throw 'Invalid time';
      }
      var h = parseInt(tokens[0]);
      var m = parseInt(tokens[1]);
      var s = this.showSeconds ? parseInt(tokens[2]) : null;
      if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.hourFormat == '12' && h > 12 || this.showSeconds && (isNaN(s) || s > 59)) {
        throw 'Invalid time';
      } else {
        if (this.hourFormat == '12' && h !== 12 && this.pm) {
          h += 12;
        }
        return {
          hour: h,
          minute: m,
          second: s
        };
      }
    },
    parseDate: function parseDate(value, format) {
      if (format == null || value == null) {
        throw 'Invalid arguments';
      }
      value = _typeof(value) === 'object' ? value.toString() : value + '';
      if (value === '') {
        return null;
      }
      var iFormat,
        dim,
        extra,
        iValue = 0,
        shortYearCutoff = typeof this.shortYearCutoff !== 'string' ? this.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.shortYearCutoff, 10),
        year = -1,
        month = -1,
        day = -1,
        doy = -1,
        literal = false,
        date,
        lookAhead = function lookAhead(match) {
          var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
          if (matches) {
            iFormat++;
          }
          return matches;
        },
        getNumber = function getNumber(match) {
          var isDoubled = lookAhead(match),
            size = match === '@' ? 14 : match === '!' ? 20 : match === 'y' && isDoubled ? 4 : match === 'o' ? 3 : 2,
            minSize = match === 'y' ? size : 1,
            digits = new RegExp('^\\d{' + minSize + ',' + size + '}'),
            num = value.substring(iValue).match(digits);
          if (!num) {
            throw 'Missing number at position ' + iValue;
          }
          iValue += num[0].length;
          return parseInt(num[0], 10);
        },
        getName = function getName(match, shortNames, longNames) {
          var index = -1;
          var arr = lookAhead(match) ? longNames : shortNames;
          var names = [];
          for (var i = 0; i < arr.length; i++) {
            names.push([i, arr[i]]);
          }
          names.sort(function (a, b) {
            return -(a[1].length - b[1].length);
          });
          for (var _i = 0; _i < names.length; _i++) {
            var name = names[_i][1];
            if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
              index = names[_i][0];
              iValue += name.length;
              break;
            }
          }
          if (index !== -1) {
            return index + 1;
          } else {
            throw 'Unknown name at position ' + iValue;
          }
        },
        checkLiteral = function checkLiteral() {
          if (value.charAt(iValue) !== format.charAt(iFormat)) {
            throw 'Unexpected literal at position ' + iValue;
          }
          iValue++;
        };
      if (this.currentView === 'month') {
        day = 1;
      }
      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === '\'' && !lookAhead('\'')) {
            literal = false;
          } else {
            checkLiteral();
          }
        } else {
          switch (format.charAt(iFormat)) {
            case 'd':
              day = getNumber('d');
              break;
            case 'D':
              getName('D', this.$primevue.config.locale.dayNamesShort, this.$primevue.config.locale.dayNames);
              break;
            case 'o':
              doy = getNumber('o');
              break;
            case 'm':
              month = getNumber('m');
              break;
            case 'M':
              month = getName('M', this.$primevue.config.locale.monthNamesShort, this.$primevue.config.locale.monthNames);
              break;
            case 'y':
              year = getNumber('y');
              break;
            case '@':
              date = new Date(getNumber('@'));
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;
            case '!':
              date = new Date((getNumber('!') - this.ticksTo1970) / 10000);
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;
            case '\'':
              if (lookAhead('\'')) {
                checkLiteral();
              } else {
                literal = true;
              }
              break;
            default:
              checkLiteral();
          }
        }
      }
      if (iValue < value.length) {
        extra = value.substr(iValue);
        if (!/^\s+/.test(extra)) {
          throw 'Extra/unparsed characters found in date: ' + extra;
        }
      }
      if (year === -1) {
        year = new Date().getFullYear();
      } else if (year < 100) {
        year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
      }
      if (doy > -1) {
        month = 1;
        day = doy;
        do {
          dim = this.getDaysCountInMonth(year, month - 1);
          if (day <= dim) {
            break;
          }
          month++;
          day -= dim;
          // eslint-disable-next-line
        } while (true);
      }
      date = this.daylightSavingAdjust(new Date(year, month - 1, day));
      if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        throw 'Invalid date'; // E.g. 31/02/00
      }
      return date;
    },
    getWeekNumber: function getWeekNumber(date) {
      var checkDate = new Date(date.getTime());
      checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
      var time = checkDate.getTime();
      checkDate.setMonth(0);
      checkDate.setDate(1);
      return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
    },
    onDateCellKeydown: function onDateCellKeydown(event, date, groupIndex) {
      var cellContent = event.currentTarget;
      var cell = cellContent.parentElement;
      switch (event.which) {
        //down arrow
        case 40:
          {
            cellContent.tabIndex = '-1';
            var cellIndex = DomHandler.index(cell);
            var nextRow = cell.parentElement.nextElementSibling;
            if (nextRow) {
              var focusCell = nextRow.children[cellIndex].children[0];
              if (DomHandler.hasClass(focusCell, 'p-disabled')) {
                this.navigationState = {
                  backward: false
                };
                this.navForward(event);
              } else {
                nextRow.children[cellIndex].children[0].tabIndex = '0';
                nextRow.children[cellIndex].children[0].focus();
              }
            } else {
              this.navigationState = {
                backward: false
              };
              this.navForward(event);
            }
            event.preventDefault();
            break;
          }

        //up arrow
        case 38:
          {
            cellContent.tabIndex = '-1';
            var _cellIndex = DomHandler.index(cell);
            var prevRow = cell.parentElement.previousElementSibling;
            if (prevRow) {
              var _focusCell = prevRow.children[_cellIndex].children[0];
              if (DomHandler.hasClass(_focusCell, 'p-disabled')) {
                this.navigationState = {
                  backward: true
                };
                this.navBackward(event);
              } else {
                _focusCell.tabIndex = '0';
                _focusCell.focus();
              }
            } else {
              this.navigationState = {
                backward: true
              };
              this.navBackward(event);
            }
            event.preventDefault();
            break;
          }

        //left arrow
        case 37:
          {
            cellContent.tabIndex = '-1';
            var prevCell = cell.previousElementSibling;
            if (prevCell) {
              var _focusCell2 = prevCell.children[0];
              if (DomHandler.hasClass(_focusCell2, 'p-disabled')) {
                this.navigateToMonth(true, groupIndex);
              } else {
                _focusCell2.tabIndex = '0';
                _focusCell2.focus();
              }
            } else {
              this.navigateToMonth(true, groupIndex);
            }
            event.preventDefault();
            break;
          }

        //right arrow
        case 39:
          {
            cellContent.tabIndex = '-1';
            var nextCell = cell.nextElementSibling;
            if (nextCell) {
              var _focusCell3 = nextCell.children[0];
              if (DomHandler.hasClass(_focusCell3, 'p-disabled')) {
                this.navigateToMonth(false, groupIndex);
              } else {
                _focusCell3.tabIndex = '0';
                _focusCell3.focus();
              }
            } else {
              this.navigateToMonth(false, groupIndex);
            }
            event.preventDefault();
            break;
          }

        //enter
        case 13:
        case 32:
          {
            this.onDateSelect(event, date);
            event.preventDefault();
            break;
          }

        //escape
        case 27:
          {
            this.overlayVisible = false;
            event.preventDefault();
            break;
          }

        //tab
        case 9:
          {
            if (!this.inline) {
              this.trapFocus(event);
            }
            break;
          }
      }
    },
    navigateToMonth: function navigateToMonth(prev, groupIndex) {
      if (prev) {
        if (this.numberOfMonths === 1 || groupIndex === 0) {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event);
        } else {
          var prevMonthContainer = this.$refs.overlay.children[groupIndex - 1];
          var cells = DomHandler.find(prevMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
          var focusCell = cells[cells.length - 1];
          focusCell.tabIndex = '0';
          focusCell.focus();
        }
      } else {
        if (this.numberOfMonths === 1 || groupIndex === this.numberOfMonths - 1) {
          this.navigationState = {
            backward: false
          };
          this.navForward(event);
        } else {
          var nextMonthContainer = this.$refs.overlay.children[groupIndex + 1];
          var _focusCell4 = DomHandler.findSingle(nextMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
          _focusCell4.tabIndex = '0';
          _focusCell4.focus();
        }
      }
    },
    onMonthCellKeydown: function onMonthCellKeydown(event, index) {
      var cell = event.currentTarget;
      switch (event.which) {
        //arrows
        case 38:
        case 40:
          {
            cell.tabIndex = '-1';
            var cells = cell.parentElement.children;
            var cellIndex = DomHandler.index(cell);
            var nextCell = cells[event.which === 40 ? cellIndex + 3 : cellIndex - 3];
            if (nextCell) {
              nextCell.tabIndex = '0';
              nextCell.focus();
            }
            event.preventDefault();
            break;
          }

        //left arrow
        case 37:
          {
            cell.tabIndex = '-1';
            var prevCell = cell.previousElementSibling;
            if (prevCell) {
              prevCell.tabIndex = '0';
              prevCell.focus();
            } else {
              this.navigationState = {
                backward: true
              };
              this.navBackward(event);
            }
            event.preventDefault();
            break;
          }

        //right arrow
        case 39:
          {
            cell.tabIndex = '-1';
            var _nextCell = cell.nextElementSibling;
            if (_nextCell) {
              _nextCell.tabIndex = '0';
              _nextCell.focus();
            } else {
              this.navigationState = {
                backward: false
              };
              this.navForward(event);
            }
            event.preventDefault();
            break;
          }

        //enter
        case 13:
        case 32:
          {
            this.onMonthSelect(event, index);
            event.preventDefault();
            break;
          }

        //escape
        case 27:
          {
            this.overlayVisible = false;
            event.preventDefault();
            break;
          }

        //tab
        case 9:
          {
            if (!this.inline) {
              this.trapFocus(event);
            }
            break;
          }
      }
    },
    onYearCellKeydown: function onYearCellKeydown(event, index) {
      var cell = event.currentTarget;
      switch (event.which) {
        //arrows
        case 38:
        case 40:
          {
            cell.tabIndex = '-1';
            var cells = cell.parentElement.children;
            var cellIndex = DomHandler.index(cell);
            var nextCell = cells[event.which === 40 ? cellIndex + 2 : cellIndex - 2];
            if (nextCell) {
              nextCell.tabIndex = '0';
              nextCell.focus();
            }
            event.preventDefault();
            break;
          }
        //left arrow
        case 37:
          {
            cell.tabIndex = '-1';
            var prevCell = cell.previousElementSibling;
            if (prevCell) {
              prevCell.tabIndex = '0';
              prevCell.focus();
            } else {
              this.navigationState = {
                backward: true
              };
              this.navBackward(event);
            }
            event.preventDefault();
            break;
          }
        //right arrow
        case 39:
          {
            cell.tabIndex = '-1';
            var _nextCell2 = cell.nextElementSibling;
            if (_nextCell2) {
              _nextCell2.tabIndex = '0';
              _nextCell2.focus();
            } else {
              this.navigationState = {
                backward: false
              };
              this.navForward(event);
            }
            event.preventDefault();
            break;
          }
        //enter
        case 13:
        case 32:
          {
            this.onMonthSelect(event, index);
            event.preventDefault();
            break;
          }
        //escape
        case 27:
          {
            this.overlayVisible = false;
            event.preventDefault();
            break;
          }
        //tab
        case 9:
          {
            this.trapFocus(event);
            break;
          }
      }
    },
    updateFocus: function updateFocus() {
      var cell;
      if (this.navigationState) {
        if (this.navigationState.button) {
          this.initFocusableCell();
          if (this.navigationState.backward) DomHandler.findSingle(this.$refs.overlay, '.p-datepicker-prev').focus();else DomHandler.findSingle(this.$refs.overlay, '.p-datepicker-next').focus();
        } else {
          if (this.navigationState.backward) {
            var cells;
            if (this.currentView === 'month') {
              cells = DomHandler.find(this.$refs.overlay, '.p-monthpicker .p-monthpicker-month:not(.p-disabled)');
            } else if (this.currentView === 'year') {
              cells = DomHandler.find(this.$refs.overlay, '.p-yearpicker .p-yearpicker-year:not(.p-disabled)');
            } else {
              cells = DomHandler.find(this.$refs.overlay, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
            }
            if (cells && cells.length > 0) {
              cell = cells[cells.length - 1];
            }
          } else {
            if (this.currentView === 'month') {
              cell = DomHandler.findSingle(this.$refs.overlay, '.p-monthpicker .p-monthpicker-month:not(.p-disabled)');
            } else if (this.currentView === 'year') {
              cell = DomHandler.findSingle(this.$refs.overlay, '.p-yearpicker .p-yearpicker-year:not(.p-disabled)');
            } else {
              cell = DomHandler.findSingle(this.$refs.overlay, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
            }
          }
          if (cell) {
            cell.tabIndex = '0';
            cell.focus();
          }
        }
        this.navigationState = null;
      } else {
        this.initFocusableCell();
      }
    },
    initFocusableCell: function initFocusableCell() {
      var cell;
      if (this.currentView === 'month') {
        var cells = DomHandler.find(this.$refs.overlay, '.p-monthpicker .p-monthpicker-month');
        var selectedCell = DomHandler.findSingle(this.$refs.overlay, '.p-monthpicker .p-monthpicker-month.p-highlight');
        cells.forEach(function (cell) {
          return cell.tabIndex = -1;
        });
        cell = selectedCell || cells[0];
      } else if (this.currentView === 'year') {
        var _cells = DomHandler.find(this.$refs.overlay, '.p-yearpicker .p-yearpicker-year');
        var _selectedCell = DomHandler.findSingle(this.$refs.overlay, '.p-yearpicker .p-yearpicker-year.p-highlight');
        _cells.forEach(function (cell) {
          return cell.tabIndex = -1;
        });
        cell = _selectedCell || _cells[0];
      } else {
        if (this.$refs.overlay) {
          cell = DomHandler.findSingle(this.$refs.overlay, 'span.p-highlight');
          if (!cell) {
            var todayCell = DomHandler.findSingle(this.$refs.overlay, 'td.p-datepicker-today span:not(.p-disabled):not(.p-ink)');
            if (todayCell) cell = todayCell;else cell = DomHandler.findSingle(this.$refs.overlay, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink');
          }
        }
      }
      if (cell) {
        cell.tabIndex = '0';
        if (!this.preventFocus && (!this.navigationState || !this.navigationState.button) && !this.timePickerChange) {
          cell.focus();
        }
        this.preventFocus = false;
      }
    },
    trapFocus: function trapFocus(event) {
      event.preventDefault();
      var focusableElements = DomHandler.getFocusableElements(this.$refs.overlay);
      if (focusableElements && focusableElements.length > 0) {
        if (!document.activeElement) {
          focusableElements[0].focus();
        } else {
          var focusedIndex = focusableElements.indexOf(document.activeElement);
          if (event.shiftKey) {
            if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
          } else {
            if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
          }
        }
      }
    },
    onContainerButtonKeydown: function onContainerButtonKeydown(event) {
      switch (event.which) {
        //tab
        case 9:
          if (!this.inline) {
            this.trapFocus(event);
          }
          break;

        //escape
        case 27:
          this.overlayVisible = false;
          event.preventDefault();
          break;
      }
    },
    onInput: function onInput(val) {
      // IE 11 Workaround for input placeholder : https://github.com/primefaces/primeng/issues/2026
      if (!this.isKeydown) {
        return;
      }
      this.isKeydown = false;
      try {
        this.selectionStart = this.$refs.input.$el.selectionStart;
        this.selectionEnd = this.$refs.input.$el.selectionEnd;
        var value = this.parseValue(val);
        if (this.isValidSelection(value)) {
          this.updateModel(value);
        }
      } catch (err) {
        this.updateModel(val);
      }
    },
    appendContainer: function appendContainer() {
      if (this.appendTo) {
        if (this.appendTo === 'body') document.body.appendChild(this.$refs.overlay);else document.getElementById(this.appendTo).appendChild(this.$refs.overlay);
      }
    },
    restoreAppend: function restoreAppend() {
      if (this.$refs.overlay && this.appendTo) {
        if (this.appendTo === 'body') document.body.removeChild(this.$refs.overlay);else document.getElementById(this.appendTo).removeChild(this.$refs.overlay);
      }
    },
    getMonthName: function getMonthName(index) {
      return this.$primevue.config.locale.monthNames[index];
    },
    getYear: function getYear(month) {
      return (this.currentView === 'month' ? this.currentYear : month.year) + this.yearName;
    },
    createResponsiveStyle: function createResponsiveStyle() {
      if (this.numberOfMonths > 1 && this.responsiveOptions) {
        if (!this.responsiveStyleElement) {
          this.responsiveStyleElement = document.createElement('style');
          this.responsiveStyleElement.type = 'text/css';
          document.body.appendChild(this.responsiveStyleElement);
        }
        var innerHTML = '';
        if (this.responsiveOptions) {
          var responsiveOptions = _toConsumableArray(this.responsiveOptions).filter(function (o) {
            return !!(o.breakpoint && o.numMonths);
          }).sort(function (o1, o2) {
            return -1 * o1.breakpoint.localeCompare(o2.breakpoint, undefined, {
              numeric: true
            });
          });
          for (var i = 0; i < responsiveOptions.length; i++) {
            var _responsiveOptions$i = responsiveOptions[i],
              breakpoint = _responsiveOptions$i.breakpoint,
              numMonths = _responsiveOptions$i.numMonths;
            var styles = "\n                            .p-datepicker[".concat(this.attributeSelector, "] .p-datepicker-group:nth-child(").concat(numMonths, ") .p-datepicker-next {\n                                display: inline-flex !important;\n                            }\n                        ");
            for (var j = numMonths; j < this.numberOfMonths; j++) {
              styles += "\n                                .p-datepicker[".concat(this.attributeSelector, "] .p-datepicker-group:nth-child(").concat(j + 1, ") {\n                                    display: none !important;\n                                }\n                            ");
            }
            innerHTML += "\n                            @media screen and (max-width: ".concat(breakpoint, ") {\n                                ").concat(styles, "\n                            }\n                        ");
          }
        }
        this.responsiveStyleElement.innerHTML = innerHTML;
      }
    },
    destroyResponsiveStyleElement: function destroyResponsiveStyleElement() {
      if (this.responsiveStyleElement) {
        this.responsiveStyleElement.remove();
        this.responsiveStyleElement = null;
      }
    }
  },
  computed: {
    listeners: function listeners() {
      var _this12 = this;
      var $vm = this;
      return _objectSpread(_objectSpread({}, $vm.$listeners), {}, {
        input: function input(val) {
          _this12.onInput(val);
        },
        focus: function focus(event) {
          $vm.focus = true;
          if ($vm.showOnFocus && $vm.isEnabled()) {
            $vm.overlayVisible = true;
          }
          $vm.focused = true;
          $vm.$emit('focus', event);
        },
        blur: function blur(event) {
          $vm.focused = false;
          $vm.$emit('blur', event);
        },
        keydown: function keydown(event) {
          $vm.isKeydown = true;
          if (event.keyCode === 40 && $vm.$refs.overlay) {
            $vm.trapFocus(event);
          } else if (event.keyCode === 27) {
            if ($vm.overlayVisible) {
              $vm.overlayVisible = false;
              event.preventDefault();
            }
          } else if (event.keyCode === 9) {
            if ($vm.showOnFocus) {
              DomHandler.getFocusableElements($vm.$refs.overlay).forEach(function (el) {
                return el.tabIndex = '-1';
              });
            }
            if ($vm.overlayVisible) {
              $vm.overlayVisible = false;
            }
          }
          $vm.$emit('keydown', event);
        }
      });
    },
    viewDate: function viewDate() {
      var propValue = this.value;
      if (typeof propValue === 'string') {
        return new Date();
      }
      if (propValue && Array.isArray(propValue)) {
        if (this.isRangeSelection()) {
          propValue = propValue[1] || propValue[0];
        } else if (this.isMultipleSelection()) {
          propValue = propValue[propValue.length - 1];
        }
      }
      return propValue || new Date();
    },
    inputFieldValue: function inputFieldValue() {
      return this.formatValue(this.value);
    },
    containerClass: function containerClass() {
      return ['p-calendar p-component p-inputwrapper', this.className, {
        'p-calendar-w-btn': this.showIcon,
        'p-calendar-timeonly': this.timeOnly,
        'p-inputwrapper-filled': this.value,
        'p-inputwrapper-focus': this.focused
      }];
    },
    panelStyleClass: function panelStyleClass() {
      return ['p-datepicker p-component', this.panelClass, {
        'p-datepicker-inline': this.inline,
        'p-disabled': this.$attrs.disabled,
        'p-datepicker-timeonly': this.timeOnly,
        'p-datepicker-multiple-month': this.numberOfMonths > 1,
        'p-datepicker-monthpicker': this.currentView === 'month',
        'p-datepicker-yearpicker': this.currentView === 'year',
        'p-datepicker-touch-ui': this.touchUI
      }];
    },
    months: function months() {
      var months = [];
      for (var i = 0; i < this.numberOfMonths; i++) {
        var month = this.currentMonth + i;
        var year = this.currentYear;
        if (month > 11) {
          month = month % 11 - 1;
          year = year + 1;
        }
        var dates = [];
        var firstDay = this.getFirstDayOfMonthIndex(month, year);
        var daysLength = this.getDaysCountInMonth(month, year);
        var prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
        var dayNo = 1;
        var today = new Date();
        var weekNumbers = [];
        var monthRows = Math.ceil((daysLength + firstDay) / 7);
        for (var _i2 = 0; _i2 < monthRows; _i2++) {
          var week = [];
          if (_i2 == 0) {
            for (var j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
              var prev = this.getPreviousMonthAndYear(month, year);
              week.push({
                day: j,
                month: prev.month,
                year: prev.year,
                otherMonth: true,
                today: this.isToday(today, j, prev.month, prev.year),
                selectable: this.isSelectable(j, prev.month, prev.year, true)
              });
            }
            var remainingDaysLength = 7 - week.length;
            for (var _j = 0; _j < remainingDaysLength; _j++) {
              week.push({
                day: dayNo,
                month: month,
                year: year,
                today: this.isToday(today, dayNo, month, year),
                selectable: this.isSelectable(dayNo, month, year, false)
              });
              dayNo++;
            }
          } else {
            for (var _j2 = 0; _j2 < 7; _j2++) {
              if (dayNo > daysLength) {
                var next = this.getNextMonthAndYear(month, year);
                week.push({
                  day: dayNo - daysLength,
                  month: next.month,
                  year: next.year,
                  otherMonth: true,
                  today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                  selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
                });
              } else {
                week.push({
                  day: dayNo,
                  month: month,
                  year: year,
                  today: this.isToday(today, dayNo, month, year),
                  selectable: this.isSelectable(dayNo, month, year, false)
                });
              }
              dayNo++;
            }
          }
          if (this.showWeek) {
            weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
          }
          dates.push(week);
        }
        months.push({
          month: month,
          year: year,
          dates: dates,
          weekNumbers: weekNumbers
        });
      }
      return months;
    },
    weekDays: function weekDays() {
      var weekDays = [];
      var dayIndex = this.$primevue.config.locale.firstDayOfWeek;
      for (var i = 0; i < 7; i++) {
        weekDays.push(this.$primevue.config.locale.dayNamesMin[dayIndex]);
        dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
      }
      return weekDays;
    },
    ticksTo1970: function ticksTo1970() {
      return ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000;
    },
    sundayIndex: function sundayIndex() {
      return this.$primevue.config.locale.firstDayOfWeek > 0 ? 7 - this.$primevue.config.locale.firstDayOfWeek : 0;
    },
    datePattern: function datePattern() {
      return this.dateFormat || this.$primevue.config.locale.dateFormat;
    },
    yearOptions: function yearOptions() {
      if (this.yearRange) {
        var $vm = this;
        var years = this.yearRange.split(':');
        var yearStart = parseInt(years[0]);
        var yearEnd = parseInt(years[1]);
        var yearOptions = [];
        if (this.currentYear < yearStart) {
          $vm.currentYear = yearEnd;
        } else if (this.currentYear > yearEnd) {
          $vm.currentYear = yearStart;
        }
        for (var i = yearStart; i <= yearEnd; i++) {
          yearOptions.push(i);
        }
        return yearOptions;
      } else {
        return null;
      }
    },
    monthPickerValues: function monthPickerValues() {
      var monthPickerValues = [];
      for (var i = 0; i <= 11; i++) {
        monthPickerValues.push(this.$primevue.config.locale.monthNamesShort[i]);
      }
      return monthPickerValues;
    },
    yearPickerValues: function yearPickerValues() {
      var yearPickerValues = [];
      var base = this.currentYear - this.currentYear % 10;
      for (var i = 0; i < 10; i++) {
        yearPickerValues.push(base + i);
      }
      return yearPickerValues;
    },
    formattedCurrentHour: function formattedCurrentHour() {
      return this.currentHour < 10 ? '0' + this.currentHour : this.currentHour;
    },
    formattedCurrentMinute: function formattedCurrentMinute() {
      return this.currentMinute < 10 ? '0' + this.currentMinute : this.currentMinute;
    },
    formattedCurrentSecond: function formattedCurrentSecond() {
      return this.currentSecond < 10 ? '0' + this.currentSecond : this.currentSecond;
    },
    datePickerTitle: function datePickerTitle() {
      return this.$primevue.config.locale.datePickerTitle || ['date', 'year'];
    },
    amLabel: function amLabel() {
      return this.$primevue.config.locale.am || 'AM';
    },
    pmLabel: function pmLabel() {
      return this.$primevue.config.locale.pm || 'PM';
    },
    todayLabel: function todayLabel() {
      return this.$primevue.config.locale.today;
    },
    clearLabel: function clearLabel() {
      return this.$primevue.config.locale.clear;
    },
    weekHeaderLabel: function weekHeaderLabel() {
      return this.$primevue.config.locale.weekHeader;
    },
    monthNames: function monthNames() {
      return this.$primevue.config.locale.monthNames;
    },
    yearName: function yearName() {
      return this.$primevue.config.locale.yearName;
    },
    attributeSelector: function attributeSelector() {
      return UniqueComponentId();
    },
    switchViewButtonDisabled: function switchViewButtonDisabled() {
      return this.numberOfMonths > 1 || this.$attrs.disabled;
    }
  },
  components: {
    'CalendarInputText': InputText,
    'CalendarButton': Button
  },
  directives: {
    'ripple': Ripple
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", {
    class: _vm.containerClass,
    style: _vm.styles
  }, [!_vm.inline ? _c("CalendarInputText", _vm._g(_vm._b({
    ref: "input",
    class: _vm.inputClass,
    style: _vm.inputStyle,
    attrs: {
      type: "text",
      value: _vm.inputFieldValue,
      readonly: !_vm.manualInput,
      "aria-labelledby": _vm.ariaLabelledBy,
      inputmode: "none"
    }
  }, "CalendarInputText", _vm.$attrs, false), _vm.listeners)) : _vm._e(), _vm._v(" "), _vm.showIcon ? _c("CalendarButton", {
    staticClass: "p-datepicker-trigger",
    attrs: {
      icon: _vm.icon,
      tabindex: "-1",
      disabled: _vm.$attrs.disabled,
      type: "button",
      "aria-label": _vm.inputFieldValue
    },
    on: {
      click: _vm.onButtonClick
    }
  }) : _vm._e(), _vm._v(" "), _c("transition", {
    attrs: {
      name: "p-connected-overlay"
    },
    on: {
      enter: _vm.onOverlayEnter,
      "after-enter": _vm.onOverlayEnterComplete,
      leave: _vm.onOverlayLeave
    }
  }, [(_vm.inline ? true : _vm.overlayVisible) ? _c("div", {
    ref: "overlay",
    class: _vm.panelStyleClass,
    attrs: {
      role: _vm.inline ? null : "dialog",
      "aria-labelledby": _vm.ariaLabelledBy
    }
  }, [!_vm.timeOnly ? [_c("div", {
    staticClass: "p-datepicker-group-container"
  }, _vm._l(_vm.months, function (month, groupIndex) {
    return _c("div", {
      key: month.month + month.year,
      staticClass: "p-datepicker-group"
    }, [_c("div", {
      staticClass: "p-datepicker-header"
    }, [_vm._t("header"), _vm._v(" "), _c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: groupIndex === 0,
        expression: "groupIndex === 0"
      }, {
        name: "ripple",
        rawName: "v-ripple"
      }],
      staticClass: "p-datepicker-prev p-link",
      attrs: {
        type: "button",
        disabled: _vm.$attrs.disabled
      },
      on: {
        click: _vm.onPrevButtonClick,
        keydown: _vm.onContainerButtonKeydown
      }
    }, [_c("span", {
      staticClass: "p-datepicker-prev-icon pi pi-chevron-left"
    })]), _vm._v(" "), _c("div", {
      staticClass: "p-datepicker-title"
    }, [_vm._l(_vm.datePickerTitle, function (titleKey) {
      return [titleKey === "date" && _vm.currentView === "date" ? _c("button", {
        key: "title_" + titleKey,
        staticClass: "p-datepicker-month p-link",
        attrs: {
          type: "button",
          disabled: _vm.switchViewButtonDisabled
        },
        on: {
          click: _vm.switchToMonthView,
          keydown: _vm.onContainerButtonKeydown
        }
      }, [_vm._v("\n                    " + _vm._s(_vm.getMonthName(month.month)) + "\n                  ")]) : _vm._e(), _vm._v(" "), titleKey === "year" && _vm.currentView !== "year" ? _c("button", {
        key: "title_" + titleKey,
        staticClass: "p-datepicker-year p-link",
        attrs: {
          type: "button",
          disabled: _vm.switchViewButtonDisabled
        },
        on: {
          click: _vm.switchToYearView,
          keydown: _vm.onContainerButtonKeydown
        }
      }, [_vm._v("\n                    " + _vm._s(_vm.getYear(month)) + "\n                  ")]) : _vm._e(), _vm._v(" "), titleKey === "year" && _vm.currentView === "year" ? _c("span", {
        key: "title_" + titleKey + "_decade",
        staticClass: "p-datepicker-decade"
      }, [_vm._t("decade", function () {
        return [_vm._v("\n                      " + _vm._s(_vm.yearPickerValues[0]) + " - " + _vm._s(_vm.yearPickerValues[_vm.yearPickerValues.length - 1]) + "\n                    ")];
      }, {
        years: _vm.yearPickerValues
      })], 2) : _vm._e()];
    })], 2), _vm._v(" "), _c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.numberOfMonths === 1 ? true : groupIndex === _vm.numberOfMonths - 1,
        expression: "numberOfMonths === 1 ? true : groupIndex === numberOfMonths - 1"
      }, {
        name: "ripple",
        rawName: "v-ripple"
      }],
      staticClass: "p-datepicker-next p-link",
      attrs: {
        type: "button",
        disabled: _vm.$attrs.disabled
      },
      on: {
        click: _vm.onNextButtonClick,
        keydown: _vm.onContainerButtonKeydown
      }
    }, [_c("span", {
      staticClass: "p-datepicker-next-icon pi pi-chevron-right"
    })])], 2), _vm._v(" "), _vm.currentView === "date" ? _c("div", {
      staticClass: "p-datepicker-calendar-container"
    }, [_c("table", {
      staticClass: "p-datepicker-calendar"
    }, [_c("thead", [_c("tr", [_vm.showWeek ? _c("th", {
      staticClass: "p-datepicker-weekheader p-disabled",
      attrs: {
        scope: "col"
      }
    }, [_c("span", [_vm._v(_vm._s(_vm.weekHeaderLabel))])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.weekDays, function (weekDay) {
      return _c("th", {
        key: weekDay,
        attrs: {
          scope: "col"
        }
      }, [_c("span", [_vm._v(_vm._s(weekDay))])]);
    })], 2)]), _vm._v(" "), _c("tbody", _vm._l(month.dates, function (week, i) {
      return _c("tr", {
        key: week[0].day + "" + week[0].month
      }, [_vm.showWeek ? _c("td", {
        staticClass: "p-datepicker-weeknumber"
      }, [_c("span", {
        staticClass: "p-disabled"
      }, [month.weekNumbers[i] < 10 ? _c("span", {
        staticStyle: {
          visibility: "hidden"
        }
      }, [_vm._v("0")]) : _vm._e(), _vm._v("\n                        " + _vm._s(month.weekNumbers[i]) + "\n                      ")])]) : _vm._e(), _vm._v(" "), _vm._l(week, function (date) {
        return _c("td", {
          key: date.day + "" + date.month,
          class: {
            "p-datepicker-other-month": date.otherMonth,
            "p-datepicker-today": date.today
          }
        }, [_c("span", {
          directives: [{
            name: "ripple",
            rawName: "v-ripple"
          }],
          class: {
            "p-highlight": _vm.isSelected(date),
            "p-disabled": !date.selectable
          },
          attrs: {
            draggable: "false"
          },
          on: {
            click: function click($event) {
              return _vm.onDateSelect($event, date);
            },
            keydown: function keydown($event) {
              return _vm.onDateCellKeydown($event, date, groupIndex);
            }
          }
        }, [_vm._t("date", function () {
          return [_vm._v(_vm._s(date.day))];
        }, {
          date: date
        })], 2)]);
      })], 2);
    }), 0)])]) : _vm._e()]);
  }), 0), _vm._v(" "), _vm.currentView === "month" ? _c("div", {
    staticClass: "p-monthpicker"
  }, _vm._l(_vm.monthPickerValues, function (m, i) {
    return _c("span", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      key: m,
      staticClass: "p-monthpicker-month",
      class: {
        "p-highlight": _vm.isMonthSelected(i)
      },
      on: {
        click: function click($event) {
          return _vm.onMonthSelect($event, i);
        },
        keydown: function keydown($event) {
          return _vm.onMonthCellKeydown($event, i);
        }
      }
    }, [_vm._v("\n            " + _vm._s(m) + "\n          ")]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.currentView === "year" ? _c("div", {
    staticClass: "p-yearpicker"
  }, _vm._l(_vm.yearPickerValues, function (y) {
    return _c("span", {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      key: y,
      staticClass: "p-yearpicker-year",
      class: {
        "p-highlight": _vm.isYearSelected(y)
      },
      on: {
        click: function click($event) {
          return _vm.onYearSelect($event, y);
        },
        keydown: function keydown($event) {
          return _vm.onYearCellKeydown($event, y);
        }
      }
    }, [_vm._v("\n            " + _vm._s(y) + "\n          ")]);
  }), 0) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.showTime || _vm.timeOnly) && _vm.currentView === "date" ? _c("div", {
    staticClass: "p-timepicker"
  }, [_c("div", {
    staticClass: "p-hour-picker"
  }, [_c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-link",
    attrs: {
      type: "button"
    },
    on: {
      mousedown: function mousedown($event) {
        return _vm.onTimePickerElementMouseDown($event, 0, 1);
      },
      mouseup: function mouseup($event) {
        return _vm.onTimePickerElementMouseUp($event);
      },
      keydown: [_vm.onContainerButtonKeydown, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.onTimePickerElementMouseDown($event, 0, 1);
      }],
      mouseleave: function mouseleave($event) {
        return _vm.onTimePickerElementMouseLeave();
      },
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.onTimePickerElementMouseUp($event);
      }
    }
  }, [_c("span", {
    staticClass: "pi pi-chevron-up"
  })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.formattedCurrentHour))]), _vm._v(" "), _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-link",
    attrs: {
      type: "button"
    },
    on: {
      mousedown: function mousedown($event) {
        return _vm.onTimePickerElementMouseDown($event, 0, -1);
      },
      mouseup: function mouseup($event) {
        return _vm.onTimePickerElementMouseUp($event);
      },
      keydown: [_vm.onContainerButtonKeydown, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.onTimePickerElementMouseDown($event, 0, -1);
      }],
      mouseleave: function mouseleave($event) {
        return _vm.onTimePickerElementMouseLeave();
      },
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.onTimePickerElementMouseUp($event);
      }
    }
  }, [_c("span", {
    staticClass: "pi pi-chevron-down"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "p-separator"
  }, [_c("span", [_vm._v(_vm._s(_vm.timeSeparator))])]), _vm._v(" "), _c("div", {
    staticClass: "p-minute-picker"
  }, [_c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-link",
    attrs: {
      disabled: _vm.$attrs.disabled,
      type: "button"
    },
    on: {
      mousedown: function mousedown($event) {
        return _vm.onTimePickerElementMouseDown($event, 1, 1);
      },
      mouseup: function mouseup($event) {
        return _vm.onTimePickerElementMouseUp($event);
      },
      keydown: [_vm.onContainerButtonKeydown, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.onTimePickerElementMouseDown($event, 1, 1);
      }],
      mouseleave: function mouseleave($event) {
        return _vm.onTimePickerElementMouseLeave();
      },
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.onTimePickerElementMouseUp($event);
      }
    }
  }, [_c("span", {
    staticClass: "pi pi-chevron-up"
  })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.formattedCurrentMinute))]), _vm._v(" "), _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-link",
    attrs: {
      disabled: _vm.$attrs.disabled,
      type: "button"
    },
    on: {
      mousedown: function mousedown($event) {
        return _vm.onTimePickerElementMouseDown($event, 1, -1);
      },
      mouseup: function mouseup($event) {
        return _vm.onTimePickerElementMouseUp($event);
      },
      keydown: [_vm.onContainerButtonKeydown, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.onTimePickerElementMouseDown($event, 1, -1);
      }],
      mouseleave: function mouseleave($event) {
        return _vm.onTimePickerElementMouseLeave();
      },
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.onTimePickerElementMouseUp($event);
      }
    }
  }, [_c("span", {
    staticClass: "pi pi-chevron-down"
  })])]), _vm._v(" "), _vm.showSeconds ? _c("div", {
    staticClass: "p-separator"
  }, [_c("span", [_vm._v(_vm._s(_vm.timeSeparator))])]) : _vm._e(), _vm._v(" "), _vm.showSeconds ? _c("div", {
    staticClass: "p-second-picker"
  }, [_c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-link",
    attrs: {
      disabled: _vm.$attrs.disabled,
      type: "button"
    },
    on: {
      mousedown: function mousedown($event) {
        return _vm.onTimePickerElementMouseDown($event, 2, 1);
      },
      mouseup: function mouseup($event) {
        return _vm.onTimePickerElementMouseUp($event);
      },
      keydown: [_vm.onContainerButtonKeydown, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.onTimePickerElementMouseDown($event, 2, 1);
      }],
      mouseleave: function mouseleave($event) {
        return _vm.onTimePickerElementMouseLeave();
      },
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.onTimePickerElementMouseUp($event);
      }
    }
  }, [_c("span", {
    staticClass: "pi pi-chevron-up"
  })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.formattedCurrentSecond))]), _vm._v(" "), _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-link",
    attrs: {
      disabled: _vm.$attrs.disabled,
      type: "button"
    },
    on: {
      mousedown: function mousedown($event) {
        return _vm.onTimePickerElementMouseDown($event, 2, -1);
      },
      mouseup: function mouseup($event) {
        return _vm.onTimePickerElementMouseUp($event);
      },
      keydown: [_vm.onContainerButtonKeydown, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.onTimePickerElementMouseDown($event, 2, -1);
      }],
      mouseleave: function mouseleave($event) {
        return _vm.onTimePickerElementMouseLeave();
      },
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.onTimePickerElementMouseUp($event);
      }
    }
  }, [_c("span", {
    staticClass: "pi pi-chevron-down"
  })])]) : _vm._e(), _vm._v(" "), _vm.hourFormat == "12" ? _c("div", {
    staticClass: "p-separator"
  }, [_c("span", [_vm._v(_vm._s(_vm.timeSeparator))])]) : _vm._e(), _vm._v(" "), _vm.hourFormat == "12" ? _c("div", {
    staticClass: "p-ampm-picker"
  }, [_c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-link",
    attrs: {
      type: "button",
      disabled: _vm.$attrs.disabled
    },
    on: {
      click: function click($event) {
        return _vm.toggleAMPM($event);
      }
    }
  }, [_c("span", {
    staticClass: "pi pi-chevron-up"
  })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.pm ? _vm.pmLabel : _vm.amLabel))]), _vm._v(" "), _c("button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple"
    }],
    staticClass: "p-link",
    attrs: {
      type: "button",
      disabled: _vm.$attrs.disabled
    },
    on: {
      click: function click($event) {
        return _vm.toggleAMPM($event);
      }
    }
  }, [_c("span", {
    staticClass: "pi pi-chevron-down"
  })])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.showButtonBar ? _c("div", {
    staticClass: "p-datepicker-buttonbar"
  }, [_c("CalendarButton", {
    staticClass: "p-button-text",
    attrs: {
      type: "button",
      label: _vm.todayLabel
    },
    on: {
      click: function click($event) {
        return _vm.onTodayButtonClick($event);
      },
      keydown: _vm.onContainerButtonKeydown
    }
  }), _vm._v(" "), _c("CalendarButton", {
    staticClass: "p-button-text",
    attrs: {
      type: "button",
      label: _vm.clearLabel
    },
    on: {
      click: function click($event) {
        return _vm.onClearButtonClick($event);
      },
      keydown: _vm.onContainerButtonKeydown
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm._t("footer")], 2) : _vm._e()])], 1);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-3cba5b3c_0", {
    source: "\n.p-calendar {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  max-width: 100%;\n}\n.p-calendar .p-inputtext {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  width: 1%;\n}\n.p-calendar-w-btn .p-inputtext {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.p-calendar-w-btn .p-datepicker-trigger {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n/* Fluid */\n.p-fluid .p-calendar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-fluid .p-calendar .p-inputtext {\n  width: 1%;\n}\n\n/* Datepicker */\n.p-calendar .p-datepicker {\n  min-width: 100%;\n}\n.p-datepicker {\nwidth: auto;\n  position: absolute;\n}\n.p-datepicker-inline {\n  display: inline-block;\n  position: static;\n  overflow-x: auto;\n}\n\n/* Header */\n.p-datepicker-header {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.p-datepicker-header .p-datepicker-title {\n  margin: 0 auto;\n}\n.p-datepicker-prev,\n.p-datepicker-next {\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Multiple Month DatePicker */\n.p-datepicker-multiple-month .p-datepicker-group-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n/* DatePicker Table */\n.p-datepicker table {\nwidth: 100%;\nborder-collapse: collapse;\n}\n.p-datepicker td > span {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Month Picker */\n.p-monthpicker-month {\n  width: 33.3%;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Year Picker */\n.p-yearpicker-year {\n  width: 50%;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n}\n\n/*  Button Bar */\n.p-datepicker-buttonbar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n/* Time Picker */\n.p-timepicker {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.p-timepicker button {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n}\n.p-timepicker > div {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n/* Touch UI */\n.p-datepicker-touch-ui,\n.p-calendar .p-datepicker-touch-ui {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 80vw;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/calendar/Calendar.vue"],
      "names": [],
      "mappings": ";AAukFA;EACA,kBAAA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,eAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;EACA,SAAA;AACA;AAEA;EACA,0BAAA;EACA,6BAAA;AACA;AAEA;EACA,yBAAA;EACA,4BAAA;AACA;;AAEA,UAAA;AACA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA;AAEA;EACA,SAAA;AACA;;AAEA,eAAA;AACA;EACA,eAAA;AACA;AAEA;AACA,WAAA;EACA,kBAAA;AACA;AAEA;EACA,qBAAA;EACA,gBAAA;EACA,gBAAA;AACA;;AAEA,WAAA;AACA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,yBAAA;EAAA,sCAAA;MAAA,sBAAA;UAAA,8BAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;;EAEA,eAAA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,gBAAA;EACA,kBAAA;AACA;;AAEA,8BAAA;AACA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;;AAEA,qBAAA;AACA;AACA,WAAA;AACA,yBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;AACA;;AAEA,iBAAA;AACA;EACA,YAAA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AACA;;AAEA,gBAAA;AACA;EACA,UAAA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AACA;;AAEA,gBAAA;AACA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,sCAAA;MAAA,sBAAA;UAAA,8BAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;;AAEA,gBAAA;AACA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;;AAEA,aAAA;AACA;;EAEA,eAAA;EACA,QAAA;EACA,SAAA;EACA,eAAA;EACA,wCAAA;UAAA,gCAAA;AACA",
      "file": "Calendar.vue",
      "sourcesContent": ["<template>\n  <span :class=\"containerClass\" :style=\"styles\">\n    <CalendarInputText\n      ref=\"input\"\n      v-if=\"!inline\"\n      type=\"text\"\n      v-bind=\"$attrs\"\n      v-on=\"listeners\"\n      :value=\"inputFieldValue\"\n      :readonly=\"!manualInput\"\n      :aria-labelledby=\"ariaLabelledBy\"\n      inputmode=\"none\"\n      :class=\"inputClass\"\n      :style=\"inputStyle\" />\n    <CalendarButton\n      v-if=\"showIcon\"\n      :icon=\"icon\"\n      tabindex=\"-1\"\n      class=\"p-datepicker-trigger\"\n      :disabled=\"$attrs.disabled\"\n      @click=\"onButtonClick\"\n      type=\"button\"\n      :aria-label=\"inputFieldValue\" />\n    <transition\n      name=\"p-connected-overlay\"\n      @enter=\"onOverlayEnter\"\n      @after-enter=\"onOverlayEnterComplete\"\n      @leave=\"onOverlayLeave\">\n      <div\n        ref=\"overlay\"\n        :class=\"panelStyleClass\"\n        v-if=\"inline ? true : overlayVisible\"\n        :role=\"inline ? null : 'dialog'\"\n        :aria-labelledby=\"ariaLabelledBy\">\n        <template v-if=\"!timeOnly\">\n          <div class=\"p-datepicker-group-container\">\n            <div class=\"p-datepicker-group\" v-for=\"(month, groupIndex) of months\" :key=\"month.month + month.year\">\n              <div class=\"p-datepicker-header\">\n                <slot name=\"header\"></slot>\n                <button\n                  class=\"p-datepicker-prev p-link\"\n                  v-show=\"groupIndex === 0\"\n                  @click=\"onPrevButtonClick\"\n                  type=\"button\"\n                  @keydown=\"onContainerButtonKeydown\"\n                  v-ripple\n                  :disabled=\"$attrs.disabled\">\n                  <span class=\"p-datepicker-prev-icon pi pi-chevron-left\"></span>\n                </button>\n                <div class=\"p-datepicker-title\">\n                  <template v-for=\"titleKey in datePickerTitle\">\n                    <button\n                      v-if=\"titleKey === 'date' && currentView === 'date'\"\n                      :key=\"`title_${titleKey}`\"\n                      type=\"button\"\n                      @click=\"switchToMonthView\"\n                      @keydown=\"onContainerButtonKeydown\"\n                      class=\"p-datepicker-month p-link\"\n                      :disabled=\"switchViewButtonDisabled\">\n                      {{ getMonthName(month.month) }}\n                    </button>\n                    <button\n                      v-if=\"titleKey === 'year' && currentView !== 'year'\"\n                      :key=\"`title_${titleKey}`\"\n                      type=\"button\"\n                      @click=\"switchToYearView\"\n                      @keydown=\"onContainerButtonKeydown\"\n                      class=\"p-datepicker-year p-link\"\n                      :disabled=\"switchViewButtonDisabled\">\n                      {{ getYear(month) }}\n                    </button>\n                    <span\n                      v-if=\"titleKey === 'year' && currentView === 'year'\"\n                      :key=\"`title_${titleKey}_decade`\"\n                      class=\"p-datepicker-decade\">\n                      <slot name=\"decade\" :years=\"yearPickerValues\">\n                        {{ yearPickerValues[0] }} - {{ yearPickerValues[yearPickerValues.length - 1] }}\n                      </slot>\n                    </span>\n                  </template>\n                </div>\n                <button\n                  class=\"p-datepicker-next p-link\"\n                  v-show=\"numberOfMonths === 1 ? true : groupIndex === numberOfMonths - 1\"\n                  @click=\"onNextButtonClick\"\n                  type=\"button\"\n                  @keydown=\"onContainerButtonKeydown\"\n                  v-ripple\n                  :disabled=\"$attrs.disabled\">\n                  <span class=\"p-datepicker-next-icon pi pi-chevron-right\"></span>\n                </button>\n              </div>\n              <div class=\"p-datepicker-calendar-container\" v-if=\"currentView === 'date'\">\n                <table class=\"p-datepicker-calendar\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col\" v-if=\"showWeek\" class=\"p-datepicker-weekheader p-disabled\">\n                        <span>{{ weekHeaderLabel }}</span>\n                      </th>\n                      <th scope=\"col\" v-for=\"weekDay of weekDays\" :key=\"weekDay\">\n                        <span>{{ weekDay }}</span>\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr v-for=\"(week, i) of month.dates\" :key=\"week[0].day + '' + week[0].month\">\n                      <td v-if=\"showWeek\" class=\"p-datepicker-weeknumber\">\n                        <span class=\"p-disabled\">\n                          <span style=\"visibility: hidden\" v-if=\"month.weekNumbers[i] < 10\">0</span>\n                          {{ month.weekNumbers[i] }}\n                        </span>\n                      </td>\n                      <td\n                        v-for=\"date of week\"\n                        :key=\"date.day + '' + date.month\"\n                        :class=\"{ 'p-datepicker-other-month': date.otherMonth, 'p-datepicker-today': date.today }\">\n                        <span\n                          :class=\"{ 'p-highlight': isSelected(date), 'p-disabled': !date.selectable }\"\n                          @click=\"onDateSelect($event, date)\"\n                          draggable=\"false\"\n                          @keydown=\"onDateCellKeydown($event, date, groupIndex)\"\n                          v-ripple>\n                          <slot name=\"date\" :date=\"date\">{{ date.day }}</slot>\n                        </span>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n          <div class=\"p-monthpicker\" v-if=\"currentView === 'month'\">\n            <span\n              v-for=\"(m, i) of monthPickerValues\"\n              :key=\"m\"\n              @click=\"onMonthSelect($event, i)\"\n              @keydown=\"onMonthCellKeydown($event, i)\"\n              class=\"p-monthpicker-month\"\n              :class=\"{ 'p-highlight': isMonthSelected(i) }\"\n              v-ripple>\n              {{ m }}\n            </span>\n          </div>\n          <div class=\"p-yearpicker\" v-if=\"currentView === 'year'\">\n            <span\n              v-for=\"y of yearPickerValues\"\n              :key=\"y\"\n              @click=\"onYearSelect($event, y)\"\n              @keydown=\"onYearCellKeydown($event, y)\"\n              class=\"p-yearpicker-year\"\n              :class=\"{ 'p-highlight': isYearSelected(y) }\"\n              v-ripple>\n              {{ y }}\n            </span>\n          </div>\n        </template>\n        <div class=\"p-timepicker\" v-if=\"(showTime || timeOnly) && currentView === 'date'\">\n          <div class=\"p-hour-picker\">\n            <button\n              class=\"p-link\"\n              @mousedown=\"onTimePickerElementMouseDown($event, 0, 1)\"\n              @mouseup=\"onTimePickerElementMouseUp($event)\"\n              @keydown=\"onContainerButtonKeydown\"\n              v-ripple\n              @mouseleave=\"onTimePickerElementMouseLeave()\"\n              @keydown.enter=\"onTimePickerElementMouseDown($event, 0, 1)\"\n              @keyup.enter=\"onTimePickerElementMouseUp($event)\"\n              type=\"button\">\n              <span class=\"pi pi-chevron-up\"></span>\n            </button>\n            <span>{{ formattedCurrentHour }}</span>\n            <button\n              class=\"p-link\"\n              @mousedown=\"onTimePickerElementMouseDown($event, 0, -1)\"\n              @mouseup=\"onTimePickerElementMouseUp($event)\"\n              @keydown=\"onContainerButtonKeydown\"\n              v-ripple\n              @mouseleave=\"onTimePickerElementMouseLeave()\"\n              @keydown.enter=\"onTimePickerElementMouseDown($event, 0, -1)\"\n              @keyup.enter=\"onTimePickerElementMouseUp($event)\"\n              type=\"button\">\n              <span class=\"pi pi-chevron-down\"></span>\n            </button>\n          </div>\n          <div class=\"p-separator\">\n            <span>{{ timeSeparator }}</span>\n          </div>\n          <div class=\"p-minute-picker\">\n            <button\n              class=\"p-link\"\n              @mousedown=\"onTimePickerElementMouseDown($event, 1, 1)\"\n              @mouseup=\"onTimePickerElementMouseUp($event)\"\n              @keydown=\"onContainerButtonKeydown\"\n              v-ripple\n              :disabled=\"$attrs.disabled\"\n              @mouseleave=\"onTimePickerElementMouseLeave()\"\n              @keydown.enter=\"onTimePickerElementMouseDown($event, 1, 1)\"\n              @keyup.enter=\"onTimePickerElementMouseUp($event)\"\n              type=\"button\">\n              <span class=\"pi pi-chevron-up\"></span>\n            </button>\n            <span>{{ formattedCurrentMinute }}</span>\n            <button\n              class=\"p-link\"\n              @mousedown=\"onTimePickerElementMouseDown($event, 1, -1)\"\n              @mouseup=\"onTimePickerElementMouseUp($event)\"\n              @keydown=\"onContainerButtonKeydown\"\n              v-ripple\n              :disabled=\"$attrs.disabled\"\n              @mouseleave=\"onTimePickerElementMouseLeave()\"\n              @keydown.enter=\"onTimePickerElementMouseDown($event, 1, -1)\"\n              @keyup.enter=\"onTimePickerElementMouseUp($event)\"\n              type=\"button\">\n              <span class=\"pi pi-chevron-down\"></span>\n            </button>\n          </div>\n          <div class=\"p-separator\" v-if=\"showSeconds\">\n            <span>{{ timeSeparator }}</span>\n          </div>\n          <div class=\"p-second-picker\" v-if=\"showSeconds\">\n            <button\n              class=\"p-link\"\n              @mousedown=\"onTimePickerElementMouseDown($event, 2, 1)\"\n              @mouseup=\"onTimePickerElementMouseUp($event)\"\n              @keydown=\"onContainerButtonKeydown\"\n              v-ripple\n              :disabled=\"$attrs.disabled\"\n              @mouseleave=\"onTimePickerElementMouseLeave()\"\n              @keydown.enter=\"onTimePickerElementMouseDown($event, 2, 1)\"\n              @keyup.enter=\"onTimePickerElementMouseUp($event)\"\n              type=\"button\">\n              <span class=\"pi pi-chevron-up\"></span>\n            </button>\n            <span>{{ formattedCurrentSecond }}</span>\n            <button\n              class=\"p-link\"\n              @mousedown=\"onTimePickerElementMouseDown($event, 2, -1)\"\n              @mouseup=\"onTimePickerElementMouseUp($event)\"\n              @keydown=\"onContainerButtonKeydown\"\n              v-ripple\n              :disabled=\"$attrs.disabled\"\n              @mouseleave=\"onTimePickerElementMouseLeave()\"\n              @keydown.enter=\"onTimePickerElementMouseDown($event, 2, -1)\"\n              @keyup.enter=\"onTimePickerElementMouseUp($event)\"\n              type=\"button\">\n              <span class=\"pi pi-chevron-down\"></span>\n            </button>\n          </div>\n          <div class=\"p-separator\" v-if=\"hourFormat == '12'\">\n            <span>{{ timeSeparator }}</span>\n          </div>\n          <div class=\"p-ampm-picker\" v-if=\"hourFormat == '12'\">\n            <button class=\"p-link\" @click=\"toggleAMPM($event)\" type=\"button\" v-ripple :disabled=\"$attrs.disabled\">\n              <span class=\"pi pi-chevron-up\"></span>\n            </button>\n            <span>{{ pm ? pmLabel : amLabel }}</span>\n            <button class=\"p-link\" @click=\"toggleAMPM($event)\" type=\"button\" v-ripple :disabled=\"$attrs.disabled\">\n              <span class=\"pi pi-chevron-down\"></span>\n            </button>\n          </div>\n        </div>\n        <div class=\"p-datepicker-buttonbar\" v-if=\"showButtonBar\">\n          <CalendarButton\n            type=\"button\"\n            :label=\"todayLabel\"\n            @click=\"onTodayButtonClick($event)\"\n            class=\"p-button-text\"\n            @keydown=\"onContainerButtonKeydown\" />\n          <CalendarButton\n            type=\"button\"\n            :label=\"clearLabel\"\n            @click=\"onClearButtonClick($event)\"\n            class=\"p-button-text\"\n            @keydown=\"onContainerButtonKeydown\" />\n        </div>\n        <slot name=\"footer\"></slot>\n      </div>\n    </transition>\n  </span>\n</template>\n\n<script>\nimport { ConnectedOverlayScrollHandler, UniqueComponentId, DomHandler } from 'primevue2/utils'\nimport InputText from 'primevue2/inputtext'\nimport Button from 'primevue2/button'\nimport Ripple from 'primevue2/ripple'\n\nexport default {\n  name: 'Calendar',\n  inheritAttrs: false,\n  props: {\n    value: null,\n    selectionMode: {\n      type: String,\n      default: 'single'\n    },\n    dateFormat: String,\n    inline: {\n      type: Boolean,\n      default: false\n    },\n    showOtherMonths: {\n      type: Boolean,\n      default: true\n    },\n    selectOtherMonths: {\n      type: Boolean,\n      default: false\n    },\n    showIcon: {\n      type: Boolean,\n      default: false\n    },\n    icon: {\n      type: String,\n      default: 'pi pi-calendar'\n    },\n    numberOfMonths: {\n      type: Number,\n      default: 1\n    },\n    responsiveOptions: Array,\n    view: {\n      type: String,\n      default: 'date'\n    },\n    touchUI: {\n      type: Boolean,\n      default: false\n    },\n    monthNavigator: {\n      type: Boolean,\n      default: false\n    },\n    yearNavigator: {\n      type: Boolean,\n      default: false\n    },\n    yearRange: {\n      type: String,\n      default: null\n    },\n    panelClass: {\n      type: String,\n      default: null\n    },\n    panelStyle: {\n      type: String,\n      default: null\n    },\n    minDate: {\n      type: Date,\n      value: null\n    },\n    maxDate: {\n      type: Date,\n      value: null\n    },\n    disabledDates: {\n      type: Array,\n      value: null\n    },\n    disabledDays: {\n      type: Array,\n      value: null\n    },\n    maxDateCount: {\n      type: Number,\n      value: null\n    },\n    showOnFocus: {\n      type: Boolean,\n      default: true\n    },\n    autoZIndex: {\n      type: Boolean,\n      default: true\n    },\n    baseZIndex: {\n      type: Number,\n      default: 0\n    },\n    showButtonBar: {\n      type: Boolean,\n      default: false\n    },\n    shortYearCutoff: {\n      type: String,\n      default: '+10'\n    },\n    showTime: {\n      type: Boolean,\n      default: false\n    },\n    timeOnly: {\n      type: Boolean,\n      default: false\n    },\n    hourFormat: {\n      type: String,\n      default: '24'\n    },\n    stepHour: {\n      type: Number,\n      default: 1\n    },\n    stepMinute: {\n      type: Number,\n      default: 1\n    },\n    stepSecond: {\n      type: Number,\n      default: 1\n    },\n    showSeconds: {\n      type: Boolean,\n      default: false\n    },\n    hideOnDateTimeSelect: {\n      type: Boolean,\n      default: false\n    },\n    timeSeparator: {\n      type: String,\n      default: ':'\n    },\n    showWeek: {\n      type: Boolean,\n      default: false\n    },\n    manualInput: {\n      type: Boolean,\n      default: true\n    },\n    ariaLabelledBy: {\n      type: String,\n      default: null\n    },\n    appendTo: {\n      type: String,\n      default: null\n    },\n    inputClass: null,\n    inputStyle: null,\n    className: null,\n    styles: null\n  },\n  navigationState: null,\n  timePickerChange: false,\n  scrollHandler: null,\n  outsideClickListener: null,\n  maskClickListener: null,\n  resizeListener: null,\n  mask: null,\n  timePickerTimer: null,\n  isKeydown: false,\n  preventFocus: false,\n  created() {\n    this.updateCurrentMetaData()\n  },\n  mounted() {\n    this.createResponsiveStyle()\n    if (this.inline) {\n      this.$refs.overlay && this.$refs.overlay.setAttribute(this.attributeSelector, '')\n      if (!this.$attrs.disabled) {\n        this.initFocusableCell()\n        this.$refs.overlay.style.width = DomHandler.getOuterWidth(this.$el) + 'px'\n      }\n    }\n  },\n  updated() {\n    if (this.$refs.overlay) {\n      this.preventFocus = true\n      this.updateFocus()\n    }\n\n    if (this.$refs.input && this.selectionStart != null && this.selectionEnd != null) {\n      this.$refs.input.$el.selectionStart = this.selectionStart\n      this.$refs.input.$el.selectionEnd = this.selectionEnd\n      this.selectionStart = null\n      this.selectionEnd = null\n    }\n  },\n  beforeDestroy() {\n    if (this.timePickerTimer) {\n      clearTimeout(this.timePickerTimer)\n    }\n\n    if (this.mask) {\n      this.destroyMask()\n    }\n\n    this.destroyResponsiveStyleElement()\n    this.restoreAppend()\n    this.unbindOutsideClickListener()\n    this.unbindResizeListener()\n\n    if (this.scrollHandler) {\n      this.scrollHandler.destroy()\n      this.scrollHandler = null\n    }\n  },\n  data() {\n    return {\n      currentMonth: null,\n      currentYear: null,\n      currentHour: null,\n      currentMinute: null,\n      currentSecond: null,\n      pm: null,\n      focused: false,\n      overlayVisible: false,\n      currentView: this.view\n    }\n  },\n  watch: {\n    value() {\n      this.updateCurrentMetaData()\n    },\n    months() {\n      if (this.$refs.overlay) {\n        if (!this.focused) {\n          setTimeout(this.updateFocus, 0)\n        }\n      }\n    },\n    numberOfMonths() {\n      this.destroyResponsiveStyleElement()\n      this.createResponsiveStyle()\n    },\n    responsiveOptions() {\n      this.destroyResponsiveStyleElement()\n      this.createResponsiveStyle()\n    },\n    currentView() {\n      Promise.resolve(null).then(() => this.alignOverlay())\n    }\n  },\n  methods: {\n    isComparable() {\n      return this.value != null && typeof this.value !== 'string'\n    },\n    isSelected(dateMeta) {\n      if (!this.isComparable()) {\n        return false\n      }\n\n      if (this.value) {\n        if (this.isSingleSelection()) {\n          return this.isDateEquals(this.value, dateMeta)\n        }\n        else if (this.isMultipleSelection()) {\n          let selected = false\n          for (let date of this.value) {\n            selected = this.isDateEquals(date, dateMeta)\n            if (selected) {\n              break\n            }\n          }\n\n          return selected\n        }\n        else if (this.isRangeSelection()) {\n          if (this.value[1])\n            return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta)\n          else {\n            return this.isDateEquals(this.value[0], dateMeta)\n          }\n\n        }\n      }\n\n      return false\n    },\n    isMonthSelected(month) {\n      if (this.isComparable()) {\n        if (this.view !== 'month') {\n          return false\n        }\n\n        let value = this.isRangeSelection() ? this.value[0] : this.value\n        const isMonthSelected = (valueDate) => valueDate.getMonth() === month && valueDate.getFullYear() === this.currentYear\n\n        if (this.isMultipleSelection()) {\n          return value.some(isMonthSelected)\n        }\n        return isMonthSelected(value)\n      }\n\n      return false\n    },\n    isYearSelected(year) {\n      if (this.isComparable()) {\n        if (this.view !== 'year') {\n          return false\n        }\n\n        let value = this.isRangeSelection() ? this.value[0] : this.value\n        return !this.isMultipleSelection() && this.isComparable() ? (value.getFullYear() === year) : false\n      }\n      return false\n    },\n    isDateEquals(value, dateMeta) {\n      if (value)\n        return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year\n      else\n        return false\n    },\n    isDateBetween(start, end, dateMeta) {\n      let between = false\n      if (start && end) {\n        let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day)\n        return start.getTime() <= date.getTime() && end.getTime() >= date.getTime()\n      }\n\n      return between\n    },\n    getFirstDayOfMonthIndex(month, year) {\n      let day = new Date()\n      day.setDate(1)\n      day.setMonth(month)\n      day.setFullYear(year)\n\n      let dayIndex = day.getDay() + this.sundayIndex\n      return dayIndex >= 7 ? dayIndex - 7 : dayIndex\n    },\n    getDaysCountInMonth(month, year) {\n      return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate()\n    },\n    getDaysCountInPrevMonth(month, year) {\n      let prev = this.getPreviousMonthAndYear(month, year)\n      return this.getDaysCountInMonth(prev.month, prev.year)\n    },\n    getPreviousMonthAndYear(month, year) {\n      let m, y\n\n      if (month === 0) {\n        m = 11\n        y = year - 1\n      }\n      else {\n        m = month - 1\n        y = year\n      }\n\n      return { 'month': m, 'year': y }\n    },\n    getNextMonthAndYear(month, year) {\n      let m, y\n\n      if (month === 11) {\n        m = 0\n        y = year + 1\n      }\n      else {\n        m = month + 1\n        y = year\n      }\n\n      return { 'month': m, 'year': y }\n    },\n    daylightSavingAdjust(date) {\n      if (!date) {\n        return null\n      }\n\n      date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0)\n\n      return date\n    },\n    isToday(today, day, month, year) {\n      return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year\n    },\n    isSelectable(day, month, year, otherMonth) {\n      let validMin = true\n      let validMax = true\n      let validDate = true\n      let validDay = true\n\n      if (otherMonth && !this.selectOtherMonths) {\n        return false\n      }\n\n      if (this.minDate) {\n        if (this.minDate.getFullYear() > year) {\n          validMin = false\n        }\n        else if (this.minDate.getFullYear() === year) {\n          if (this.minDate.getMonth() > month) {\n            validMin = false\n          }\n          else if (this.minDate.getMonth() === month) {\n            if (this.minDate.getDate() > day) {\n              validMin = false\n            }\n          }\n        }\n      }\n\n      if (this.maxDate) {\n        if (this.maxDate.getFullYear() < year) {\n          validMax = false\n        }\n        else if (this.maxDate.getFullYear() === year) {\n          if (this.maxDate.getMonth() < month) {\n            validMax = false\n          }\n          else if (this.maxDate.getMonth() === month) {\n            if (this.maxDate.getDate() < day) {\n              validMax = false\n            }\n          }\n        }\n      }\n\n      if (this.disabledDates) {\n        validDate = !this.isDateDisabled(day, month, year)\n      }\n\n      if (this.disabledDays) {\n        validDay = !this.isDayDisabled(day, month, year)\n      }\n\n      return validMin && validMax && validDate && validDay\n    },\n    onOverlayEnter(el) {\n      el.setAttribute(this.attributeSelector, '')\n\n      if (this.autoZIndex) {\n        this.$refs.overlay.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())\n      }\n      this.appendContainer()\n      this.alignOverlay()\n      this.$emit('show')\n    },\n    onOverlayEnterComplete() {\n      this.bindOutsideClickListener()\n      this.bindScrollListener()\n      this.bindResizeListener()\n    },\n    onOverlayLeave() {\n      this.currentView = this.view\n      this.unbindOutsideClickListener()\n      this.unbindScrollListener()\n      this.unbindResizeListener()\n      this.$emit('hide')\n\n      if (this.mask) {\n        this.disableModality()\n      }\n    },\n    onPrevButtonClick(event) {\n      if (this.showOtherMonths) {\n        this.navigationState = { backward: true, button: true }\n        this.navBackward(event)\n      }\n    },\n    onNextButtonClick(event) {\n      if (this.showOtherMonths) {\n        this.navigationState = { backward: false, button: true }\n        this.navForward(event)\n      }\n    },\n    navBackward(event) {\n      event.preventDefault()\n\n      if (!this.isEnabled()) {\n        return\n      }\n\n      if (this.currentView === 'month') {\n        this.decrementYear()\n      }\n      else if (this.currentView === 'year') {\n        this.decrementDecade()\n      }\n      else {\n        if (this.currentMonth === 0) {\n          this.currentMonth = 11\n          this.decrementYear()\n        }\n        else {\n          this.currentMonth--\n        }\n\n        this.$emit('month-change', { month: this.currentMonth + 1, year: this.currentYear })\n      }\n    },\n    navForward(event) {\n      event.preventDefault()\n\n      if (!this.isEnabled()) {\n        return\n      }\n\n      if (this.currentView === 'month') {\n        this.incrementYear()\n      }\n      else if (this.currentView === 'year') {\n        this.incrementDecade()\n      }\n      else {\n        if (this.currentMonth === 11) {\n          this.currentMonth = 0\n          this.incrementYear()\n        }\n        else {\n          this.currentMonth++\n        }\n\n        this.$emit('month-change', { month: this.currentMonth + 1, year: this.currentYear })\n      }\n    },\n    decrementYear() {\n      this.currentYear--\n    },\n    decrementDecade() {\n      this.currentYear = this.currentYear - 10\n    },\n    incrementYear() {\n      this.currentYear++\n    },\n    incrementDecade() {\n      this.currentYear = this.currentYear + 10\n    },\n    switchToMonthView(event) {\n      this.currentView = 'month'\n      setTimeout(this.updateFocus, 0)\n      event.preventDefault()\n    },\n    switchToYearView(event) {\n      this.currentView = 'year'\n      setTimeout(this.updateFocus, 0)\n      event.preventDefault()\n    },\n    isEnabled() {\n      return !this.$attrs.disabled && !this.$attrs.readonly\n    },\n    updateCurrentTimeMeta(date) {\n      const hours = date.getHours()\n\n      if (this.hourFormat === '12') {\n        this.pm = hours > 11\n\n        if (hours >= 12)\n          this.currentHour = (hours == 12) ? 12 : hours - 12\n        else\n          this.currentHour = (hours == 0) ? 12 : hours\n      }\n      else {\n        this.currentHour = date.getHours()\n      }\n\n      this.currentMinute = date.getMinutes()\n      this.currentSecond = date.getSeconds()\n    },\n    bindOutsideClickListener() {\n      if (!this.outsideClickListener) {\n        this.outsideClickListener = (event) => {\n          if (this.overlayVisible && this.isOutsideClicked(event)) {\n            this.overlayVisible = false\n          }\n        }\n        document.addEventListener('mousedown', this.outsideClickListener)\n      }\n    },\n    unbindOutsideClickListener() {\n      if (this.outsideClickListener) {\n        document.removeEventListener('mousedown', this.outsideClickListener)\n        this.outsideClickListener = null\n      }\n    },\n    bindScrollListener() {\n      if (!this.scrollHandler) {\n        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$el, () => {\n          if (this.overlayVisible) {\n            this.overlayVisible = false\n          }\n        })\n      }\n\n      this.scrollHandler.bindScrollListener()\n    },\n    unbindScrollListener() {\n      if (this.scrollHandler) {\n        this.scrollHandler.unbindScrollListener()\n      }\n    },\n    bindResizeListener() {\n      if (!this.resizeListener) {\n        this.resizeListener = () => {\n          if (this.overlayVisible) {\n            this.overlayVisible = false\n          }\n        }\n        window.addEventListener('resize', this.resizeListener)\n      }\n    },\n    unbindResizeListener() {\n      if (this.resizeListener) {\n        window.removeEventListener('resize', this.resizeListener)\n        this.resizeListener = null\n      }\n    },\n    isOutsideClicked(event) {\n      return !(this.$el.isSameNode(event.target) || this.isNavIconClicked(event) ||\n        this.$el.contains(event.target) || (this.$refs.overlay && this.$refs.overlay.contains(event.target)))\n    },\n    isNavIconClicked(event) {\n      return (DomHandler.hasClass(event.target, 'p-datepicker-prev') || DomHandler.hasClass(event.target, 'p-datepicker-prev-icon')\n        || DomHandler.hasClass(event.target, 'p-datepicker-next') || DomHandler.hasClass(event.target, 'p-datepicker-next-icon'))\n    },\n    alignOverlay() {\n      if (this.touchUI) {\n        this.enableModality()\n      }\n      else if (this.$refs.overlay) {\n        if (this.appendTo)\n          DomHandler.absolutePosition(this.$refs.overlay, this.$el)\n        else\n          DomHandler.relativePosition(this.$refs.overlay, this.$el)\n      }\n    },\n    onButtonClick() {\n      if (this.isEnabled()) {\n        if (!this.overlayVisible) {\n          this.$refs.input.$el.focus()\n          this.overlayVisible = true\n        }\n        else {\n          this.overlayVisible = false\n        }\n      }\n    },\n    isDateDisabled(day, month, year) {\n      if (this.disabledDates) {\n        for (let disabledDate of this.disabledDates) {\n          if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {\n            return true\n          }\n        }\n      }\n\n      return false\n    },\n    isDayDisabled(day, month, year) {\n      if (this.disabledDays) {\n        let weekday = new Date(year, month, day)\n        let weekdayNumber = weekday.getDay()\n        return this.disabledDays.indexOf(weekdayNumber) !== -1\n      }\n      return false\n    },\n    onMonthDropdownChange(value) {\n      this.currentMonth = parseInt(value)\n      this.$emit('month-change', { month: this.currentMonth + 1, year: this.currentYear })\n    },\n    onYearDropdownChange(value) {\n      this.currentYear = parseInt(value)\n      this.$emit('year-change', { month: this.currentMonth + 1, year: this.currentYear })\n    },\n    onDateSelect(event, dateMeta) {\n      if (this.$attrs.disabled || !dateMeta.selectable) {\n        return\n      }\n\n      DomHandler.find(this.$refs.overlay, '.p-datepicker-calendar td span:not(.p-disabled)').forEach(cell => cell.tabIndex = -1)\n\n      if (event) {\n        event.currentTarget.focus()\n      }\n\n      if (this.isMultipleSelection() && this.isSelected(dateMeta)) {\n        let newValue = this.value.filter(date => !this.isDateEquals(date, dateMeta))\n        this.updateModel(newValue)\n      }\n      else {\n        if (this.shouldSelectDate(dateMeta)) {\n          if (dateMeta.otherMonth) {\n            this.currentMonth = dateMeta.month\n            this.currentYear = dateMeta.year\n            this.selectDate(dateMeta)\n          }\n          else {\n            this.selectDate(dateMeta)\n          }\n        }\n      }\n\n      if (this.isSingleSelection() && (!this.showTime || this.hideOnDateTimeSelect)) {\n        setTimeout(() => {\n          this.overlayVisible = false\n        }, 150)\n      }\n    },\n    selectDate(dateMeta) {\n      let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day)\n\n      if (this.showTime) {\n        if (this.hourFormat === '12' && this.pm && this.currentHour != 12)\n          date.setHours(this.currentHour + 12)\n        else\n          date.setHours(this.currentHour)\n\n        date.setMinutes(this.currentMinute)\n        date.setSeconds(this.currentSecond)\n      }\n\n      if (this.minDate && this.minDate > date) {\n        date = this.minDate\n        this.currentHour = date.getHours()\n        this.currentMinute = date.getMinutes()\n        this.currentSecond = date.getSeconds()\n      }\n\n      if (this.maxDate && this.maxDate < date) {\n        date = this.maxDate\n        this.currentHour = date.getHours()\n        this.currentMinute = date.getMinutes()\n        this.currentSecond = date.getSeconds()\n      }\n\n      let modelVal = null\n\n      if (this.isSingleSelection()) {\n        modelVal = date\n      }\n      else if (this.isMultipleSelection()) {\n        modelVal = this.value ? [...this.value, date] : [date]\n      }\n      else if (this.isRangeSelection()) {\n        if (this.value && this.value.length) {\n          let startDate = this.value[0]\n          let endDate = this.value[1]\n\n          if (!endDate && date.getTime() >= startDate.getTime()) {\n            endDate = date\n          }\n          else {\n            startDate = date\n            endDate = null\n          }\n          modelVal = [startDate, endDate]\n        }\n        else {\n          modelVal = [date, null]\n        }\n      }\n\n      if (modelVal !== null) {\n        this.updateModel(modelVal)\n      }\n      this.$emit('date-select', date)\n    },\n    updateModel(value) {\n      this.$emit('input', value)\n    },\n    shouldSelectDate() {\n      if (this.isMultipleSelection())\n        return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true\n      else\n        return true\n    },\n    isSingleSelection() {\n      return this.selectionMode === 'single'\n    },\n    isRangeSelection() {\n      return this.selectionMode === 'range'\n    },\n    isMultipleSelection() {\n      return this.selectionMode === 'multiple'\n    },\n    formatValue(value) {\n      if (typeof value === 'string') {\n        return value\n      }\n\n      let formattedValue = ''\n      if (value) {\n        try {\n          if (this.isSingleSelection()) {\n            formattedValue = this.formatDateTime(value)\n          }\n          else if (this.isMultipleSelection()) {\n            for (let i = 0; i < value.length; i++) {\n              let dateAsString = this.formatDateTime(value[i])\n              formattedValue += dateAsString\n              if (i !== (value.length - 1)) {\n                formattedValue += ', '\n              }\n            }\n          }\n          else if (this.isRangeSelection()) {\n            if (value && value.length) {\n              let startDate = value[0]\n              let endDate = value[1]\n\n              formattedValue = this.formatDateTime(startDate)\n              if (endDate) {\n                formattedValue += ' - ' + this.formatDateTime(endDate)\n              }\n            }\n          }\n        }\n        catch (err) {\n          formattedValue = value\n        }\n      }\n\n      return formattedValue\n    },\n    formatDateTime(date) {\n      let formattedValue = null\n      if (date) {\n        if (this.timeOnly) {\n          formattedValue = this.formatTime(date)\n        }\n        else {\n          formattedValue = this.formatDate(date, this.datePattern)\n          if (this.showTime) {\n            formattedValue += ' ' + this.formatTime(date)\n          }\n        }\n      }\n\n      return formattedValue\n    },\n    formatDate(date, format) {\n      if (!date) {\n        return ''\n      }\n\n      let iFormat\n      const lookAhead = (match) => {\n          const matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match)\n          if (matches) {\n            iFormat++\n          }\n          return matches\n        },\n        formatNumber = (match, value, len) => {\n          let num = '' + value\n          if (lookAhead(match)) {\n            while (num.length < len) {\n              num = '0' + num\n            }\n          }\n          return num\n        },\n        formatName = (match, value, shortNames, longNames) => {\n          return (lookAhead(match) ? longNames[value] : shortNames[value])\n        }\n      let output = ''\n      let literal = false\n\n      if (date) {\n        for (iFormat = 0; iFormat < format.length; iFormat++) {\n          if (literal) {\n            if (format.charAt(iFormat) === '\\'' && !lookAhead('\\'')) {\n              literal = false\n            } else {\n              output += format.charAt(iFormat)\n            }\n          } else {\n            switch (format.charAt(iFormat)) {\n            case 'd':\n              output += formatNumber('d', date.getDate(), 2)\n              break\n            case 'D':\n              output += formatName('D', date.getDay(), this.$primevue.config.locale.dayNamesShort, this.$primevue.config.locale.dayNames)\n              break\n            case 'o':\n              output += formatNumber('o',\n                Math.round((\n                  new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() -\n                    new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3)\n              break\n            case 'm':\n              output += formatNumber('m', date.getMonth() + 1, 2)\n              break\n            case 'M':\n              output += formatName('M', date.getMonth(), this.$primevue.config.locale.monthNamesShort, this.$primevue.config.locale.monthNames)\n              break\n            case 'y':\n              output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + (date.getFullYear() % 100)\n              break\n            case '@':\n              output += date.getTime()\n              break\n            case '!':\n              output += date.getTime() * 10000 + this.ticksTo1970\n              break\n            case '\\'':\n              if (lookAhead('\\'')) {\n                output += '\\''\n              } else {\n                literal = true\n              }\n              break\n            default:\n              output += format.charAt(iFormat)\n            }\n          }\n        }\n      }\n      return output\n    },\n    formatTime(date) {\n      if (!date) {\n        return ''\n      }\n\n      let output = ''\n      let hours = date.getHours()\n      let minutes = date.getMinutes()\n      let seconds = date.getSeconds()\n\n      if (this.hourFormat === '12' && hours > 11 && hours !== 12) {\n        hours -= 12\n      }\n\n      if (this.hourFormat === '12') {\n        output += hours === 0 ? 12 : (hours < 10) ? '0' + hours : hours\n      }\n      else {\n        output += (hours < 10) ? '0' + hours : hours\n      }\n      output += ':'\n      output += (minutes < 10) ? '0' + minutes : minutes\n\n      if (this.showSeconds) {\n        output += ':'\n        output += (seconds < 10) ? '0' + seconds : seconds\n      }\n\n      if (this.hourFormat === '12') {\n        output += date.getHours() > 11 ? ' ' + this.pmLabel : ' ' + this.amLabel\n      }\n\n      return output\n    },\n    onTodayButtonClick(event) {\n      let date = new Date()\n      let dateMeta = {\n        day: date.getDate(),\n        month: date.getMonth(),\n        year: date.getFullYear(),\n        otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,\n        today: true,\n        selectable: true\n      }\n\n      this.onDateSelect(null, dateMeta)\n      this.$emit('today-click', date)\n      event.preventDefault()\n    },\n    onClearButtonClick(event) {\n      this.updateModel(null)\n      this.overlayVisible = false\n      this.$emit('clear-click', event)\n      event.preventDefault()\n    },\n    onTimePickerElementMouseDown(event, type, direction) {\n      if (this.isEnabled()) {\n        this.repeat(event, null, type, direction)\n        event.preventDefault()\n      }\n    },\n    onTimePickerElementMouseUp(event) {\n      if (this.isEnabled()) {\n        this.clearTimePickerTimer()\n        this.updateModelTime()\n        event.preventDefault()\n      }\n    },\n    onTimePickerElementMouseLeave() {\n      this.clearTimePickerTimer()\n    },\n    repeat(event, interval, type, direction) {\n      let i = interval || 500\n\n      this.clearTimePickerTimer()\n      this.timePickerTimer = setTimeout(() => {\n        this.repeat(event, 100, type, direction)\n      }, i)\n\n      switch (type) {\n      case 0:\n        if (direction === 1)\n          this.incrementHour(event)\n        else\n          this.decrementHour(event)\n        break\n\n      case 1:\n        if (direction === 1)\n          this.incrementMinute(event)\n        else\n          this.decrementMinute(event)\n        break\n\n      case 2:\n        if (direction === 1)\n          this.incrementSecond(event)\n        else\n          this.decrementSecond(event)\n        break\n      }\n    },\n    convertTo24Hour(hours, pm) {\n      if (this.hourFormat == '12') {\n        if (hours === 12) {\n          return (pm ? 12 : 0)\n        } else {\n          return (pm ? hours + 12 : hours)\n        }\n      }\n      return hours\n    },\n    validateTime(hour, minute, second, pm) {\n      let value = this.isComparable() ? this.value : this.viewDate\n      const convertedHour = this.convertTo24Hour(hour, pm)\n\n      if (this.isRangeSelection()) {\n        value = this.value[1] || this.value[0]\n      }\n      if (this.isMultipleSelection()) {\n        value = this.value[this.value.length - 1]\n      }\n      const valueDateString = value ? value.toDateString() : null\n      if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {\n        if (this.minDate.getHours() > convertedHour) {\n          return false\n        }\n        if (this.minDate.getHours() === convertedHour) {\n          if (this.minDate.getMinutes() > minute) {\n            return false\n          }\n          if (this.minDate.getMinutes() === minute) {\n            if (this.minDate.getSeconds() > second) {\n              return false\n            }\n          }\n        }\n      }\n\n      if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {\n        if (this.maxDate.getHours() < convertedHour) {\n          return false\n        }\n        if (this.maxDate.getHours() === convertedHour) {\n          if (this.maxDate.getMinutes() < minute) {\n            return false\n          }\n          if (this.maxDate.getMinutes() === minute) {\n            if (this.maxDate.getSeconds() < second) {\n              return false\n            }\n          }\n        }\n      }\n      return true\n    },\n    incrementHour(event) {\n      let prevHour = this.currentHour\n      let newHour = this.currentHour + this.stepHour\n      let newPM = this.pm\n\n      if (this.hourFormat == '24')\n        newHour = (newHour >= 24) ? (newHour - 24) : newHour\n      else if (this.hourFormat == '12') {\n        // Before the AM/PM break, now after\n        if (prevHour < 12 && newHour > 11) {\n          newPM = !this.pm\n        }\n        newHour = (newHour >= 13) ? (newHour - 12) : newHour\n      }\n\n      if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {\n        this.currentHour = newHour\n        this.pm = newPM\n      }\n\n      event.preventDefault()\n    },\n    decrementHour(event) {\n      let newHour = this.currentHour - this.stepHour\n      let newPM = this.pm\n\n      if (this.hourFormat == '24')\n        newHour = (newHour < 0) ? (24 + newHour) : newHour\n      else if (this.hourFormat == '12') {\n        // If we were at noon/midnight, then switch\n        if (this.currentHour === 12) {\n          newPM = !this.pm\n        }\n        newHour = (newHour <= 0) ? (12 + newHour) : newHour\n      }\n\n      if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {\n        this.currentHour = newHour\n        this.pm = newPM\n      }\n\n      event.preventDefault()\n    },\n    incrementMinute(event) {\n      let newMinute = this.currentMinute + this.stepMinute\n      if (this.validateTime(this.currentHour, newMinute, this.currentSecond, true)) {\n        this.currentMinute = (newMinute > 59) ? newMinute - 60 : newMinute\n      }\n\n      event.preventDefault()\n    },\n    decrementMinute(event) {\n      let newMinute = this.currentMinute - this.stepMinute\n      newMinute = (newMinute < 0) ? 60 + newMinute : newMinute\n      if (this.validateTime(this.currentHour, newMinute, this.currentSecond, true)) {\n        this.currentMinute = newMinute\n      }\n\n      event.preventDefault()\n    },\n    incrementSecond(event) {\n      let newSecond = this.currentSecond + this.stepSecond\n      if (this.validateTime(this.currentHour, this.currentMinute, newSecond, true)) {\n        this.currentSecond = (newSecond > 59) ? newSecond - 60 : newSecond\n      }\n\n      event.preventDefault()\n    },\n    decrementSecond(event) {\n      let newSecond = this.currentSecond - this.stepSecond\n      newSecond = (newSecond < 0) ? 60 + newSecond : newSecond\n      if (this.validateTime(this.currentHour, this.currentMinute, newSecond, true)) {\n        this.currentSecond = newSecond\n      }\n\n      event.preventDefault()\n    },\n    updateModelTime() {\n      this.timePickerChange = true\n      let value = this.isComparable() ? this.value : new Date()\n\n      if (this.isRangeSelection()) {\n        value = this.value[1] || this.value[0]\n      }\n      if (this.isMultipleSelection()) {\n        value = this.value[this.value.length - 1]\n      }\n      value = value ? new Date(value.getTime()) : new Date()\n\n      if (this.hourFormat == '12') {\n        if (this.currentHour === 12)\n          value.setHours(this.pm ? 12 : 0)\n        else\n          value.setHours(this.pm ? this.currentHour + 12 : this.currentHour)\n      }\n      else {\n        value.setHours(this.currentHour)\n      }\n\n      value.setMinutes(this.currentMinute)\n      value.setSeconds(this.currentSecond)\n\n      if (this.isRangeSelection()) {\n        if (this.value[1])\n          value = [this.value[0], value]\n        else\n          value = [value, null]\n      }\n\n      if (this.isMultipleSelection()) {\n        value = [...this.value.slice(0, -1), value]\n      }\n\n      this.updateModel(value)\n      this.$emit('date-select', value)\n      setTimeout(() => this.timePickerChange = false, 0)\n    },\n    toggleAMPM(event) {\n      this.pm = !this.pm\n      this.updateModelTime()\n      event.preventDefault()\n    },\n    clearTimePickerTimer() {\n      if (this.timePickerTimer) {\n        clearInterval(this.timePickerTimer)\n      }\n    },\n    onMonthSelect(event, month) {\n      if (this.view === 'month') {\n        this.onDateSelect(event, { year: this.currentYear, month: month, day: 1, selectable: true })\n      }\n      else {\n        this.currentMonth = month\n        this.currentView = 'date'\n        this.$emit('month-change', { month: this.currentMonth + 1, year: this.currentYear })\n      }\n\n      setTimeout(this.updateFocus, 0)\n    },\n    onYearSelect(event, year) {\n      if (this.view === 'year') {\n        this.onDateSelect(event, { year: year, month: 0, day: 1, selectable: true })\n      }\n      else {\n        this.currentYear = year\n        this.currentView = 'month'\n        this.$emit('year-change', { month: this.currentMonth + 1, year: this.currentYear })\n      }\n\n      setTimeout(this.updateFocus, 0)\n    },\n    enableModality() {\n      if (!this.mask) {\n        this.mask = document.createElement('div')\n        this.mask.style.zIndex = String(parseInt(this.$refs.overlay.style.zIndex, 10) - 1)\n        DomHandler.addMultipleClasses(this.mask, 'p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay p-component-overlay-enter')\n\n        this.maskClickListener = () => {\n          this.overlayVisible = false\n        }\n        this.mask.addEventListener('click', this.maskClickListener)\n\n        document.body.appendChild(this.mask)\n        DomHandler.addClass(document.body, 'p-overflow-hidden')\n      }\n    },\n    disableModality() {\n      if (this.mask) {\n        this.overlayVisible = false\n\n        DomHandler.addClass(this.mask, 'p-component-overlay-leave')\n        this.mask.addEventListener('animationend', () => {\n          this.destroyMask()\n        })\n      }\n    },\n    destroyMask() {\n      this.mask.removeEventListener('click', this.maskClickListener)\n      this.maskClickListener = null\n      document.body.removeChild(this.mask)\n      this.mask = null\n\n      let bodyChildren = document.body.children\n      let hasBlockerMasks\n      for (let i = 0; i < bodyChildren.length; i++) {\n        let bodyChild = bodyChildren[i]\n        if (DomHandler.hasClass(bodyChild, 'p-datepicker-mask-scrollblocker')) {\n          hasBlockerMasks = true\n          break\n        }\n      }\n\n      if (!hasBlockerMasks) {\n        DomHandler.removeClass(document.body, 'p-overflow-hidden')\n      }\n    },\n    updateCurrentMetaData() {\n      const viewDate = this.viewDate\n      this.currentMonth = viewDate.getMonth()\n      this.currentYear = viewDate.getFullYear()\n\n      if (this.showTime || this.timeOnly) {\n        this.updateCurrentTimeMeta(viewDate)\n      }\n    },\n    isValidSelection(value) {\n      let isValid = true\n      if (this.isSingleSelection()) {\n        if (!this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false)) {\n          isValid = false\n        }\n      } else if (value.every(v => this.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false))) {\n        if (this.isRangeSelection()) {\n          isValid = value.length > 1 && value[1] > value[0] ? true : false\n        }\n      }\n      return isValid\n    },\n    parseValue(text) {\n      if (!text || text.trim().length === 0) {\n        return null\n      }\n\n      let value\n\n      if (this.isSingleSelection()) {\n        value = this.parseDateTime(text)\n      }\n      else if (this.isMultipleSelection()) {\n        let tokens = text.split(',')\n        value = []\n        for (let token of tokens) {\n          value.push(this.parseDateTime(token.trim()))\n        }\n      }\n      else if (this.isRangeSelection()) {\n        let tokens = text.split(' - ')\n        value = []\n        for (let i = 0; i < tokens.length; i++) {\n          value[i] = this.parseDateTime(tokens[i].trim())\n        }\n      }\n\n      return value\n    },\n    parseDateTime(text) {\n      let date\n      let parts = text.split(' ')\n\n      if (this.timeOnly) {\n        date = new Date()\n        this.populateTime(date, parts[0], parts[1])\n      }\n      else {\n        const dateFormat = this.datePattern\n        if (this.showTime) {\n          date = this.parseDate(parts[0], dateFormat)\n          this.populateTime(date, parts[1], parts[2])\n        }\n        else {\n          date = this.parseDate(text, dateFormat)\n        }\n      }\n\n      return date\n    },\n    populateTime(value, timeString, ampm) {\n      if (this.hourFormat == '12' && !ampm) {\n        throw 'Invalid Time'\n      }\n\n      this.pm = (ampm === 'PM' || ampm === 'pm')\n      let time = this.parseTime(timeString)\n      value.setHours(time.hour)\n      value.setMinutes(time.minute)\n      value.setSeconds(time.second)\n    },\n    parseTime(value) {\n      let tokens = value.split(':')\n      let validTokenLength = this.showSeconds ? 3 : 2\n      let regex = (/^[0-9][0-9]$/)\n\n      if (tokens.length !== validTokenLength || !tokens[0].match(regex) || !tokens[1].match(regex) || (this.showSeconds && !tokens[2].match(regex))) {\n        throw 'Invalid time'\n      }\n\n      let h = parseInt(tokens[0])\n      let m = parseInt(tokens[1])\n      let s = this.showSeconds ? parseInt(tokens[2]) : null\n\n      if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || (this.hourFormat == '12' && h > 12) || (this.showSeconds && (isNaN(s) || s > 59))) {\n        throw 'Invalid time'\n      }\n      else {\n        if (this.hourFormat == '12' && h !== 12 && this.pm) {\n          h += 12\n        }\n\n        return { hour: h, minute: m, second: s }\n      }\n    },\n    parseDate(value, format) {\n      if (format == null || value == null) {\n        throw 'Invalid arguments'\n      }\n\n      value = (typeof value === 'object' ? value.toString() : value + '')\n      if (value === '') {\n        return null\n      }\n\n      let iFormat, dim, extra,\n        iValue = 0,\n        shortYearCutoff = (typeof this.shortYearCutoff !== 'string' ? this.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.shortYearCutoff, 10)),\n        year = -1,\n        month = -1,\n        day = -1,\n        doy = -1,\n        literal = false,\n        date,\n        lookAhead = (match) => {\n          let matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match)\n          if (matches) {\n            iFormat++\n          }\n          return matches\n        },\n        getNumber = (match) => {\n          let isDoubled = lookAhead(match),\n            size = (match === '@' ? 14 : (match === '!' ? 20 :\n              (match === 'y' && isDoubled ? 4 : (match === 'o' ? 3 : 2)))),\n            minSize = (match === 'y' ? size : 1),\n            digits = new RegExp('^\\\\d{' + minSize + ',' + size + '}'),\n            num = value.substring(iValue).match(digits)\n          if (!num) {\n            throw 'Missing number at position ' + iValue\n          }\n          iValue += num[0].length\n          return parseInt(num[0], 10)\n        },\n        getName = (match, shortNames, longNames) => {\n          let index = -1\n          let arr = lookAhead(match) ? longNames : shortNames\n          let names = []\n\n          for (let i = 0; i < arr.length; i++) {\n            names.push([i, arr[i]])\n          }\n          names.sort((a, b) => {\n            return -(a[1].length - b[1].length)\n          })\n\n          for (let i = 0; i < names.length; i++) {\n            let name = names[i][1]\n            if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {\n              index = names[i][0]\n              iValue += name.length\n              break\n            }\n          }\n\n          if (index !== -1) {\n            return index + 1\n          } else {\n            throw 'Unknown name at position ' + iValue\n          }\n        },\n        checkLiteral = () => {\n          if (value.charAt(iValue) !== format.charAt(iFormat)) {\n            throw 'Unexpected literal at position ' + iValue\n          }\n          iValue++\n        }\n\n      if (this.currentView === 'month') {\n        day = 1\n      }\n\n      for (iFormat = 0; iFormat < format.length; iFormat++) {\n        if (literal) {\n          if (format.charAt(iFormat) === '\\'' && !lookAhead('\\'')) {\n            literal = false\n          } else {\n            checkLiteral()\n          }\n        } else {\n          switch (format.charAt(iFormat)) {\n          case 'd':\n            day = getNumber('d')\n            break\n          case 'D':\n            getName('D', this.$primevue.config.locale.dayNamesShort, this.$primevue.config.locale.dayNames)\n            break\n          case 'o':\n            doy = getNumber('o')\n            break\n          case 'm':\n            month = getNumber('m')\n            break\n          case 'M':\n            month = getName('M', this.$primevue.config.locale.monthNamesShort, this.$primevue.config.locale.monthNames)\n            break\n          case 'y':\n            year = getNumber('y')\n            break\n          case '@':\n            date = new Date(getNumber('@'))\n            year = date.getFullYear()\n            month = date.getMonth() + 1\n            day = date.getDate()\n            break\n          case '!':\n            date = new Date((getNumber('!') - this.ticksTo1970) / 10000)\n            year = date.getFullYear()\n            month = date.getMonth() + 1\n            day = date.getDate()\n            break\n          case '\\'':\n            if (lookAhead('\\'')) {\n              checkLiteral()\n            } else {\n              literal = true\n            }\n            break\n          default:\n            checkLiteral()\n          }\n        }\n      }\n\n      if (iValue < value.length) {\n        extra = value.substr(iValue)\n        if (!/^\\s+/.test(extra)) {\n          throw 'Extra/unparsed characters found in date: ' + extra\n        }\n      }\n\n      if (year === -1) {\n        year = new Date().getFullYear()\n      } else if (year < 100) {\n        year += new Date().getFullYear() - new Date().getFullYear() % 100 +\n          (year <= shortYearCutoff ? 0 : -100)\n      }\n\n      if (doy > -1) {\n        month = 1\n        day = doy\n        do {\n          dim = this.getDaysCountInMonth(year, month - 1)\n          if (day <= dim) {\n            break\n          }\n          month++\n          day -= dim\n          // eslint-disable-next-line\n        } while (true);\n      }\n\n      date = this.daylightSavingAdjust(new Date(year, month - 1, day))\n      if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {\n        throw 'Invalid date' // E.g. 31/02/00\n      }\n\n      return date\n    },\n    getWeekNumber(date) {\n      let checkDate = new Date(date.getTime())\n      checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7))\n      let time = checkDate.getTime()\n      checkDate.setMonth(0)\n      checkDate.setDate(1)\n      return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1\n    },\n    onDateCellKeydown(event, date, groupIndex) {\n      const cellContent = event.currentTarget\n      const cell = cellContent.parentElement\n\n      switch (event.which) {\n      //down arrow\n      case 40: {\n        cellContent.tabIndex = '-1'\n        let cellIndex = DomHandler.index(cell)\n        let nextRow = cell.parentElement.nextElementSibling\n        if (nextRow) {\n          let focusCell = nextRow.children[cellIndex].children[0]\n          if (DomHandler.hasClass(focusCell, 'p-disabled')) {\n            this.navigationState = { backward: false }\n            this.navForward(event)\n          }\n          else {\n            nextRow.children[cellIndex].children[0].tabIndex = '0'\n            nextRow.children[cellIndex].children[0].focus()\n          }\n        }\n        else {\n          this.navigationState = { backward: false }\n          this.navForward(event)\n        }\n        event.preventDefault()\n        break\n      }\n\n      //up arrow\n      case 38: {\n        cellContent.tabIndex = '-1'\n        let cellIndex = DomHandler.index(cell)\n        let prevRow = cell.parentElement.previousElementSibling\n        if (prevRow) {\n          let focusCell = prevRow.children[cellIndex].children[0]\n          if (DomHandler.hasClass(focusCell, 'p-disabled')) {\n            this.navigationState = { backward: true }\n            this.navBackward(event)\n          }\n          else {\n            focusCell.tabIndex = '0'\n            focusCell.focus()\n          }\n        }\n        else {\n          this.navigationState = { backward: true }\n          this.navBackward(event)\n        }\n        event.preventDefault()\n        break\n      }\n\n      //left arrow\n      case 37: {\n        cellContent.tabIndex = '-1'\n        let prevCell = cell.previousElementSibling\n        if (prevCell) {\n          let focusCell = prevCell.children[0]\n          if (DomHandler.hasClass(focusCell, 'p-disabled')) {\n            this.navigateToMonth(true, groupIndex)\n          }\n          else {\n            focusCell.tabIndex = '0'\n            focusCell.focus()\n          }\n        }\n        else {\n          this.navigateToMonth(true, groupIndex)\n        }\n        event.preventDefault()\n        break\n      }\n\n      //right arrow\n      case 39: {\n        cellContent.tabIndex = '-1'\n        let nextCell = cell.nextElementSibling\n        if (nextCell) {\n          let focusCell = nextCell.children[0]\n          if (DomHandler.hasClass(focusCell, 'p-disabled')) {\n            this.navigateToMonth(false, groupIndex)\n          }\n          else {\n            focusCell.tabIndex = '0'\n            focusCell.focus()\n          }\n        }\n        else {\n          this.navigateToMonth(false, groupIndex)\n        }\n        event.preventDefault()\n        break\n      }\n\n      //enter\n      case 13:\n      case 32: {\n        this.onDateSelect(event, date)\n        event.preventDefault()\n        break\n      }\n\n      //escape\n      case 27: {\n        this.overlayVisible = false\n        event.preventDefault()\n        break\n      }\n\n      //tab\n      case 9: {\n        if (!this.inline) {\n          this.trapFocus(event)\n        }\n        break\n      }\n\n      default:\n        //no op\n        break\n      }\n    },\n    navigateToMonth(prev, groupIndex) {\n      if (prev) {\n        if (this.numberOfMonths === 1 || (groupIndex === 0)) {\n          this.navigationState = { backward: true }\n          this.navBackward(event)\n        }\n        else {\n          let prevMonthContainer = this.$refs.overlay.children[groupIndex - 1]\n          let cells = DomHandler.find(prevMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)')\n          let focusCell = cells[cells.length - 1]\n          focusCell.tabIndex = '0'\n          focusCell.focus()\n        }\n      }\n      else {\n        if (this.numberOfMonths === 1 || (groupIndex === this.numberOfMonths - 1)) {\n          this.navigationState = { backward: false }\n          this.navForward(event)\n        }\n        else {\n          let nextMonthContainer = this.$refs.overlay.children[groupIndex + 1]\n          let focusCell = DomHandler.findSingle(nextMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)')\n          focusCell.tabIndex = '0'\n          focusCell.focus()\n        }\n      }\n    },\n    onMonthCellKeydown(event, index) {\n      const cell = event.currentTarget\n\n      switch (event.which) {\n      //arrows\n      case 38:\n      case 40: {\n        cell.tabIndex = '-1'\n        var cells = cell.parentElement.children\n        var cellIndex = DomHandler.index(cell)\n        let nextCell = cells[event.which === 40 ? cellIndex + 3 : cellIndex - 3]\n        if (nextCell) {\n          nextCell.tabIndex = '0'\n          nextCell.focus()\n        }\n        event.preventDefault()\n        break\n      }\n\n      //left arrow\n      case 37: {\n        cell.tabIndex = '-1'\n        let prevCell = cell.previousElementSibling\n        if (prevCell) {\n          prevCell.tabIndex = '0'\n          prevCell.focus()\n        }\n        else {\n          this.navigationState = { backward: true }\n          this.navBackward(event)\n        }\n        event.preventDefault()\n        break\n      }\n\n      //right arrow\n      case 39: {\n        cell.tabIndex = '-1'\n        let nextCell = cell.nextElementSibling\n        if (nextCell) {\n          nextCell.tabIndex = '0'\n          nextCell.focus()\n        }\n        else {\n          this.navigationState = { backward: false }\n          this.navForward(event)\n        }\n        event.preventDefault()\n        break\n      }\n\n      //enter\n      case 13:\n      case 32: {\n        this.onMonthSelect(event, index)\n        event.preventDefault()\n        break\n      }\n\n      //escape\n      case 27: {\n        this.overlayVisible = false\n        event.preventDefault()\n        break\n      }\n\n      //tab\n      case 9: {\n        if (!this.inline) {\n          this.trapFocus(event)\n        }\n        break\n      }\n\n      default:\n        //no op\n        break\n      }\n    },\n    onYearCellKeydown(event, index) {\n      const cell = event.currentTarget\n      switch (event.which) {\n      //arrows\n      case 38:\n      case 40: {\n        cell.tabIndex = '-1'\n        var cells = cell.parentElement.children\n        var cellIndex = DomHandler.index(cell)\n        let nextCell = cells[event.which === 40 ? cellIndex + 2 : cellIndex - 2]\n        if (nextCell) {\n          nextCell.tabIndex = '0'\n          nextCell.focus()\n        }\n        event.preventDefault()\n        break\n      }\n      //left arrow\n      case 37: {\n        cell.tabIndex = '-1'\n        let prevCell = cell.previousElementSibling\n        if (prevCell) {\n          prevCell.tabIndex = '0'\n          prevCell.focus()\n        }\n        else {\n          this.navigationState = { backward: true }\n          this.navBackward(event)\n        }\n        event.preventDefault()\n        break\n      }\n      //right arrow\n      case 39: {\n        cell.tabIndex = '-1'\n        let nextCell = cell.nextElementSibling\n        if (nextCell) {\n          nextCell.tabIndex = '0'\n          nextCell.focus()\n        }\n        else {\n          this.navigationState = { backward: false }\n          this.navForward(event)\n        }\n        event.preventDefault()\n        break\n      }\n      //enter\n      case 13:\n      case 32: {\n        this.onMonthSelect(event, index)\n        event.preventDefault()\n        break\n      }\n      //escape\n      case 27: {\n        this.overlayVisible = false\n        event.preventDefault()\n        break\n      }\n      //tab\n      case 9: {\n        this.trapFocus(event)\n        break\n      }\n      default:\n        //no op\n        break\n      }\n    },\n    updateFocus() {\n      let cell\n      if (this.navigationState) {\n        if (this.navigationState.button) {\n          this.initFocusableCell()\n          if (this.navigationState.backward)\n            DomHandler.findSingle(this.$refs.overlay, '.p-datepicker-prev').focus()\n          else\n            DomHandler.findSingle(this.$refs.overlay, '.p-datepicker-next').focus()\n        }\n        else {\n          if (this.navigationState.backward) {\n            let cells\n            if (this.currentView === 'month') {\n              cells = DomHandler.find(this.$refs.overlay, '.p-monthpicker .p-monthpicker-month:not(.p-disabled)')\n            }\n            else if (this.currentView === 'year') {\n              cells = DomHandler.find(this.$refs.overlay, '.p-yearpicker .p-yearpicker-year:not(.p-disabled)')\n            }\n            else {\n              cells = DomHandler.find(this.$refs.overlay, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)')\n            }\n            if (cells && cells.length > 0) {\n              cell = cells[cells.length - 1]\n            }\n          }\n          else {\n            if (this.currentView === 'month') {\n              cell = DomHandler.findSingle(this.$refs.overlay, '.p-monthpicker .p-monthpicker-month:not(.p-disabled)')\n            }\n            else if (this.currentView === 'year') {\n              cell = DomHandler.findSingle(this.$refs.overlay, '.p-yearpicker .p-yearpicker-year:not(.p-disabled)')\n            }\n            else {\n              cell = DomHandler.findSingle(this.$refs.overlay, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)')\n            }\n          }\n          if (cell) {\n            cell.tabIndex = '0'\n            cell.focus()\n          }\n        }\n\n        this.navigationState = null\n      }\n      else {\n        this.initFocusableCell()\n      }\n    },\n    initFocusableCell() {\n      let cell\n      if (this.currentView === 'month') {\n        let cells = DomHandler.find(this.$refs.overlay, '.p-monthpicker .p-monthpicker-month')\n        let selectedCell = DomHandler.findSingle(this.$refs.overlay, '.p-monthpicker .p-monthpicker-month.p-highlight')\n        cells.forEach(cell => cell.tabIndex = -1)\n        cell = selectedCell || cells[0]\n      }\n      else if (this.currentView === 'year') {\n        let cells = DomHandler.find(this.$refs.overlay, '.p-yearpicker .p-yearpicker-year')\n        let selectedCell = DomHandler.findSingle(this.$refs.overlay, '.p-yearpicker .p-yearpicker-year.p-highlight')\n        cells.forEach(cell => cell.tabIndex = -1)\n        cell = selectedCell || cells[0]\n      }\n      else {\n        if (this.$refs.overlay) {\n          cell = DomHandler.findSingle(this.$refs.overlay, 'span.p-highlight')\n          if (!cell) {\n            let todayCell = DomHandler.findSingle(this.$refs.overlay, 'td.p-datepicker-today span:not(.p-disabled):not(.p-ink)')\n            if (todayCell)\n              cell = todayCell\n            else\n              cell = DomHandler.findSingle(this.$refs.overlay, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink')\n          }\n        }\n      }\n\n      if (cell) {\n        cell.tabIndex = '0'\n\n        if (!this.preventFocus && (!this.navigationState || !this.navigationState.button) && !this.timePickerChange) {\n          cell.focus()\n        }\n\n        this.preventFocus = false\n      }\n    },\n    trapFocus(event) {\n      event.preventDefault()\n      let focusableElements = DomHandler.getFocusableElements(this.$refs.overlay)\n\n      if (focusableElements && focusableElements.length > 0) {\n        if (!document.activeElement) {\n          focusableElements[0].focus()\n        }\n        else {\n          let focusedIndex = focusableElements.indexOf(document.activeElement)\n\n          if (event.shiftKey) {\n            if (focusedIndex == -1 || focusedIndex === 0)\n              focusableElements[focusableElements.length - 1].focus()\n            else\n              focusableElements[focusedIndex - 1].focus()\n          }\n          else {\n            if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))\n              focusableElements[0].focus()\n            else\n              focusableElements[focusedIndex + 1].focus()\n          }\n        }\n      }\n    },\n    onContainerButtonKeydown(event) {\n      switch (event.which) {\n      //tab\n      case 9:\n        if (!this.inline) {\n          this.trapFocus(event)\n        }\n        break\n\n        //escape\n      case 27:\n        this.overlayVisible = false\n        event.preventDefault()\n        break\n\n      default:\n        //Noop\n        break\n      }\n    },\n    onInput(val) {\n      // IE 11 Workaround for input placeholder : https://github.com/primefaces/primeng/issues/2026\n      if (!this.isKeydown) {\n        return\n      }\n      this.isKeydown = false\n\n      try {\n        this.selectionStart = this.$refs.input.$el.selectionStart\n        this.selectionEnd = this.$refs.input.$el.selectionEnd\n\n        let value = this.parseValue(val)\n        if (this.isValidSelection(value)) {\n          this.updateModel(value)\n        }\n      }\n      catch (err) {\n        this.updateModel(val)\n      }\n    },\n    appendContainer() {\n      if (this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.appendChild(this.$refs.overlay)\n        else\n          document.getElementById(this.appendTo).appendChild(this.$refs.overlay)\n      }\n    },\n    restoreAppend() {\n      if (this.$refs.overlay && this.appendTo) {\n        if (this.appendTo === 'body')\n          document.body.removeChild(this.$refs.overlay)\n        else\n          document.getElementById(this.appendTo).removeChild(this.$refs.overlay)\n      }\n    },\n    getMonthName(index) {\n      return this.$primevue.config.locale.monthNames[index]\n    },\n    getYear(month) {\n      return (this.currentView === 'month' ? this.currentYear : month.year) + this.yearName\n    },\n    createResponsiveStyle() {\n      if (this.numberOfMonths > 1 && this.responsiveOptions) {\n        if (!this.responsiveStyleElement) {\n          this.responsiveStyleElement = document.createElement('style')\n          this.responsiveStyleElement.type = 'text/css'\n          document.body.appendChild(this.responsiveStyleElement)\n        }\n        let innerHTML = ''\n        if (this.responsiveOptions) {\n          let responsiveOptions = [...this.responsiveOptions]\n            .filter(o => !!(o.breakpoint && o.numMonths))\n            .sort((o1, o2) => -1 * o1.breakpoint.localeCompare(o2.breakpoint, undefined, { numeric: true }))\n          for (let i = 0; i < responsiveOptions.length; i++) {\n            let { breakpoint, numMonths } = responsiveOptions[i]\n            let styles = `\n                            .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${numMonths}) .p-datepicker-next {\n                                display: inline-flex !important;\n                            }\n                        `\n            for (let j = numMonths; j < this.numberOfMonths; j++) {\n              styles += `\n                                .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${j + 1}) {\n                                    display: none !important;\n                                }\n                            `\n            }\n            innerHTML += `\n                            @media screen and (max-width: ${breakpoint}) {\n                                ${styles}\n                            }\n                        `\n          }\n        }\n        this.responsiveStyleElement.innerHTML = innerHTML\n      }\n    },\n    destroyResponsiveStyleElement() {\n      if (this.responsiveStyleElement) {\n        this.responsiveStyleElement.remove()\n        this.responsiveStyleElement = null\n      }\n    }\n  },\n  computed: {\n    listeners() {\n      let $vm = this\n\n      return {\n        ...$vm.$listeners,\n        input: val => {\n          this.onInput(val)\n        },\n        focus: event => {\n          $vm.focus = true\n          if ($vm.showOnFocus && $vm.isEnabled()) {\n            $vm.overlayVisible = true\n          }\n          $vm.focused = true\n          $vm.$emit('focus', event)\n        },\n        blur: event => {\n          $vm.focused = false\n          $vm.$emit('blur', event)\n        },\n        keydown: event => {\n          $vm.isKeydown = true\n\n          if (event.keyCode === 40 && $vm.$refs.overlay) {\n            $vm.trapFocus(event)\n          }\n          else if (event.keyCode === 27) {\n            if ($vm.overlayVisible) {\n              $vm.overlayVisible = false\n              event.preventDefault()\n            }\n          }\n          else if (event.keyCode === 9) {\n            if ($vm.showOnFocus) {\n              DomHandler.getFocusableElements($vm.$refs.overlay).forEach(el => el.tabIndex = '-1')\n            }\n            if ($vm.overlayVisible) {\n              $vm.overlayVisible = false\n            }\n          }\n\n          $vm.$emit('keydown', event)\n        }\n      }\n    },\n    viewDate() {\n      let propValue = this.value\n      if (typeof propValue === 'string') {\n        return new Date()\n      }\n\n      if (propValue && Array.isArray(propValue)) {\n        if (this.isRangeSelection()) {\n          propValue = propValue[1] || propValue[0]\n        } else if (this.isMultipleSelection()) {\n          propValue = propValue[propValue.length - 1]\n        }\n      }\n\n      return propValue || new Date()\n    },\n    inputFieldValue() {\n      return this.formatValue(this.value)\n    },\n    containerClass() {\n      return [\n        'p-calendar p-component p-inputwrapper', this.className,\n        {\n          'p-calendar-w-btn': this.showIcon,\n          'p-calendar-timeonly': this.timeOnly,\n          'p-inputwrapper-filled': this.value,\n          'p-inputwrapper-focus': this.focused\n        }\n      ]\n    },\n    panelStyleClass() {\n      return [\n        'p-datepicker p-component', this.panelClass,\n        {\n          'p-datepicker-inline': this.inline,\n          'p-disabled': this.$attrs.disabled,\n          'p-datepicker-timeonly': this.timeOnly,\n          'p-datepicker-multiple-month': this.numberOfMonths > 1,\n          'p-datepicker-monthpicker': (this.currentView === 'month'),\n          'p-datepicker-yearpicker': (this.currentView === 'year'),\n          'p-datepicker-touch-ui': this.touchUI\n        }\n      ]\n    },\n    months() {\n      let months = []\n      for (let i = 0; i < this.numberOfMonths; i++) {\n        let month = this.currentMonth + i\n        let year = this.currentYear\n        if (month > 11) {\n          month = month % 11 - 1\n          year = year + 1\n        }\n\n        let dates = []\n        let firstDay = this.getFirstDayOfMonthIndex(month, year)\n        let daysLength = this.getDaysCountInMonth(month, year)\n        let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year)\n        let dayNo = 1\n        let today = new Date()\n        let weekNumbers = []\n        let monthRows = Math.ceil((daysLength + firstDay) / 7)\n\n        for (let i = 0; i < monthRows; i++) {\n          let week = []\n\n          if (i == 0) {\n            for (let j = (prevMonthDaysLength - firstDay + 1); j <= prevMonthDaysLength; j++) {\n              let prev = this.getPreviousMonthAndYear(month, year)\n              week.push({\n                day: j, month: prev.month, year: prev.year, otherMonth: true,\n                today: this.isToday(today, j, prev.month, prev.year), selectable: this.isSelectable(j, prev.month, prev.year, true)\n              })\n            }\n\n            let remainingDaysLength = 7 - week.length\n            for (let j = 0; j < remainingDaysLength; j++) {\n              week.push({\n                day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),\n                selectable: this.isSelectable(dayNo, month, year, false)\n              })\n              dayNo++\n            }\n          }\n          else {\n            for (let j = 0; j < 7; j++) {\n              if (dayNo > daysLength) {\n                let next = this.getNextMonthAndYear(month, year)\n                week.push({\n                  day: dayNo - daysLength, month: next.month, year: next.year, otherMonth: true,\n                  today: this.isToday(today, dayNo - daysLength, next.month, next.year),\n                  selectable: this.isSelectable((dayNo - daysLength), next.month, next.year, true)\n                })\n              }\n              else {\n                week.push({\n                  day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),\n                  selectable: this.isSelectable(dayNo, month, year, false)\n                })\n              }\n\n              dayNo++\n            }\n          }\n\n          if (this.showWeek) {\n            weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)))\n          }\n\n          dates.push(week)\n        }\n\n        months.push({\n          month: month,\n          year: year,\n          dates: dates,\n          weekNumbers: weekNumbers\n        })\n      }\n\n      return months\n    },\n    weekDays() {\n      let weekDays = []\n      let dayIndex = this.$primevue.config.locale.firstDayOfWeek\n      for (let i = 0; i < 7; i++) {\n        weekDays.push(this.$primevue.config.locale.dayNamesMin[dayIndex])\n        dayIndex = (dayIndex == 6) ? 0 : ++dayIndex\n      }\n\n      return weekDays\n    },\n    ticksTo1970() {\n      return (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000)\n    },\n    sundayIndex() {\n      return this.$primevue.config.locale.firstDayOfWeek > 0 ? 7 - this.$primevue.config.locale.firstDayOfWeek : 0\n    },\n    datePattern() {\n      return this.dateFormat || this.$primevue.config.locale.dateFormat\n    },\n    yearOptions() {\n      if (this.yearRange) {\n        let $vm = this\n        const years = this.yearRange.split(':')\n        let yearStart = parseInt(years[0])\n        let yearEnd = parseInt(years[1])\n        let yearOptions = []\n\n        if (this.currentYear < yearStart) {\n          $vm.currentYear = yearEnd\n        }\n        else if (this.currentYear > yearEnd) {\n          $vm.currentYear = yearStart\n        }\n\n        for (let i = yearStart; i <= yearEnd; i++) {\n          yearOptions.push(i)\n        }\n\n        return yearOptions\n      }\n      else {\n        return null\n      }\n    },\n    monthPickerValues() {\n      let monthPickerValues = []\n      for (let i = 0; i <= 11; i++) {\n        monthPickerValues.push(this.$primevue.config.locale.monthNamesShort[i])\n      }\n\n      return monthPickerValues\n    },\n    yearPickerValues() {\n      let yearPickerValues = []\n      let base = this.currentYear - (this.currentYear % 10)\n      for (let i = 0; i < 10; i++) {\n        yearPickerValues.push(base + i)\n      }\n      return yearPickerValues\n    },\n    formattedCurrentHour() {\n      return this.currentHour < 10 ? '0' + this.currentHour : this.currentHour\n    },\n    formattedCurrentMinute() {\n      return this.currentMinute < 10 ? '0' + this.currentMinute : this.currentMinute\n    },\n    formattedCurrentSecond() {\n      return this.currentSecond < 10 ? '0' + this.currentSecond : this.currentSecond\n    },\n    datePickerTitle() {\n      return this.$primevue.config.locale.datePickerTitle || ['date', 'year']\n    },\n    amLabel() {\n      return this.$primevue.config.locale.am || 'AM'\n    },\n    pmLabel() {\n      return this.$primevue.config.locale.pm || 'PM'\n    },\n    todayLabel() {\n      return this.$primevue.config.locale.today\n    },\n    clearLabel() {\n      return this.$primevue.config.locale.clear\n    },\n    weekHeaderLabel() {\n      return this.$primevue.config.locale.weekHeader\n    },\n    monthNames() {\n      return this.$primevue.config.locale.monthNames\n    },\n    yearName() {\n      return this.$primevue.config.locale.yearName\n    },\n    attributeSelector() {\n      return UniqueComponentId()\n    },\n    switchViewButtonDisabled() {\n      return this.numberOfMonths > 1 || this.$attrs.disabled\n    }\n  },\n  components: {\n    'CalendarInputText': InputText,\n    'CalendarButton': Button\n  },\n  directives: {\n    'ripple': Ripple\n  }\n}\n</script>\n\n<style>\n.p-calendar {\n  position: relative;\n  display: inline-flex;\n  max-width: 100%;\n}\n\n.p-calendar .p-inputtext {\n  flex: 1 1 auto;\n  width: 1%;\n}\n\n.p-calendar-w-btn .p-inputtext {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.p-calendar-w-btn .p-datepicker-trigger {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n/* Fluid */\n.p-fluid .p-calendar {\n  display: flex;\n}\n\n.p-fluid .p-calendar .p-inputtext {\n  width: 1%;\n}\n\n/* Datepicker */\n.p-calendar .p-datepicker {\n  min-width: 100%;\n}\n\n.p-datepicker {\nwidth: auto;\n  position: absolute;\n}\n\n.p-datepicker-inline {\n  display: inline-block;\n  position: static;\n  overflow-x: auto;\n}\n\n/* Header */\n.p-datepicker-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.p-datepicker-header .p-datepicker-title {\n  margin: 0 auto;\n}\n\n.p-datepicker-prev,\n.p-datepicker-next {\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Multiple Month DatePicker */\n.p-datepicker-multiple-month .p-datepicker-group-container {\n  display: flex;\n}\n\n.p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group {\n  flex: 1 1 auto;\n}\n\n/* DatePicker Table */\n.p-datepicker table {\nwidth: 100%;\nborder-collapse: collapse;\n}\n\n.p-datepicker td > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Month Picker */\n.p-monthpicker-month {\n  width: 33.3%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n}\n\n/* Year Picker */\n.p-yearpicker-year {\n  width: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n}\n\n/*  Button Bar */\n.p-datepicker-buttonbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/* Time Picker */\n.p-timepicker {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.p-timepicker button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n}\n\n.p-timepicker > div {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n/* Touch UI */\n.p-datepicker-touch-ui,\n.p-calendar .p-datepicker-touch-ui {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 80vw;\n  transform: translate(-50%, -50%);\n}\n</style>\n"]
    },
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

export { __vue_component__ as default };
