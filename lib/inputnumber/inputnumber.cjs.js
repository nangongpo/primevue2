'use strict';

var InputText = require('primevue2/inputtext');
var Button = require('primevue2/button');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var InputText__default = /*#__PURE__*/_interopDefaultLegacy(InputText);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var script = {
  name: 'InputNumber',
  inheritAttrs: false,
  props: {
    value: {
      type: Number,
      default: null
    },
    format: {
      type: Boolean,
      default: true
    },
    showButtons: {
      type: Boolean,
      default: false
    },
    buttonLayout: {
      type: String,
      default: 'stacked'
    },
    incrementButtonClass: {
      type: String,
      default: null
    },
    decrementButtonClass: {
      type: String,
      default: null
    },
    incrementButtonIcon: {
      type: String,
      default: 'pi pi-angle-up'
    },
    decrementButtonIcon: {
      type: String,
      default: 'pi pi-angle-down'
    },
    locale: {
      type: String,
      default: undefined
    },
    localeMatcher: {
      type: String,
      default: undefined
    },
    mode: {
      type: String,
      default: 'decimal'
    },
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    currency: {
      type: String,
      default: undefined
    },
    currencyDisplay: {
      type: String,
      default: undefined
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    minFractionDigits: {
      type: Number,
      default: undefined
    },
    maxFractionDigits: {
      type: Number,
      default: undefined
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    step: {
      type: Number,
      default: 1
    },
    allowEmpty: {
      type: Boolean,
      default: true
    },
    styles: null,
    className: null,
    inputStyle: null,
    inputClass: null
  },
  numberFormat: null,
  _numeral: null,
  _decimal: null,
  _group: null,
  _minusSign: null,
  _currency: null,
  _suffix: null,
  _prefix: null,
  _index: null,
  groupChar: '',
  isSpecialChar: null,
  prefixChar: null,
  suffixChar: null,
  timer: null,
  data: function data() {
    return {
      d_value: null,
      focused: false
    };
  },
  watch: {
    value: function value(newValue) {
      this.d_value = newValue;
    },
    locale: function locale(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    localeMatcher: function localeMatcher(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    mode: function mode(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    currency: function currency(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    currencyDisplay: function currencyDisplay(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    useGrouping: function useGrouping(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    minFractionDigits: function minFractionDigits(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    maxFractionDigits: function maxFractionDigits(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    suffix: function suffix(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    prefix: function prefix(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    }
  },
  created: function created() {
    this.constructParser();
  },
  methods: {
    getOptions: function getOptions() {
      return {
        localeMatcher: this.localeMatcher,
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        useGrouping: this.useGrouping,
        minimumFractionDigits: this.minFractionDigits,
        maximumFractionDigits: this.maxFractionDigits
      };
    },
    constructParser: function constructParser() {
      this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
      var numerals = _toConsumableArray(new Intl.NumberFormat(this.locale, {
        useGrouping: false
      }).format(9876543210)).reverse();
      var index = new Map(numerals.map(function (d, i) {
        return [d, i];
      }));
      this._numeral = new RegExp("[".concat(numerals.join(''), "]"), 'g');
      this._group = this.getGroupingExpression();
      this._minusSign = this.getMinusSignExpression();
      this._currency = this.getCurrencyExpression();
      this._decimal = this.getDecimalExpression();
      this._suffix = this.getSuffixExpression();
      this._prefix = this.getPrefixExpression();
      this._index = function (d) {
        return index.get(d);
      };
    },
    updateConstructParser: function updateConstructParser(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.constructParser();
      }
    },
    escapeRegExp: function escapeRegExp(text) {
      return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    },
    getDecimalExpression: function getDecimalExpression() {
      var formatter = new Intl.NumberFormat(this.locale, _objectSpread(_objectSpread({}, this.getOptions()), {}, {
        useGrouping: false
      }));
      return new RegExp("[".concat(formatter.format(1.1).replace(this._currency, '').trim().replace(this._numeral, ''), "]"), 'g');
    },
    getGroupingExpression: function getGroupingExpression() {
      var formatter = new Intl.NumberFormat(this.locale, {
        useGrouping: true
      });
      this.groupChar = formatter.format(1000000).trim().replace(this._numeral, '').charAt(0);
      return new RegExp("[".concat(this.groupChar, "]"), 'g');
    },
    getMinusSignExpression: function getMinusSignExpression() {
      var formatter = new Intl.NumberFormat(this.locale, {
        useGrouping: false
      });
      return new RegExp("[".concat(formatter.format(-1).trim().replace(this._numeral, ''), "]"), 'g');
    },
    getCurrencyExpression: function getCurrencyExpression() {
      if (this.currency) {
        var formatter = new Intl.NumberFormat(this.locale, {
          style: 'currency',
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        return new RegExp("[".concat(formatter.format(1).replace(/\s/g, '').replace(this._numeral, '').replace(this._group, ''), "]"), 'g');
      }
      return new RegExp('[]', 'g');
    },
    getPrefixExpression: function getPrefixExpression() {
      if (this.prefix) {
        this.prefixChar = this.prefix;
      } else {
        var formatter = new Intl.NumberFormat(this.locale, {
          style: this.mode,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay
        });
        this.prefixChar = formatter.format(1).split('1')[0];
      }
      return new RegExp("".concat(this.escapeRegExp(this.prefixChar || '')), 'g');
    },
    getSuffixExpression: function getSuffixExpression() {
      if (this.suffix) {
        this.suffixChar = this.suffix;
      } else {
        var formatter = new Intl.NumberFormat(this.locale, {
          style: this.mode,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        this.suffixChar = formatter.format(1).split('1')[1];
      }
      return new RegExp("".concat(this.escapeRegExp(this.suffixChar || '')), 'g');
    },
    formatValue: function formatValue(value) {
      if (value != null) {
        if (value === '-') {
          // Minus sign
          return value;
        }
        if (this.format) {
          var formatter = new Intl.NumberFormat(this.locale, this.getOptions());
          var formattedValue = formatter.format(value);
          if (this.prefix) {
            formattedValue = this.prefix + formattedValue;
          }
          if (this.suffix) {
            formattedValue = formattedValue + this.suffix;
          }
          return formattedValue;
        }
        return value.toString();
      }
      return '';
    },
    parseValue: function parseValue(text) {
      var filteredText = text.replace(this._suffix, '').replace(this._prefix, '').trim().replace(/\s/g, '').replace(this._currency, '').replace(this._group, '').replace(this._minusSign, '-').replace(this._decimal, '.').replace(this._numeral, this._index);
      if (filteredText) {
        if (filteredText === '-')
          // Minus sign
          return filteredText;
        var parsedValue = +filteredText;
        return isNaN(parsedValue) ? null : parsedValue;
      }
      return null;
    },
    repeat: function repeat(event, interval, dir) {
      var _this = this;
      var i = interval || 500;
      this.clearTimer();
      this.timer = setTimeout(function () {
        _this.repeat(event, 40, dir);
      }, i);
      this.spin(event, dir);
    },
    spin: function spin(event, dir) {
      if (this.$refs.input) {
        var step = this.step * dir;
        var currentValue = this.parseValue(this.$refs.input.$el.value) || 0;
        var newValue = this.validateValue(currentValue + step);
        this.updateInput(newValue, null, 'spin');
        this.updateModel(event, newValue);
        this.handleOnInput(event, currentValue, newValue);
      }
    },
    onUpButtonMouseDown: function onUpButtonMouseDown(event) {
      if (!this.$attrs.disabled) {
        this.$refs.input.$el.focus();
        this.repeat(event, null, 1);
        event.preventDefault();
      }
    },
    onUpButtonMouseUp: function onUpButtonMouseUp() {
      if (!this.$attrs.disabled) {
        this.clearTimer();
      }
    },
    onUpButtonMouseLeave: function onUpButtonMouseLeave() {
      if (!this.$attrs.disabled) {
        this.clearTimer();
      }
    },
    onUpButtonKeyUp: function onUpButtonKeyUp() {
      if (!this.$attrs.disabled) {
        this.clearTimer();
      }
    },
    onUpButtonKeyDown: function onUpButtonKeyDown(event) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        this.repeat(event, null, 1);
      }
    },
    onDownButtonMouseDown: function onDownButtonMouseDown(event) {
      if (!this.$attrs.disabled) {
        this.$refs.input.$el.focus();
        this.repeat(event, null, -1);
        event.preventDefault();
      }
    },
    onDownButtonMouseUp: function onDownButtonMouseUp() {
      if (!this.$attrs.disabled) {
        this.clearTimer();
      }
    },
    onDownButtonMouseLeave: function onDownButtonMouseLeave() {
      if (!this.$attrs.disabled) {
        this.clearTimer();
      }
    },
    onDownButtonKeyUp: function onDownButtonKeyUp() {
      if (!this.$attrs.disabled) {
        this.clearTimer();
      }
    },
    onDownButtonKeyDown: function onDownButtonKeyDown(event) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        this.repeat(event, null, -1);
      }
    },
    onUserInput: function onUserInput() {
      if (this.isSpecialChar) {
        this.$refs.input.$el.value = this.lastValue;
      }
      this.isSpecialChar = false;
    },
    onInputKeyDown: function onInputKeyDown(event) {
      this.lastValue = event.target.value;
      if (event.shiftKey || event.altKey) {
        this.isSpecialChar = true;
        return;
      }
      var selectionStart = event.target.selectionStart;
      var selectionEnd = event.target.selectionEnd;
      var inputValue = event.target.value;
      var newValueStr = null;
      if (event.altKey) {
        event.preventDefault();
      }
      switch (event.which) {
        //up
        case 38:
          this.spin(event, 1);
          event.preventDefault();
          break;

        //down
        case 40:
          this.spin(event, -1);
          event.preventDefault();
          break;

        //left
        case 37:
          if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {
            event.preventDefault();
          }
          break;

        //right
        case 39:
          if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {
            event.preventDefault();
          }
          break;

        //enter
        case 13:
          newValueStr = this.validateValue(this.parseValue(inputValue));
          this.$refs.input.$el.value = this.formatValue(newValueStr);
          this.$refs.input.$el.setAttribute('aria-valuenow', newValueStr);
          this.updateModel(event, newValueStr);
          break;

        //backspace
        case 8:
          {
            event.preventDefault();
            if (selectionStart === selectionEnd) {
              var deleteChar = inputValue.charAt(selectionStart - 1);
              var _this$getDecimalCharI = this.getDecimalCharIndexes(inputValue),
                decimalCharIndex = _this$getDecimalCharI.decimalCharIndex,
                decimalCharIndexWithoutPrefix = _this$getDecimalCharI.decimalCharIndexWithoutPrefix;
              if (this.isNumeralChar(deleteChar)) {
                var decimalLength = this.getDecimalLength(inputValue);
                if (this._group.test(deleteChar)) {
                  this._group.lastIndex = 0;
                  newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
                } else if (this._decimal.test(deleteChar)) {
                  this._decimal.lastIndex = 0;
                  if (decimalLength) {
                    this.$refs.input.$el.setSelectionRange(selectionStart - 1, selectionStart - 1);
                  } else {
                    newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                  }
                } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                  var insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0';
                  newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
                } else if (decimalCharIndexWithoutPrefix === 1) {
                  newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                  newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
                } else {
                  newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                }
              }
              this.updateValue(event, newValueStr, null, 'delete-single');
            } else {
              newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
              this.updateValue(event, newValueStr, null, 'delete-range');
            }
            break;
          }

        // del
        case 46:
          event.preventDefault();
          if (selectionStart === selectionEnd) {
            var _deleteChar = inputValue.charAt(selectionStart);
            var _this$getDecimalCharI2 = this.getDecimalCharIndexes(inputValue),
              _decimalCharIndex = _this$getDecimalCharI2.decimalCharIndex,
              _decimalCharIndexWithoutPrefix = _this$getDecimalCharI2.decimalCharIndexWithoutPrefix;
            if (this.isNumeralChar(_deleteChar)) {
              var _decimalLength = this.getDecimalLength(inputValue);
              if (this._group.test(_deleteChar)) {
                this._group.lastIndex = 0;
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
              } else if (this._decimal.test(_deleteChar)) {
                this._decimal.lastIndex = 0;
                if (_decimalLength) {
                  this.$refs.input.$el.setSelectionRange(selectionStart + 1, selectionStart + 1);
                } else {
                  newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                }
              } else if (_decimalCharIndex > 0 && selectionStart > _decimalCharIndex) {
                var _insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < _decimalLength ? '' : '0';
                newValueStr = inputValue.slice(0, selectionStart) + _insertedText + inputValue.slice(selectionStart + 1);
              } else if (_decimalCharIndexWithoutPrefix === 1) {
                newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
                newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            }
            this.updateValue(event, newValueStr, null, 'delete-back-single');
          } else {
            newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, null, 'delete-range');
          }
          break;
      }
    },
    onInputKeyUp: function onInputKeyUp(event) {
      this.$emit('keyup', event);
    },
    onInputKeyPress: function onInputKeyPress(event) {
      event.preventDefault();
      var code = event.which || event.keyCode;
      var char = String.fromCharCode(code);
      var isDecimalSign = this.isDecimalSign(char);
      var isMinusSign = this.isMinusSign(char);
      if (48 <= code && code <= 57 || isMinusSign || isDecimalSign) {
        this.insert(event, char, {
          isDecimalSign: isDecimalSign,
          isMinusSign: isMinusSign
        });
      }
    },
    onPaste: function onPaste(event) {
      event.preventDefault();
      var data = (event.clipboardData || window['clipboardData']).getData('Text');
      if (data) {
        var filteredData = this.parseValue(data);
        if (filteredData != null) {
          this.insert(event, filteredData.toString());
        }
      }
    },
    allowMinusSign: function allowMinusSign() {
      return this.min === null || this.min < 0;
    },
    isMinusSign: function isMinusSign(char) {
      if (this._minusSign.test(char) || char === '-') {
        this._minusSign.lastIndex = 0;
        return true;
      }
      return false;
    },
    isDecimalSign: function isDecimalSign(char) {
      if (this._decimal.test(char)) {
        this._decimal.lastIndex = 0;
        return true;
      }
      return false;
    },
    isDecimalMode: function isDecimalMode() {
      return this.mode === 'decimal';
    },
    getDecimalCharIndexes: function getDecimalCharIndexes(val) {
      var decimalCharIndex = val.search(this._decimal);
      this._decimal.lastIndex = 0;
      var filteredVal = val.replace(this._prefix, '').trim().replace(/\s/g, '').replace(this._currency, '');
      var decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
      this._decimal.lastIndex = 0;
      return {
        decimalCharIndex: decimalCharIndex,
        decimalCharIndexWithoutPrefix: decimalCharIndexWithoutPrefix
      };
    },
    getCharIndexes: function getCharIndexes(val) {
      var decimalCharIndex = val.search(this._decimal);
      this._decimal.lastIndex = 0;
      var minusCharIndex = val.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      var suffixCharIndex = val.search(this._suffix);
      this._suffix.lastIndex = 0;
      var currencyCharIndex = val.search(this._currency);
      this._currency.lastIndex = 0;
      return {
        decimalCharIndex: decimalCharIndex,
        minusCharIndex: minusCharIndex,
        suffixCharIndex: suffixCharIndex,
        currencyCharIndex: currencyCharIndex
      };
    },
    insert: function insert(event, text) {
      var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        isDecimalSign: false,
        isMinusSign: false
      };
      var minusCharIndexOnText = text.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
        return;
      }
      var selectionStart = this.$refs.input.$el.selectionStart;
      var selectionEnd = this.$refs.input.$el.selectionEnd;
      var inputValue = this.$refs.input.$el.value.trim();
      var _this$getCharIndexes = this.getCharIndexes(inputValue),
        decimalCharIndex = _this$getCharIndexes.decimalCharIndex,
        minusCharIndex = _this$getCharIndexes.minusCharIndex,
        suffixCharIndex = _this$getCharIndexes.suffixCharIndex,
        currencyCharIndex = _this$getCharIndexes.currencyCharIndex;
      var newValueStr;
      if (sign.isMinusSign) {
        if (selectionStart === 0) {
          newValueStr = inputValue;
          if (minusCharIndex === -1 || selectionEnd !== 0) {
            newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
          }
          this.updateValue(event, newValueStr, text, 'insert');
        }
      } else if (sign.isDecimalSign) {
        if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
          this.updateValue(event, inputValue, text, 'insert');
        } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, 'insert');
        } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, 'insert');
        }
      } else {
        var maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
        var operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert';
        if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
          if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
            var charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
            newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
            this.updateValue(event, newValueStr, text, operation);
          }
        } else {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, operation);
        }
      }
    },
    insertText: function insertText(value, text, start, end) {
      var textSplit = text === '.' ? text : text.split('.');
      if (textSplit.length === 2) {
        var decimalCharIndex = value.slice(start, end).search(this._decimal);
        this._decimal.lastIndex = 0;
        return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : value || this.formatValue(text);
      } else if (end - start === value.length) {
        return this.formatValue(text);
      } else if (start === 0) {
        return text + value.slice(end);
      } else if (end === value.length) {
        return value.slice(0, start) + text;
      } else {
        return value.slice(0, start) + text + value.slice(end);
      }
    },
    deleteRange: function deleteRange(value, start, end) {
      var newValueStr;
      if (end - start === value.length) newValueStr = '';else if (start === 0) newValueStr = value.slice(end);else if (end === value.length) newValueStr = value.slice(0, start);else newValueStr = value.slice(0, start) + value.slice(end);
      return newValueStr;
    },
    initCursor: function initCursor() {
      var selectionStart = this.$refs.input.$el.selectionStart;
      var inputValue = this.$refs.input.$el.value;
      var valueLength = inputValue.length;
      var index = null;

      // remove prefix
      var prefixLength = (this.prefixChar || '').length;
      inputValue = inputValue.replace(this._prefix, '');
      selectionStart = selectionStart - prefixLength;
      var char = inputValue.charAt(selectionStart);
      if (this.isNumeralChar(char)) {
        return selectionStart + prefixLength;
      }

      //left
      var i = selectionStart - 1;
      while (i >= 0) {
        char = inputValue.charAt(i);
        if (this.isNumeralChar(char)) {
          index = i + prefixLength;
          break;
        } else {
          i--;
        }
      }
      if (index !== null) {
        this.$refs.input.$el.setSelectionRange(index + 1, index + 1);
      } else {
        i = selectionStart;
        while (i < valueLength) {
          char = inputValue.charAt(i);
          if (this.isNumeralChar(char)) {
            index = i + prefixLength;
            break;
          } else {
            i++;
          }
        }
        if (index !== null) {
          this.$refs.input.$el.setSelectionRange(index, index);
        }
      }
      return index || 0;
    },
    onInputClick: function onInputClick() {
      this.initCursor();
    },
    isNumeralChar: function isNumeralChar(char) {
      if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
        this.resetRegex();
        return true;
      }
      return false;
    },
    resetRegex: function resetRegex() {
      this._numeral.lastIndex = 0;
      this._decimal.lastIndex = 0;
      this._group.lastIndex = 0;
      this._minusSign.lastIndex = 0;
    },
    updateValue: function updateValue(event, valueStr, insertedValueStr, operation) {
      var currentValue = this.$refs.input.$el.value;
      var newValue = null;
      if (valueStr != null) {
        newValue = this.parseValue(valueStr);
        newValue = !newValue && !this.allowEmpty ? 0 : newValue;
        this.updateInput(newValue, insertedValueStr, operation, valueStr);
        this.handleOnInput(event, currentValue, newValue);
      }
    },
    handleOnInput: function handleOnInput(event, currentValue, newValue) {
      if (this.isValueChanged(currentValue, newValue)) {
        this.$emit('input', newValue);
      }
    },
    isValueChanged: function isValueChanged(currentValue, newValue) {
      if (newValue === null && currentValue !== null) {
        return true;
      }
      if (newValue != null) {
        var parsedCurrentValue = typeof currentValue === 'string' ? this.parseValue(currentValue) : currentValue;
        return newValue !== parsedCurrentValue;
      }
      return false;
    },
    validateValue: function validateValue(value) {
      if (value === '-' || value == null) {
        return null;
      }
      if (this.min != null && value < this.min) {
        return this.min;
      }
      if (this.max != null && value > this.max) {
        return this.max;
      }
      return value;
    },
    updateInput: function updateInput(value, insertedValueStr, operation, valueStr) {
      insertedValueStr = insertedValueStr || '';
      var inputValue = this.$refs.input.$el.value;
      var newValue = this.formatValue(value);
      var currentLength = inputValue.length;
      if (newValue !== valueStr) {
        newValue = this.concatValues(newValue, valueStr);
      }
      if (currentLength === 0) {
        this.$refs.input.$el.value = newValue;
        this.$refs.input.$el.setSelectionRange(0, 0);
        var index = this.initCursor();
        var selectionEnd = index + insertedValueStr.length;
        this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
      } else {
        var selectionStart = this.$refs.input.$el.selectionStart;
        var _selectionEnd = this.$refs.input.$el.selectionEnd;
        this.$refs.input.$el.value = newValue;
        var newLength = newValue.length;
        if (operation === 'range-insert') {
          var startValue = this.parseValue((inputValue || '').slice(0, selectionStart));
          var startValueStr = startValue !== null ? startValue.toString() : '';
          var startExpr = startValueStr.split('').join("(".concat(this.groupChar, ")?"));
          var sRegex = new RegExp(startExpr, 'g');
          sRegex.test(newValue);
          var tExpr = insertedValueStr.split('').join("(".concat(this.groupChar, ")?"));
          var tRegex = new RegExp(tExpr, 'g');
          tRegex.test(newValue.slice(sRegex.lastIndex));
          _selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
          this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
        } else if (newLength === currentLength) {
          if (operation === 'insert' || operation === 'delete-back-single') this.$refs.input.$el.setSelectionRange(_selectionEnd + 1, _selectionEnd + 1);else if (operation === 'delete-single') this.$refs.input.$el.setSelectionRange(_selectionEnd - 1, _selectionEnd - 1);else if (operation === 'delete-range' || operation === 'spin') this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
        } else if (operation === 'delete-back-single') {
          var prevChar = inputValue.charAt(_selectionEnd - 1);
          var nextChar = inputValue.charAt(_selectionEnd);
          var diff = currentLength - newLength;
          var isGroupChar = this._group.test(nextChar);
          if (isGroupChar && diff === 1) {
            _selectionEnd += 1;
          } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
            _selectionEnd += -1 * diff + 1;
          }
          this._group.lastIndex = 0;
          this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
        } else if (inputValue === '-' && operation === 'insert') {
          this.$refs.input.$el.setSelectionRange(0, 0);
          var _index = this.initCursor();
          var _selectionEnd2 = _index + insertedValueStr.length + 1;
          this.$refs.input.$el.setSelectionRange(_selectionEnd2, _selectionEnd2);
        } else {
          _selectionEnd = _selectionEnd + (newLength - currentLength);
          this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
        }
      }
      this.$refs.input.$el.setAttribute('aria-valuenow', value);
    },
    concatValues: function concatValues(val1, val2) {
      if (val1 && val2) {
        var decimalCharIndex = val2.search(this._decimal);
        this._decimal.lastIndex = 0;
        return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
      }
      return val1;
    },
    getDecimalLength: function getDecimalLength(value) {
      if (value) {
        var valueSplit = value.split(this._decimal);
        if (valueSplit.length === 2) {
          return valueSplit[1].replace(this._suffix, '').trim().replace(/\s/g, '').replace(this._currency, '').length;
        }
      }
      return 0;
    },
    updateModel: function updateModel(event, value) {
      this.d_value = value;
      this.$emit('input', value);
    },
    onInputFocus: function onInputFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    onInputBlur: function onInputBlur(event) {
      this.focused = false;
      var input = event.target;
      var newValue = this.validateValue(this.parseValue(input.value));
      input.value = this.formatValue(newValue);
      input.setAttribute('aria-valuenow', newValue);
      this.updateModel(event, newValue);
      this.$emit('blur', event);
    },
    clearTimer: function clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    maxBoundry: function maxBoundry() {
      return this.d_value !== null && this.d_value >= this.max;
    },
    minBoundry: function minBoundry() {
      return this.d_value !== null && this.d_value <= this.min;
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-inputnumber p-component p-inputwrapper', this.className, {
        'p-inputwrapper-filled': this.filled,
        'p-inputwrapper-focus': this.focused,
        'p-inputnumber-buttons-stacked': this.showButtons && this.buttonLayout === 'stacked',
        'p-inputnumber-buttons-horizontal': this.showButtons && this.buttonLayout === 'horizontal',
        'p-inputnumber-buttons-vertical': this.showButtons && this.buttonLayout === 'vertical'
      }];
    },
    upButtonClass: function upButtonClass() {
      return ['p-inputnumber-button p-inputnumber-button-up', this.incrementButtonClass, {
        'p-disabled': this.showButtons && this.max !== null && this.maxBoundry()
      }];
    },
    downButtonClass: function downButtonClass() {
      return ['p-inputnumber-button p-inputnumber-button-down', this.decrementButtonClass, {
        'p-disabled': this.showButtons && this.min !== null && this.minBoundry()
      }];
    },
    filled: function filled() {
      return this.value != null && this.value.toString().length > 0;
    },
    upButtonListeners: function upButtonListeners() {
      var _this2 = this;
      return {
        mousedown: function mousedown(event) {
          return _this2.onUpButtonMouseDown(event);
        },
        mouseup: function mouseup(event) {
          return _this2.onUpButtonMouseUp(event);
        },
        mouseleave: function mouseleave(event) {
          return _this2.onUpButtonMouseLeave(event);
        },
        keydown: function keydown(event) {
          return _this2.onUpButtonKeyDown(event);
        },
        keyup: function keyup(event) {
          return _this2.onUpButtonKeyUp(event);
        }
      };
    },
    downButtonListeners: function downButtonListeners() {
      var _this3 = this;
      return {
        mousedown: function mousedown(event) {
          return _this3.onDownButtonMouseDown(event);
        },
        mouseup: function mouseup(event) {
          return _this3.onDownButtonMouseUp(event);
        },
        mouseleave: function mouseleave(event) {
          return _this3.onDownButtonMouseLeave(event);
        },
        keydown: function keydown(event) {
          return _this3.onDownButtonKeyDown(event);
        },
        keyup: function keyup(event) {
          return _this3.onDownButtonKeyUp(event);
        }
      };
    },
    formattedValue: function formattedValue() {
      var val = !this.value && !this.allowEmpty ? 0 : this.value;
      return this.formatValue(val);
    },
    getFormatter: function getFormatter() {
      return this.numberFormat;
    }
  },
  components: {
    'INInputText': InputText__default["default"],
    'INButton': Button__default["default"]
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
  }, [_c("INInputText", _vm._b({
    ref: "input",
    class: ["p-inputnumber-input", _vm.inputClass],
    style: _vm.inputStyle,
    attrs: {
      value: _vm.formattedValue,
      "aria-valumin": _vm.min,
      "aria-valuemax": _vm.max
    },
    on: {
      input: _vm.onUserInput,
      keydown: _vm.onInputKeyDown,
      keyup: _vm.onInputKeyUp,
      keypress: _vm.onInputKeyPress,
      paste: _vm.onPaste,
      click: _vm.onInputClick,
      focus: _vm.onInputFocus,
      blur: _vm.onInputBlur
    }
  }, "INInputText", _vm.$attrs, false)), _vm._v(" "), _vm.showButtons && _vm.buttonLayout === "stacked" ? _c("span", {
    staticClass: "p-inputnumber-button-group"
  }, [_c("INButton", _vm._g({
    class: _vm.upButtonClass,
    attrs: {
      icon: _vm.incrementButtonIcon,
      disabled: _vm.$attrs.disabled
    }
  }, _vm.upButtonListeners)), _vm._v(" "), _c("INButton", _vm._g({
    class: _vm.downButtonClass,
    attrs: {
      icon: _vm.decrementButtonIcon,
      disabled: _vm.$attrs.disabled
    }
  }, _vm.downButtonListeners))], 1) : _vm._e(), _vm._v(" "), _vm.showButtons && _vm.buttonLayout !== "stacked" ? _c("INButton", _vm._g({
    class: _vm.upButtonClass,
    attrs: {
      icon: _vm.incrementButtonIcon,
      disabled: _vm.$attrs.disabled
    }
  }, _vm.upButtonListeners)) : _vm._e(), _vm._v(" "), _vm.showButtons && _vm.buttonLayout !== "stacked" ? _c("INButton", _vm._g({
    class: _vm.downButtonClass,
    attrs: {
      icon: _vm.decrementButtonIcon,
      disabled: _vm.$attrs.disabled
    }
  }, _vm.downButtonListeners)) : _vm._e()], 1);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-0fff9e0e_0", {
    source: "\n.p-inputnumber {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.p-inputnumber-button {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {\n  display: none;\n}\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  padding: 0;\n}\n.p-inputnumber-buttons-stacked .p-inputnumber-input {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  padding: 0;\n}\n.p-inputnumber-buttons-stacked .p-inputnumber-button-group {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {\n  -webkit-box-ordinal-group: 4;\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.p-inputnumber-buttons-horizontal .p-inputnumber-input {\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n  border-radius: 0;\n}\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.p-inputnumber-buttons-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 100%;\n}\n.p-inputnumber-buttons-vertical .p-inputnumber-input {\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n  border-radius: 0;\n  text-align: center;\n}\n.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {\n  -webkit-box-ordinal-group: 4;\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  width: 100%;\n}\n.p-inputnumber-input {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.p-fluid .p-inputnumber {\n  width: 100%;\n}\n.p-fluid .p-inputnumber .p-inputnumber-input {\n  width: 1%;\n}\n.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {\n  width: 100%;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/nangongpo/Desktop/我的开源/primevue2/src/components/inputnumber/InputNumber.vue"],
      "names": [],
      "mappings": ";AA6/BA;EACA,2BAAA;EAAA,4BAAA;EAAA,2BAAA;EAAA,oBAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,2BAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;EAAA,+BAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;;EAEA,aAAA;AACA;AAEA;EACA,yBAAA;EACA,4BAAA;EACA,6BAAA;EACA,UAAA;AACA;AAEA;EACA,0BAAA;EACA,6BAAA;AACA;AAEA;EACA,yBAAA;EACA,0BAAA;EACA,4BAAA;EACA,UAAA;AACA;AAEA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;EACA,4BAAA;EAAA,gBAAA;MAAA,iBAAA;UAAA,QAAA;EACA,yBAAA;EACA,4BAAA;AACA;AAEA;EACA,4BAAA;EAAA,gBAAA;MAAA,iBAAA;UAAA,QAAA;EACA,gBAAA;AACA;AAEA;EACA,4BAAA;EAAA,gBAAA;MAAA,iBAAA;UAAA,QAAA;EACA,0BAAA;EACA,6BAAA;AACA;AAEA;EACA,4BAAA;EAAA,6BAAA;EAAA,8BAAA;MAAA,0BAAA;UAAA,sBAAA;AACA;AAEA;EACA,4BAAA;EAAA,gBAAA;MAAA,iBAAA;UAAA,QAAA;EACA,4BAAA;EACA,6BAAA;EACA,WAAA;AACA;AAEA;EACA,4BAAA;EAAA,gBAAA;MAAA,iBAAA;UAAA,QAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,4BAAA;EAAA,gBAAA;MAAA,iBAAA;UAAA,QAAA;EACA,yBAAA;EACA,0BAAA;EACA,WAAA;AACA;AAEA;EACA,mBAAA;EAAA,sBAAA;MAAA,kBAAA;UAAA,cAAA;AACA;AAEA;EACA,WAAA;AACA;AAEA;EACA,SAAA;AACA;AAEA;EACA,WAAA;AACA",
      "file": "InputNumber.vue",
      "sourcesContent": ["<template>\n  <span :class=\"containerClass\" :style=\"styles\">\n    <INInputText\n      ref=\"input\"\n      :class=\"['p-inputnumber-input', inputClass]\"\n      :style=\"inputStyle\"\n      :value=\"formattedValue\"\n      v-bind=\"$attrs\"\n      :aria-valumin=\"min\"\n      :aria-valuemax=\"max\"\n      @input=\"onUserInput\"\n      @keydown=\"onInputKeyDown\"\n      @keyup=\"onInputKeyUp\"\n      @keypress=\"onInputKeyPress\"\n      @paste=\"onPaste\"\n      @click=\"onInputClick\"\n      @focus=\"onInputFocus\"\n      @blur=\"onInputBlur\" />\n    <span class=\"p-inputnumber-button-group\" v-if=\"showButtons && buttonLayout === 'stacked'\">\n      <INButton\n        :class=\"upButtonClass\"\n        :icon=\"incrementButtonIcon\"\n        v-on=\"upButtonListeners\"\n        :disabled=\"$attrs.disabled\" />\n      <INButton\n        :class=\"downButtonClass\"\n        :icon=\"decrementButtonIcon\"\n        v-on=\"downButtonListeners\"\n        :disabled=\"$attrs.disabled\" />\n    </span>\n    <INButton\n      :class=\"upButtonClass\"\n      :icon=\"incrementButtonIcon\"\n      v-on=\"upButtonListeners\"\n      v-if=\"showButtons && buttonLayout !== 'stacked'\"\n      :disabled=\"$attrs.disabled\" />\n    <INButton\n      :class=\"downButtonClass\"\n      :icon=\"decrementButtonIcon\"\n      v-on=\"downButtonListeners\"\n      v-if=\"showButtons && buttonLayout !== 'stacked'\"\n      :disabled=\"$attrs.disabled\" />\n  </span>\n</template>\n\n<script>\nimport InputText from 'primevue2/inputtext'\nimport Button from 'primevue2/button'\n\nexport default {\n  name: 'InputNumber',\n  inheritAttrs: false,\n  props: {\n    value: {\n      type: Number,\n      default: null\n    },\n    format: {\n      type: Boolean,\n      default: true\n    },\n    showButtons: {\n      type: Boolean,\n      default: false\n    },\n    buttonLayout: {\n      type: String,\n      default: 'stacked'\n    },\n    incrementButtonClass: {\n      type: String,\n      default: null,\n    },\n    decrementButtonClass: {\n      type: String,\n      default: null,\n    },\n    incrementButtonIcon: {\n      type: String,\n      default: 'pi pi-angle-up',\n    },\n    decrementButtonIcon: {\n      type: String,\n      default: 'pi pi-angle-down',\n    },\n    locale: {\n      type: String,\n      default: undefined\n    },\n    localeMatcher: {\n      type: String,\n      default: undefined\n    },\n    mode: {\n      type: String,\n      default: 'decimal'\n    },\n    prefix: {\n      type: String,\n      default: null\n    },\n    suffix: {\n      type: String,\n      default: null\n    },\n    currency: {\n      type: String,\n      default: undefined\n    },\n    currencyDisplay: {\n      type: String,\n      default: undefined\n    },\n    useGrouping: {\n      type: Boolean,\n      default: true\n    },\n    minFractionDigits: {\n      type: Number,\n      default: undefined\n    },\n    maxFractionDigits: {\n      type: Number,\n      default: undefined\n    },\n    min: {\n      type: Number,\n      default: null\n    },\n    max: {\n      type: Number,\n      default: null\n    },\n    step: {\n      type: Number,\n      default: 1\n    },\n    allowEmpty: {\n      type: Boolean,\n      default: true\n    },\n    styles: null,\n    className: null,\n    inputStyle: null,\n    inputClass: null\n  },\n  numberFormat: null,\n  _numeral: null,\n  _decimal: null,\n  _group: null,\n  _minusSign: null,\n  _currency: null,\n  _suffix: null,\n  _prefix: null,\n  _index: null,\n  groupChar: '',\n  isSpecialChar: null,\n  prefixChar: null,\n  suffixChar: null,\n  timer: null,\n  data() {\n    return {\n      d_value: null,\n      focused: false\n    }\n  },\n  watch: {\n    value(newValue) {\n      this.d_value = newValue\n    },\n    locale(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    localeMatcher(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    mode(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    currency(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    currencyDisplay(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    useGrouping(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    minFractionDigits(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    maxFractionDigits(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    suffix(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    },\n    prefix(newValue, oldValue) {\n      this.updateConstructParser(newValue, oldValue)\n    }\n  },\n  created() {\n    this.constructParser()\n  },\n  methods: {\n    getOptions() {\n      return {\n        localeMatcher: this.localeMatcher,\n        style: this.mode,\n        currency: this.currency,\n        currencyDisplay: this.currencyDisplay,\n        useGrouping: this.useGrouping,\n        minimumFractionDigits: this.minFractionDigits,\n        maximumFractionDigits: this.maxFractionDigits\n      }\n    },\n    constructParser() {\n      this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions())\n      const numerals = [...new Intl.NumberFormat(this.locale, { useGrouping: false }).format(9876543210)].reverse()\n      const index = new Map(numerals.map((d, i) => [d, i]))\n      this._numeral = new RegExp(`[${numerals.join('')}]`, 'g')\n      this._group = this.getGroupingExpression()\n      this._minusSign = this.getMinusSignExpression()\n      this._currency = this.getCurrencyExpression()\n      this._decimal = this.getDecimalExpression()\n      this._suffix = this.getSuffixExpression()\n      this._prefix = this.getPrefixExpression()\n      this._index = d => index.get(d)\n    },\n    updateConstructParser(newValue, oldValue) {\n      if (newValue !== oldValue) {\n        this.constructParser()\n      }\n    },\n    escapeRegExp(text) {\n      return text.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, '\\\\$&')\n    },\n    getDecimalExpression() {\n      const formatter = new Intl.NumberFormat(this.locale, { ...this.getOptions(), useGrouping: false })\n      return new RegExp(`[${formatter.format(1.1).replace(this._currency, '').trim().replace(this._numeral, '')}]`, 'g')\n    },\n    getGroupingExpression() {\n      const formatter = new Intl.NumberFormat(this.locale, { useGrouping: true })\n      this.groupChar = formatter.format(1000000).trim().replace(this._numeral, '').charAt(0)\n      return new RegExp(`[${this.groupChar}]`, 'g')\n    },\n    getMinusSignExpression() {\n      const formatter = new Intl.NumberFormat(this.locale, { useGrouping: false })\n      return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, '')}]`, 'g')\n    },\n    getCurrencyExpression() {\n      if (this.currency) {\n        const formatter = new Intl.NumberFormat(this.locale, {\n          style: 'currency', currency: this.currency, currencyDisplay: this.currencyDisplay,\n          minimumFractionDigits: 0, maximumFractionDigits: 0\n        })\n        return new RegExp(`[${formatter.format(1).replace(/\\s/g, '').replace(this._numeral, '').replace(this._group, '')}]`, 'g')\n      }\n\n      return new RegExp('[]', 'g')\n    },\n    getPrefixExpression() {\n      if (this.prefix) {\n        this.prefixChar = this.prefix\n      }\n      else {\n        const formatter = new Intl.NumberFormat(this.locale, { style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay })\n        this.prefixChar = formatter.format(1).split('1')[0]\n      }\n\n      return new RegExp(`${this.escapeRegExp(this.prefixChar || '')}`, 'g')\n    },\n    getSuffixExpression() {\n      if (this.suffix) {\n        this.suffixChar = this.suffix\n      }\n      else {\n        const formatter = new Intl.NumberFormat(this.locale, {\n          style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay,\n          minimumFractionDigits: 0, maximumFractionDigits: 0\n        })\n        this.suffixChar = formatter.format(1).split('1')[1]\n      }\n\n      return new RegExp(`${this.escapeRegExp(this.suffixChar || '')}`, 'g')\n    },\n    formatValue(value) {\n      if (value != null) {\n        if (value === '-') { // Minus sign\n          return value\n        }\n\n        if (this.format) {\n          let formatter = new Intl.NumberFormat(this.locale, this.getOptions())\n          let formattedValue = formatter.format(value)\n          if (this.prefix) {\n            formattedValue = this.prefix + formattedValue\n          }\n\n          if (this.suffix) {\n            formattedValue = formattedValue + this.suffix\n          }\n\n          return formattedValue\n        }\n\n        return value.toString()\n      }\n\n      return ''\n    },\n    parseValue(text) {\n      let filteredText = text\n        .replace(this._suffix, '')\n        .replace(this._prefix, '')\n        .trim()\n        .replace(/\\s/g, '')\n        .replace(this._currency, '')\n        .replace(this._group, '')\n        .replace(this._minusSign, '-')\n        .replace(this._decimal, '.')\n        .replace(this._numeral, this._index)\n\n      if (filteredText) {\n        if (filteredText === '-') // Minus sign\n          return filteredText\n\n        let parsedValue = +filteredText\n        return isNaN(parsedValue) ? null : parsedValue\n      }\n\n      return null\n    },\n    repeat(event, interval, dir) {\n      let i = interval || 500\n\n      this.clearTimer()\n      this.timer = setTimeout(() => {\n        this.repeat(event, 40, dir)\n      }, i)\n\n      this.spin(event, dir)\n    },\n    spin(event, dir) {\n      if (this.$refs.input) {\n        let step = this.step * dir\n        let currentValue = this.parseValue(this.$refs.input.$el.value) || 0\n        let newValue = this.validateValue(currentValue + step)\n\n        this.updateInput(newValue, null, 'spin')\n        this.updateModel(event, newValue)\n\n        this.handleOnInput(event, currentValue, newValue)\n      }\n    },\n    onUpButtonMouseDown(event) {\n      if (!this.$attrs.disabled) {\n        this.$refs.input.$el.focus()\n        this.repeat(event, null, 1)\n        event.preventDefault()\n      }\n    },\n    onUpButtonMouseUp() {\n      if (!this.$attrs.disabled) {\n        this.clearTimer()\n      }\n    },\n    onUpButtonMouseLeave() {\n      if (!this.$attrs.disabled) {\n        this.clearTimer()\n      }\n    },\n    onUpButtonKeyUp() {\n      if (!this.$attrs.disabled) {\n        this.clearTimer()\n      }\n    },\n    onUpButtonKeyDown(event) {\n      if (event.keyCode === 32 || event.keyCode === 13) {\n        this.repeat(event, null, 1)\n      }\n    },\n    onDownButtonMouseDown(event) {\n      if (!this.$attrs.disabled) {\n        this.$refs.input.$el.focus()\n        this.repeat(event, null, -1)\n        event.preventDefault()\n      }\n    },\n    onDownButtonMouseUp() {\n      if (!this.$attrs.disabled) {\n        this.clearTimer()\n      }\n    },\n    onDownButtonMouseLeave() {\n      if (!this.$attrs.disabled) {\n        this.clearTimer()\n      }\n    },\n    onDownButtonKeyUp() {\n      if (!this.$attrs.disabled) {\n        this.clearTimer()\n      }\n    },\n    onDownButtonKeyDown(event) {\n      if (event.keyCode === 32 || event.keyCode === 13) {\n        this.repeat(event, null, -1)\n      }\n    },\n    onUserInput() {\n      if (this.isSpecialChar) {\n        this.$refs.input.$el.value = this.lastValue\n      }\n      this.isSpecialChar = false\n    },\n    onInputKeyDown(event) {\n      this.lastValue = event.target.value\n      if (event.shiftKey || event.altKey) {\n        this.isSpecialChar = true\n        return\n      }\n\n      let selectionStart = event.target.selectionStart\n      let selectionEnd = event.target.selectionEnd\n      let inputValue = event.target.value\n      let newValueStr = null\n\n      if (event.altKey) {\n        event.preventDefault()\n      }\n\n      switch (event.which) {\n      //up\n      case 38:\n        this.spin(event, 1)\n        event.preventDefault()\n        break\n\n        //down\n      case 40:\n        this.spin(event, -1)\n        event.preventDefault()\n        break\n\n        //left\n      case 37:\n        if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {\n          event.preventDefault()\n        }\n        break\n\n        //right\n      case 39:\n        if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {\n          event.preventDefault()\n        }\n        break\n\n        //enter\n      case 13:\n        newValueStr = this.validateValue(this.parseValue(inputValue))\n        this.$refs.input.$el.value = this.formatValue(newValueStr)\n        this.$refs.input.$el.setAttribute('aria-valuenow', newValueStr)\n        this.updateModel(event, newValueStr)\n        break\n\n        //backspace\n      case 8: {\n        event.preventDefault()\n\n        if (selectionStart === selectionEnd) {\n          const deleteChar = inputValue.charAt(selectionStart - 1)\n          const { decimalCharIndex, decimalCharIndexWithoutPrefix } = this.getDecimalCharIndexes(inputValue)\n\n          if (this.isNumeralChar(deleteChar)) {\n            const decimalLength = this.getDecimalLength(inputValue)\n\n            if (this._group.test(deleteChar)) {\n              this._group.lastIndex = 0\n              newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1)\n            }\n            else if (this._decimal.test(deleteChar)) {\n              this._decimal.lastIndex = 0\n\n              if (decimalLength) {\n                this.$refs.input.$el.setSelectionRange(selectionStart - 1, selectionStart - 1)\n              }\n              else {\n                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart)\n              }\n            }\n            else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {\n              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0'\n              newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart)\n            }\n            else if (decimalCharIndexWithoutPrefix === 1) {\n              newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart)\n              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : ''\n            }\n            else {\n              newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart)\n            }\n          }\n\n          this.updateValue(event, newValueStr, null, 'delete-single')\n        }\n        else {\n          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd)\n          this.updateValue(event, newValueStr, null, 'delete-range')\n        }\n\n        break\n      }\n\n      // del\n      case 46:\n        event.preventDefault()\n\n        if (selectionStart === selectionEnd) {\n          const deleteChar = inputValue.charAt(selectionStart)\n          const { decimalCharIndex, decimalCharIndexWithoutPrefix } = this.getDecimalCharIndexes(inputValue)\n\n          if (this.isNumeralChar(deleteChar)) {\n            const decimalLength = this.getDecimalLength(inputValue)\n\n            if (this._group.test(deleteChar)) {\n              this._group.lastIndex = 0\n              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2)\n            }\n            else if (this._decimal.test(deleteChar)) {\n              this._decimal.lastIndex = 0\n\n              if (decimalLength) {\n                this.$refs.input.$el.setSelectionRange(selectionStart + 1, selectionStart + 1)\n              }\n              else {\n                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1)\n              }\n            }\n            else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {\n              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0'\n              newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1)\n            }\n            else if (decimalCharIndexWithoutPrefix === 1) {\n              newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1)\n              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : ''\n            }\n            else {\n              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1)\n            }\n          }\n\n          this.updateValue(event, newValueStr, null, 'delete-back-single')\n        }\n        else {\n          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd)\n          this.updateValue(event, newValueStr, null, 'delete-range')\n        }\n        break\n\n      default:\n        break\n      }\n    },\n    onInputKeyUp(event) {\n      this.$emit('keyup', event)\n    },\n    onInputKeyPress(event) {\n      event.preventDefault()\n      let code = event.which || event.keyCode\n      let char = String.fromCharCode(code)\n      const isDecimalSign = this.isDecimalSign(char)\n      const isMinusSign = this.isMinusSign(char)\n\n      if ((48 <= code && code <= 57) || isMinusSign || isDecimalSign) {\n        this.insert(event, char, { isDecimalSign, isMinusSign })\n      }\n    },\n    onPaste(event) {\n      event.preventDefault()\n      let data = (event.clipboardData || window['clipboardData']).getData('Text')\n      if (data) {\n        let filteredData = this.parseValue(data)\n        if (filteredData != null) {\n          this.insert(event, filteredData.toString())\n        }\n      }\n    },\n    allowMinusSign() {\n      return this.min === null || this.min < 0\n    },\n    isMinusSign(char) {\n      if (this._minusSign.test(char) || char === '-') {\n        this._minusSign.lastIndex = 0\n        return true\n      }\n\n      return false\n    },\n    isDecimalSign(char) {\n      if (this._decimal.test(char)) {\n        this._decimal.lastIndex = 0\n        return true\n      }\n\n      return false\n    },\n    isDecimalMode() {\n      return this.mode === 'decimal'\n    },\n    getDecimalCharIndexes(val) {\n      let decimalCharIndex = val.search(this._decimal)\n      this._decimal.lastIndex = 0\n\n      const filteredVal = val.replace(this._prefix, '').trim().replace(/\\s/g, '').replace(this._currency, '')\n      const decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal)\n      this._decimal.lastIndex = 0\n\n      return { decimalCharIndex, decimalCharIndexWithoutPrefix }\n    },\n    getCharIndexes(val) {\n      const decimalCharIndex = val.search(this._decimal)\n      this._decimal.lastIndex = 0\n      const minusCharIndex = val.search(this._minusSign)\n      this._minusSign.lastIndex = 0\n      const suffixCharIndex = val.search(this._suffix)\n      this._suffix.lastIndex = 0\n      const currencyCharIndex = val.search(this._currency)\n      this._currency.lastIndex = 0\n\n      return { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex }\n    },\n    insert(event, text, sign = { isDecimalSign: false, isMinusSign: false }) {\n      const minusCharIndexOnText = text.search(this._minusSign)\n      this._minusSign.lastIndex = 0\n      if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {\n        return\n      }\n\n      const selectionStart = this.$refs.input.$el.selectionStart\n      const selectionEnd = this.$refs.input.$el.selectionEnd\n      let inputValue = this.$refs.input.$el.value.trim()\n      const { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex } = this.getCharIndexes(inputValue)\n      let newValueStr\n\n      if (sign.isMinusSign) {\n        if (selectionStart === 0) {\n          newValueStr = inputValue\n          if (minusCharIndex === -1 || selectionEnd !== 0) {\n            newValueStr = this.insertText(inputValue, text, 0, selectionEnd)\n          }\n\n          this.updateValue(event, newValueStr, text, 'insert')\n        }\n      }\n      else if (sign.isDecimalSign) {\n        if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {\n          this.updateValue(event, inputValue, text, 'insert')\n        }\n        else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {\n          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd)\n          this.updateValue(event, newValueStr, text, 'insert')\n        }\n        else if (decimalCharIndex === -1 && this.maxFractionDigits) {\n          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd)\n          this.updateValue(event, newValueStr, text, 'insert')\n        }\n      }\n      else {\n        const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits\n        const operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert'\n\n        if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {\n          if ((selectionStart + text.length - (decimalCharIndex + 1)) <= maxFractionDigits) {\n            const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : (suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length)\n\n            newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex)\n            this.updateValue(event, newValueStr, text, operation)\n          }\n        }\n        else {\n          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd)\n          this.updateValue(event, newValueStr, text, operation)\n        }\n      }\n    },\n    insertText(value, text, start, end) {\n      let textSplit = text === '.' ? text : text.split('.')\n\n      if (textSplit.length === 2) {\n        const decimalCharIndex = value.slice(start, end).search(this._decimal)\n        this._decimal.lastIndex = 0\n        return (decimalCharIndex > 0) ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : (value || this.formatValue(text))\n      }\n      else if ((end - start) === value.length) {\n        return this.formatValue(text)\n      }\n      else if (start === 0) {\n        return text + value.slice(end)\n      }\n      else if (end === value.length) {\n        return value.slice(0, start) + text\n      }\n      else {\n        return value.slice(0, start) + text + value.slice(end)\n      }\n    },\n    deleteRange(value, start, end) {\n      let newValueStr\n\n      if ((end - start) === value.length)\n        newValueStr = ''\n      else if (start === 0)\n        newValueStr = value.slice(end)\n      else if (end === value.length)\n        newValueStr = value.slice(0, start)\n      else\n        newValueStr = value.slice(0, start) + value.slice(end)\n\n      return newValueStr\n    },\n    initCursor() {\n      let selectionStart = this.$refs.input.$el.selectionStart\n      let inputValue = this.$refs.input.$el.value\n      let valueLength = inputValue.length\n      let index = null\n\n      // remove prefix\n      let prefixLength = (this.prefixChar || '').length\n      inputValue = inputValue.replace(this._prefix, '')\n      selectionStart = selectionStart - prefixLength\n\n      let char = inputValue.charAt(selectionStart)\n      if (this.isNumeralChar(char)) {\n        return selectionStart + prefixLength\n      }\n\n      //left\n      let i = selectionStart - 1\n      while (i >= 0) {\n        char = inputValue.charAt(i)\n        if (this.isNumeralChar(char)) {\n          index = i + prefixLength\n          break\n        }\n        else {\n          i--\n        }\n      }\n\n      if (index !== null) {\n        this.$refs.input.$el.setSelectionRange(index + 1, index + 1)\n      }\n      else {\n        i = selectionStart\n        while (i < valueLength) {\n          char = inputValue.charAt(i)\n          if (this.isNumeralChar(char)) {\n            index = i + prefixLength\n            break\n          }\n          else {\n            i++\n          }\n        }\n\n        if (index !== null) {\n          this.$refs.input.$el.setSelectionRange(index, index)\n        }\n      }\n\n      return index || 0\n    },\n    onInputClick() {\n      this.initCursor()\n    },\n    isNumeralChar(char) {\n      if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {\n        this.resetRegex()\n        return true\n      }\n\n      return false\n    },\n    resetRegex() {\n      this._numeral.lastIndex = 0\n      this._decimal.lastIndex = 0\n      this._group.lastIndex = 0\n      this._minusSign.lastIndex = 0\n    },\n    updateValue(event, valueStr, insertedValueStr, operation) {\n      let currentValue = this.$refs.input.$el.value\n      let newValue = null\n\n      if (valueStr != null) {\n        newValue = this.parseValue(valueStr)\n        newValue = !newValue && !this.allowEmpty ? 0 : newValue\n        this.updateInput(newValue, insertedValueStr, operation, valueStr)\n\n        this.handleOnInput(event, currentValue, newValue)\n      }\n    },\n    handleOnInput(event, currentValue, newValue) {\n      if (this.isValueChanged(currentValue, newValue)) {\n        this.$emit('input', newValue)\n      }\n    },\n    isValueChanged(currentValue, newValue) {\n      if (newValue === null && currentValue !== null) {\n        return true\n      }\n\n      if (newValue != null) {\n        let parsedCurrentValue = (typeof currentValue === 'string') ? this.parseValue(currentValue) : currentValue\n        return newValue !== parsedCurrentValue\n      }\n\n      return false\n    },\n    validateValue(value) {\n      if (value === '-' || value == null) {\n        return null\n      }\n\n      if (this.min != null && value < this.min) {\n        return this.min\n      }\n\n      if (this.max != null && value > this.max) {\n        return this.max\n      }\n\n      return value\n    },\n    updateInput(value, insertedValueStr, operation, valueStr) {\n      insertedValueStr = insertedValueStr || ''\n\n      let inputValue = this.$refs.input.$el.value\n      let newValue = this.formatValue(value)\n      let currentLength = inputValue.length\n\n      if (newValue !== valueStr) {\n        newValue = this.concatValues(newValue, valueStr)\n      }\n\n      if (currentLength === 0) {\n        this.$refs.input.$el.value = newValue\n        this.$refs.input.$el.setSelectionRange(0, 0)\n        const index = this.initCursor()\n        const selectionEnd = index + insertedValueStr.length\n        this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd)\n      }\n      else {\n        let selectionStart = this.$refs.input.$el.selectionStart\n        let selectionEnd = this.$refs.input.$el.selectionEnd\n        this.$refs.input.$el.value = newValue\n        let newLength = newValue.length\n\n        if (operation === 'range-insert') {\n          const startValue = this.parseValue((inputValue || '').slice(0, selectionStart))\n          const startValueStr = startValue !== null ? startValue.toString() : ''\n          const startExpr = startValueStr.split('').join(`(${this.groupChar})?`)\n          const sRegex = new RegExp(startExpr, 'g')\n          sRegex.test(newValue)\n\n          const tExpr = insertedValueStr.split('').join(`(${this.groupChar})?`)\n          const tRegex = new RegExp(tExpr, 'g')\n          tRegex.test(newValue.slice(sRegex.lastIndex))\n\n          selectionEnd = sRegex.lastIndex + tRegex.lastIndex\n          this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd)\n        }\n        else if (newLength === currentLength) {\n          if (operation === 'insert' || operation === 'delete-back-single')\n            this.$refs.input.$el.setSelectionRange(selectionEnd + 1, selectionEnd + 1)\n          else if (operation === 'delete-single')\n            this.$refs.input.$el.setSelectionRange(selectionEnd - 1, selectionEnd - 1)\n          else if (operation === 'delete-range' || operation === 'spin')\n            this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd)\n        }\n        else if (operation === 'delete-back-single') {\n          let prevChar = inputValue.charAt(selectionEnd - 1)\n          let nextChar = inputValue.charAt(selectionEnd)\n          let diff = currentLength - newLength\n          let isGroupChar = this._group.test(nextChar)\n\n          if (isGroupChar && diff === 1) {\n            selectionEnd += 1\n          }\n          else if (!isGroupChar && this.isNumeralChar(prevChar)) {\n            selectionEnd += (-1 * diff) + 1\n          }\n\n          this._group.lastIndex = 0\n          this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd)\n        }\n        else if (inputValue === '-' && operation === 'insert') {\n          this.$refs.input.$el.setSelectionRange(0, 0)\n          const index = this.initCursor()\n          const selectionEnd = index + insertedValueStr.length + 1\n          this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd)\n        }\n        else {\n          selectionEnd = selectionEnd + (newLength - currentLength)\n          this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd)\n        }\n      }\n\n      this.$refs.input.$el.setAttribute('aria-valuenow', value)\n    },\n    concatValues(val1, val2) {\n      if (val1 && val2) {\n        let decimalCharIndex = val2.search(this._decimal)\n        this._decimal.lastIndex = 0\n\n        return decimalCharIndex !== -1 ? (val1.split(this._decimal)[0] + val2.slice(decimalCharIndex)) : val1\n      }\n\n      return val1\n    },\n    getDecimalLength(value) {\n      if (value) {\n        const valueSplit = value.split(this._decimal)\n\n        if (valueSplit.length === 2) {\n          return valueSplit[1].replace(this._suffix, '')\n            .trim()\n            .replace(/\\s/g, '')\n            .replace(this._currency, '').length\n        }\n      }\n\n      return 0\n    },\n    updateModel(event, value) {\n      this.d_value = value\n      this.$emit('input', value)\n    },\n    onInputFocus(event) {\n      this.focused = true\n      this.$emit('focus', event)\n    },\n    onInputBlur(event) {\n      this.focused = false\n\n      let input = event.target\n      let newValue = this.validateValue(this.parseValue(input.value))\n      input.value = this.formatValue(newValue)\n      input.setAttribute('aria-valuenow', newValue)\n      this.updateModel(event, newValue)\n      this.$emit('blur', event)\n    },\n    clearTimer() {\n      if (this.timer) {\n        clearInterval(this.timer)\n      }\n    },\n    maxBoundry() {\n      return this.d_value !== null && this.d_value >= this.max\n    },\n    minBoundry() {\n      return this.d_value !== null && this.d_value <= this.min\n    },\n  },\n  computed: {\n    containerClass() {\n      return ['p-inputnumber p-component p-inputwrapper', this.className, {\n        'p-inputwrapper-filled': this.filled,\n        'p-inputwrapper-focus': this.focused,\n        'p-inputnumber-buttons-stacked': this.showButtons && this.buttonLayout === 'stacked',\n        'p-inputnumber-buttons-horizontal': this.showButtons && this.buttonLayout === 'horizontal',\n        'p-inputnumber-buttons-vertical': this.showButtons && this.buttonLayout === 'vertical'\n      }]\n    },\n    upButtonClass() {\n      return ['p-inputnumber-button p-inputnumber-button-up', this.incrementButtonClass, {\n        'p-disabled': this.showButtons && this.max !== null && this.maxBoundry()\n      }]\n    },\n    downButtonClass() {\n      return ['p-inputnumber-button p-inputnumber-button-down', this.decrementButtonClass, {\n        'p-disabled': this.showButtons && this.min !== null && this.minBoundry()\n      }]\n    },\n    filled() {\n      return (this.value != null && this.value.toString().length > 0)\n    },\n    upButtonListeners() {\n      return {\n        mousedown: event => this.onUpButtonMouseDown(event),\n        mouseup: event => this.onUpButtonMouseUp(event),\n        mouseleave: event => this.onUpButtonMouseLeave(event),\n        keydown: event => this.onUpButtonKeyDown(event),\n        keyup: event => this.onUpButtonKeyUp(event)\n      }\n    },\n    downButtonListeners() {\n      return {\n        mousedown: event => this.onDownButtonMouseDown(event),\n        mouseup: event => this.onDownButtonMouseUp(event),\n        mouseleave: event => this.onDownButtonMouseLeave(event),\n        keydown: event => this.onDownButtonKeyDown(event),\n        keyup: event => this.onDownButtonKeyUp(event)\n      }\n    },\n    formattedValue() {\n      const val = !this.value && !this.allowEmpty ? 0 : this.value\n      return this.formatValue(val)\n    },\n    getFormatter() {\n      return this.numberFormat\n    }\n  },\n  components: {\n    'INInputText': InputText,\n    'INButton': Button\n  }\n}\n</script>\n\n<style>\n.p-inputnumber {\n  display: inline-flex;\n}\n\n.p-inputnumber-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n}\n\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {\n  display: none;\n}\n\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  padding: 0;\n}\n\n.p-inputnumber-buttons-stacked .p-inputnumber-input {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  padding: 0;\n}\n\n.p-inputnumber-buttons-stacked .p-inputnumber-button-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {\n  flex: 1 1 auto;\n}\n\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {\n  order: 3;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.p-inputnumber-buttons-horizontal .p-inputnumber-input {\n  order: 2;\n  border-radius: 0;\n}\n\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {\n  order: 1;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.p-inputnumber-buttons-vertical {\n  flex-direction: column;\n}\n\n.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {\n  order: 1;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 100%;\n}\n\n.p-inputnumber-buttons-vertical .p-inputnumber-input {\n  order: 2;\n  border-radius: 0;\n  text-align: center;\n}\n\n.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {\n  order: 3;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  width: 100%;\n}\n\n.p-inputnumber-input {\n  flex: 1 1 auto;\n}\n\n.p-fluid .p-inputnumber {\n  width: 100%;\n}\n\n.p-fluid .p-inputnumber .p-inputnumber-input {\n  width: 1%;\n}\n\n.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {\n  width: 100%;\n}\n</style>\n"]
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

module.exports = __vue_component__;
