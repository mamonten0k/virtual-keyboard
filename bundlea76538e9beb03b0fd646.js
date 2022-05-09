/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/HtmlBuilder.js":
/*!*******************************!*\
  !*** ./src/js/HtmlBuilder.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HtmlBuilder)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HtmlBuilder = /*#__PURE__*/function () {
  function HtmlBuilder() {
    _classCallCheck(this, HtmlBuilder);

    _defineProperty(this, "singleBracket", 'single');
  }

  _createClass(HtmlBuilder, [{
    key: "cunstructor",
    value: function cunstructor() {
      this.build = this.build.bind(this);
    }
  }, {
    key: "build",
    value: function build(type, classes, innerContent, id) {
      var bracketType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'double';
      var path = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

      if (bracketType === this.singleBracket) {
        return "<".concat(type, " class='").concat(classes, "' ").concat(path ? "src='".concat(path, "'") : '', " \n      ").concat(id ? "id='".concat(id, "'") : '', "/>");
      }

      return "<".concat(type, " class='").concat(classes, "' ").concat(path ? "src='".concat(path, "'") : '', " \n    ").concat(id ? "id='".concat(id, "'") : '', ">").concat(innerContent, "</").concat(type, ">");
    }
  }]);

  return HtmlBuilder;
}();



/***/ }),

/***/ "./src/js/Key.js":
/*!***********************!*\
  !*** ./src/js/Key.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Key)
/* harmony export */ });
/* harmony import */ var _HtmlBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlBuilder */ "./src/js/HtmlBuilder.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Key = /*#__PURE__*/function () {
  /* eslint-disable-next-line */
  function Key(_ref, row) {
    var en = _ref.en,
        shift = _ref.shift,
        id = _ref.id,
        ru = _ref.ru,
        classes = _ref.classes;

    _classCallCheck(this, Key);

    this.type = 'span';
    this.en = en;
    this.shift = shift;
    this.id = id;
    this.ru = ru;
    this.classes = classes;
    this.row = row;
    this.keyPressed = false;
    this.keyHTML = '';
    this.HtmlBuilder = new _HtmlBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.HtmlBuilder.build = this.HtmlBuilder.build.bind(this);
    this.getHTML = this.getHTML.bind(this);
  }

  _createClass(Key, [{
    key: "getHTML",
    value: function getHTML() {
      var code = '';

      if (this.classes === 'digit') {
        code += this.HtmlBuilder.build(this.type, 'digit', this.en);
      } else if (this.classes === 'letter-key') {
        code += this.HtmlBuilder.build(this.type, 'letter-en', this.en);
      } else {
        code += this.HtmlBuilder.build(this.type, 'key-complex', this.en);
      }

      if (this.shift) {
        code += this.HtmlBuilder.build(this.type, 'behave-on-shift hide', this.shift);
      }

      if (this.ru) {
        code += this.HtmlBuilder.build(this.type, ' letter-ru hide', this.ru);
      }

      return this.HtmlBuilder.build('div', "key ".concat(this.classes), code, this.id);
    }
  }]);

  return Key;
}();



/***/ }),

/***/ "./src/js/Keyboard.js":
/*!****************************!*\
  !*** ./src/js/Keyboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HtmlBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlBuilder */ "./src/js/HtmlBuilder.js");
/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Key */ "./src/js/Key.js");
/* harmony import */ var _KeysData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeysData */ "./src/js/KeysData.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var Keyboard = /*#__PURE__*/function () {
  function Keyboard(keysData) {
    _classCallCheck(this, Keyboard);

    this.structure = '';
    this.strotherHtmlucutre = '';
    this.textarea = null;
    this.keysData = keysData;
    this.keys = new Map();
    this.HtmlBuilder = new _HtmlBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.currId = '';
    this.capsLock = false;
    this.handelEvent = this.handelEvent.bind(this);
    this.handleMouseEvent = this.handleMouseEvent.bind(this);
    this.handleCapsLock = this.handleCapsLock.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.handleShiftRight = this.handleShiftRight.bind(this);
    this.handleShiftLeft = this.handleShiftLeft.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.handleCapsLock = this.handleCapsLock.bind(this);
    this.handleDefault = this.handleDefault.bind(this);
    this.handleArrow = this.handleArrow.bind(this);
  }

  _createClass(Keyboard, [{
    key: "createKeysByRow",
    value: function createKeysByRow(row, rowNum) {
      for (var i = 0; i < row.length; i += 1) {
        this.keys.set(row[i].id, new _Key__WEBPACK_IMPORTED_MODULE_1__["default"](row[i], rowNum));
      }
    }
  }, {
    key: "getHTML",
    value: function getHTML() {
      var currRow = 0;
      var rowLayout = '';
      var keysLayout = '';

      var _iterator = _createForOfIteratorHelper(this.keys.values()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;

          if (currRow !== key.row) {
            keysLayout += this.HtmlBuilder.build('div', 'row row-wrap', rowLayout);
            rowLayout = '';
            currRow += 1;
          }

          rowLayout += key.getHTML();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      keysLayout += this.HtmlBuilder.build('div', 'row row-wrap', rowLayout);
      return keysLayout;
    }
  }, {
    key: "handelEvent",
    value: function handelEvent(evt) {
      console.log(evt);
      var id = evt.code;

      switch (id) {
        case 'CapsLock':
          this.handleCapsLock(evt, id);
          break;

        case 'ShiftLeft':
          this.handleShiftLeft(evt, id);
          break;

        case 'ShiftRight':
          this.handleShiftRight(evt, id);
          break;

        case 'Backspace':
          this.handleBackspace(evt, id);
          break;

        case 'Tab':
          this.handleTab(evt, id);
          break;

        case 'Space':
          this.handleSpace(evt, id);
          break;

        case 'Enter':
          this.handleEnter(evt, id);
          break;

        case 'AltLeft':
          this.handleAltLeft(evt, id);
          break;

        case 'AltRight':
          this.handleAltRight(evt, id);
          break;

        case 'ControlLeft':
          this.handleControl(evt, id);
          break;

        case 'ControlRight':
          this.handleControl(evt, id);
          break;

        case 'ArrowUp':
          this.handleArrow(evt, id);
          break;

        case 'ArrowDown':
          this.handleArrow(evt, id);
          break;

        case 'ArrowLeft':
          this.handleArrow(evt, id);
          break;

        case 'ArrowRight':
          this.handleArrow(evt, id);
          break;

        case 'Delete':
          this.handleDelete(evt, id);
          break;

        case 'MetaLeft':
          this.handleMetaLeft(evt, id);
          break;

        default:
          this.handleDefault(evt, id);
          break;
      }
    }
  }, {
    key: "handleMouseEvent",
    value: function handleMouseEvent(evt) {
      this.textarea.focus();

      if (evt.target.id !== '' && evt.type === 'mousedown') {
        this.currId = evt.target.id.replace(/\s/g, '');
      } else if (evt.type === 'mousedown') {
        this.currId = evt.target.parentNode.id.replace(/\s/g, '');
      }

      console.log(this.currId);

      if (evt.type === 'mousedown') {
        this.handelEvent(new KeyboardEvent('keydown', {
          code: this.currId
        }));
      } else {
        this.handelEvent(new KeyboardEvent('keyup', {
          code: this.currId
        }));
      }
    }
  }, {
    key: "handleCapsLock",
    value: function handleCapsLock(evt, id) {
      evt.stopPropagation();

      if (evt.type === 'keyup') {
        this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
        return;
      }

      if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;
      document.getElementById(id).classList.toggle('caps-highlight');
      this.keyLetters.forEach(function (letter) {
        return letter.classList.toggle('uppercase-on');
      });
      this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
      this.capsLock = !this.capsLock;
    }
  }, {
    key: "handleShiftLeft",
    value: function handleShiftLeft(evt, id) {
      evt.preventDefault();
      if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;
      document.getElementById(id).classList.toggle('key-pressed');
      this.keyLetters.forEach(function (letter) {
        return letter.classList.toggle('uppercase-on');
      });
      this.onShiftKeys.forEach(function (letter) {
        letter.classList.toggle('hide');
        letter.previousSibling.classList.toggle('hide');
      });
      this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
    }
  }, {
    key: "handleShiftRight",
    value: function handleShiftRight(evt, id) {
      evt.preventDefault();
      if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;
      document.getElementById(id).classList.toggle('key-pressed');
      this.keyLetters.forEach(function (letter) {
        return letter.classList.toggle('uppercase-on');
      });
      this.onShiftKeys.forEach(function (letter) {
        letter.classList.toggle('hide');
        letter.previousSibling.classList.toggle('hide');
      });
      this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
    }
  }, {
    key: "handleBackspace",
    value: function handleBackspace(evt, id) {
      this.textarea.focus();
      if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;
      document.getElementById(id).classList.toggle('key-pressed');
      this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
    }
  }, {
    key: "handleControl",
    value: function handleControl(evt, id) {
      evt.preventDefault();

      if (evt.ctrlKey && evt.altKey && evt.type !== 'keyup') {
        this.keyLettersEn.forEach(function (letter) {
          letter.classList.toggle('hide-lang-change');
        });
        this.keyLettersRu.forEach(function (letter) {
          if (letter.previousSibling.classList.contains('behave-on-shift')) {
            var _letter$previousSibli;

            (_letter$previousSibli = letter.previousSibling) === null || _letter$previousSibli === void 0 ? void 0 : _letter$previousSibli.classList.toggle('hide-lang-change');
          }

          letter.classList.toggle('hide');
        });
      }

      if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;
      document.getElementById(id).classList.toggle('key-pressed');
      this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
    }
  }, {
    key: "handleTab",
    value: function handleTab(evt, id) {
      evt.preventDefault();
      if (evt.type !== 'keyup') this.changeTextareaValue('\t');
      if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;
      document.getElementById(id).classList.toggle('key-pressed');
      this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
    }
  }, {
    key: "handleSpace",
    value: function handleSpace(evt, id) {
      evt.preventDefault();

      if ((evt.altKey || evt.tabtKey) && evt.type === 'keydown') {
        this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
        this.textarea.focus();
        return;
      }

      if (evt.type !== 'keyup') this.changeTextareaValue(' ');
      if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;
      document.getElementById(id).classList.toggle('key-pressed');
      this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
    }
  }, {
    key: "handleArrow",
    value: function handleArrow(evt, id) {
      if (evt.type !== 'keyup') {
        this.textarea.focus();
      }

      if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;
      document.getElementById(id).classList.toggle('key-pressed');
      this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
    }
  }, {
    key: "handleAltLeft",
    value: function handleAltLeft(evt, id) {
      evt.preventDefault();
      if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;
      document.getElementById(id).classList.toggle('key-pressed');

      if (evt.ctrlKey && evt.altKey && evt.type !== 'keyup') {
        this.keyLettersEn.forEach(function (letter) {
          letter.classList.toggle('hide-lang-change');
        });
        this.keyLettersRu.forEach(function (letter) {
          if (letter.previousSibling.classList.contains('behave-on-shift')) {
            var _letter$previousSibli2;

            (_letter$previousSibli2 = letter.previousSibling) === null || _letter$previousSibli2 === void 0 ? void 0 : _letter$previousSibli2.classList.toggle('hide-lang-change');
          }

          letter.classList.toggle('hide');
        });
      }

      this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
    }
  }, {
    key: "handleAltRight",
    value: function handleAltRight(evt, id) {
      evt.preventDefault();

      if (evt.shiftKey && evt.altKey && evt.type === 'keyup') {
        document.getElementById('ControlLeft').classList.remove('key-pressed');
      }

      if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;
      document.getElementById(id).classList.toggle('key-pressed');
      this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
    }
  }, {
    key: "handleMetaLeft",
    value: function handleMetaLeft(evt, id) {
      evt.preventDefault();
      if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;
      document.getElementById(id).classList.toggle('key-pressed');
      this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
    }
  }, {
    key: "handleEnter",
    value: function handleEnter(evt, id) {
      evt.preventDefault();
      document.getElementById(id).classList.toggle('key-pressed');
      if (evt.type === 'keyup') return;
      this.changeTextareaValue('\n');
    }
  }, {
    key: "handleDefault",
    value: function handleDefault(evt, id) {
      evt.preventDefault();
      if (this.keys.get(id) === undefined) return;
      if (evt.type !== 'keyup') this.changeTextareaValue(this.getInputValue(evt, id));
      if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;
      document.getElementById(id).classList.toggle('key-pressed');
      this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
    }
  }, {
    key: "getInputValue",
    value: function getInputValue(evt, id) {
      var parentNode = document.getElementById(id);
      var symbol = '';

      for (var i = 0; i < parentNode.children.length; i += 1) {
        if (!parentNode.children[i].classList.contains('hide') && !parentNode.children[i].classList.contains('hide-lang-change')) {
          symbol = parentNode.children[i].innerHTML;
          break;
        }
      }

      console.log(this.keys.get('CapsLock').keyPressed);

      if (this.keys.get('ShiftLeft').keyPressed || this.keys.get('ShiftRight').keyPressed || this.capsLock) {
        return symbol.toUpperCase();
      }

      return symbol;
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(evt, id) {
      this.textarea.focus();
      if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;
      document.getElementById(id).classList.toggle('key-pressed');
      this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
    }
  }, {
    key: "changeTextareaValue",
    value: function changeTextareaValue(input) {
      this.textarea.setRangeText(input, this.textarea.selectionStart, this.textarea.selectionEnd, 'end');
      this.textarea.focus();
    }
  }, {
    key: "init",
    value: function init() {
      document.body.innerHTML += this.HtmlBuilder.build('div', 'keyboard', ' ');
      var wrapper = document.querySelector('.keyboard');
      wrapper.innerHTML += this.HtmlBuilder.build('h1', 'rss-title', 'RSS Virtual Keyboard');
      wrapper.innerHTML += this.HtmlBuilder.build('textarea', 'keyboard-textarea', '', '', 'single');

      for (var row = 0; row < this.keysData.length; row += 1) {
        this.createKeysByRow(this.keysData[row], row);
      }

      wrapper.innerHTML += this.getHTML();
      this.keyLetters = document.querySelectorAll('.letter-key');
      this.keyLettersEn = document.querySelectorAll('.letter-en');
      this.keyLettersRu = document.querySelectorAll('.letter-ru');
      this.onShiftKeys = document.querySelectorAll('.behave-on-shift');
      document.addEventListener('keydown', this.handelEvent);
      document.addEventListener('keyup', this.handelEvent);
      document.addEventListener('mousedown', this.handleMouseEvent);
      document.addEventListener('mouseup', this.handleMouseEvent);
      this.textarea = document.querySelector('.keyboard-textarea');
      this.textarea.focus();
    }
  }]);

  return Keyboard;
}();

var keyboard = new Keyboard((0,_KeysData__WEBPACK_IMPORTED_MODULE_2__["default"])());
keyboard.init();

/***/ }),

/***/ "./src/js/KeysData.js":
/*!****************************!*\
  !*** ./src/js/KeysData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeysData)
/* harmony export */ });
/* eslint-disable */
// prettier-ignore

/*
 * 	В данном файле содержатся сырые данные, для их лучшего отображения и избегания прокидывания ESlint-ом
 *	ошибок, я решил экранировать его от проверок
 */
function KeysData() {
  return [[{
    en: '`',
    shift: '~',
    id: 'Backquote',
    ru: 'ё',
    classes: 'letter-key'
  }, {
    en: '1',
    shift: '!',
    id: 'Digit1',
    classes: 'digit'
  }, {
    en: '2',
    shift: '@',
    id: 'Digit2',
    classes: 'digit'
  }, {
    en: '3',
    shift: '#',
    id: 'Digit3',
    classes: 'digit'
  }, {
    en: '4',
    shift: '$',
    id: 'Digit4',
    classes: 'digit'
  }, {
    en: '5',
    shift: '%',
    id: 'Digit5',
    classes: 'digit'
  }, {
    en: '6',
    shift: ':',
    id: 'Digit6',
    classes: 'digit'
  }, {
    en: '7',
    shift: '?',
    id: 'Digit7',
    classes: 'digit'
  }, {
    en: '8',
    shift: '*',
    id: 'Digit8',
    classes: 'digit'
  }, {
    en: '9',
    shift: '(',
    id: 'Digit9',
    classes: 'digit'
  }, {
    en: '0',
    shift: ')',
    id: 'Digit0',
    classes: 'digit'
  }, {
    en: '-',
    shift: '_',
    id: 'Minus',
    classes: 'digit'
  }, {
    en: '=',
    shift: '+',
    id: 'Equal',
    classes: 'digit'
  }, {
    en: 'Backspace',
    id: 'Backspace',
    classes: 'key-backspace'
  }], [{
    en: 'Tab',
    id: 'Tab',
    classes: 'key-tab'
  }, {
    en: 'q',
    ru: 'й',
    id: 'KeyQ',
    classes: 'letter-key'
  }, {
    en: 'w',
    ru: 'ц',
    id: 'KeyW',
    classes: 'letter-key'
  }, {
    en: 'e',
    ru: 'у',
    id: 'KeyE',
    classes: 'letter-key'
  }, {
    en: 'r',
    ru: 'к',
    id: 'KeyR',
    classes: 'letter-key'
  }, {
    en: 't',
    ru: 'е',
    id: 'KeyT',
    classes: 'letter-key'
  }, {
    en: 'y',
    ru: 'н',
    id: 'KeyY',
    classes: 'letter-key'
  }, {
    en: 'u',
    ru: 'г',
    id: 'KeyU',
    classes: 'letter-key'
  }, {
    en: 'i',
    ru: 'ш',
    id: 'KeyI',
    classes: 'letter-key'
  }, {
    en: 'o',
    ru: 'щ',
    id: 'KeyO',
    classes: 'letter-key'
  }, {
    en: 'p',
    ru: 'з',
    id: 'KeyP',
    classes: 'letter-key'
  }, {
    en: '[',
    shift: '{',
    ru: 'х',
    id: 'BracketLeft',
    classes: 'letter-key'
  }, {
    en: ']',
    shift: '}',
    ru: 'ъ',
    id: 'BracketRight',
    classes: 'letter-key'
  }, {
    en: '\\',
    shift: '\|',
    ru: '/',
    id: 'Backslash',
    classes: 'letter-key'
  }, {
    en: 'DEL',
    id: 'Delete',
    classes: 'key-del'
  }], [{
    en: 'Caps Lock',
    id: 'CapsLock',
    classes: 'key-caps'
  }, {
    en: 'a',
    ru: 'ф',
    id: 'KeyA',
    classes: 'letter-key'
  }, {
    en: 's',
    ru: 'ы',
    id: 'KeyS',
    classes: 'letter-key'
  }, {
    en: 'd',
    ru: 'в',
    id: 'KeyD',
    classes: 'letter-key'
  }, {
    en: 'f',
    ru: 'а',
    id: 'KeyF',
    classes: 'letter-key'
  }, {
    en: 'g',
    ru: 'п',
    id: 'KeyG',
    classes: 'letter-key'
  }, {
    en: 'h',
    ru: 'р',
    id: 'KeyH',
    classes: 'letter-key'
  }, {
    en: 'j',
    ru: 'о',
    id: 'KeyJ',
    classes: 'letter-key'
  }, {
    en: 'k',
    ru: 'л',
    id: 'KeyK',
    classes: 'letter-key'
  }, {
    en: 'l',
    ru: 'д',
    id: 'KeyL',
    classes: 'letter-key'
  }, {
    en: ';',
    ru: 'ж',
    id: 'Semicolon',
    classes: 'letter-key'
  }, {
    en: "'",
    ru: 'э',
    id: 'Quote',
    classes: 'letter-key'
  }, {
    en: 'Enter',
    id: 'Enter',
    classes: 'key-enter'
  }], [{
    en: 'Shift',
    id: 'ShiftLeft',
    classes: 'key-shift'
  }, {
    en: 'z',
    ru: 'я',
    id: 'KeyZ',
    classes: 'letter-key'
  }, {
    en: 'x',
    ru: 'ч',
    id: 'KeyX',
    classes: 'letter-key'
  }, {
    en: 'c',
    ru: 'с',
    id: 'KeyC',
    classes: 'letter-key'
  }, {
    en: 'v',
    ru: 'м',
    id: 'KeyV',
    classes: 'letter-key'
  }, {
    en: 'b',
    ru: 'и',
    id: 'KeyB',
    classes: 'letter-key'
  }, {
    en: 'n',
    ru: 'т',
    id: 'KeyN',
    classes: 'letter-key'
  }, {
    en: 'm',
    ru: 'ь',
    id: 'KeyM',
    classes: 'letter-key'
  }, {
    en: ',',
    ru: 'ю',
    id: 'Comma',
    classes: 'letter-key'
  }, {
    en: '.',
    ru: 'б',
    id: 'Period',
    classes: 'letter-key'
  }, {
    en: '/',
    ru: '.',
    id: 'Slash',
    classes: 'letter-key'
  }, {
    en: '↑',
    id: 'ArrowUp',
    classes: 'key-arrow-up'
  }, {
    en: 'Shift',
    id: 'ShiftRight',
    classes: 'key-shift'
  }], [{
    en: 'Ctrl',
    id: 'ControlLeft',
    classes: 'key-ctrl'
  }, {
    en: 'Win',
    id: 'MetaLeft',
    classes: 'key-win'
  }, {
    en: 'Alt',
    id: 'AltLeft',
    classes: 'key-alt'
  }, {
    en: '',
    id: 'Space',
    classes: 'key-space'
  }, {
    en: 'Alt',
    id: 'AltRight',
    classes: 'key-alt'
  }, {
    en: 'Ctrl',
    id: 'ControlRight',
    classes: 'key-ctrl'
  }, {
    en: '←',
    id: 'ArrowLeft',
    classes: 'key-arrow-left'
  }, {
    en: '↓',
    id: 'ArrowDown',
    classes: 'key-arrow-down'
  }, {
    en: '→',
    id: 'ArrowRight',
    classes: 'key-arrow-right'
  }]];
}
/* eslint-disable */

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".keyboard {\n  width: 900px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.keyboard-textarea {\n  border-radius: 3px;\n  padding: 10px;\n  resize: none;\n  outline: none;\n  font-size: 16px;\n  letter-spacing: 0.05rem;\n  height: 200px;\n  margin-bottom: 20px;\n  white-space: pre-wrap;\n}\n.keyboard-textarea::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n  background: none;\n}\n.keyboard-textarea::-webkit-scrollbar-thumb {\n  background-color: rgb(53, 84, 239);\n  height: 5px;\n  border-radius: 2px;\n}\n\n.row-wrap {\n  display: flex;\n  gap: 8px;\n}\n.row:last-child {\n  width: 810px;\n}\n\n.key {\n  flex: 1;\n  min-width: 48px;\n  position: relative;\n  user-select: none;\n  text-align: center;\n  padding: 15px;\n  color: white;\n  font-weight: 500;\n  border-radius: 3px;\n  background-color: rgb(80, 82, 91);\n  transition: 0.1s ease-out;\n}\n.key:hover {\n  cursor: pointer;\n  background-color: rgba(28, 43, 116, 0.686);\n  color: white;\n}\n.key:nth-child(7) .digit-back {\n  top: 0;\n  font-size: 16px;\n}\n\n.key-space {\n  flex: 100%;\n}\n\n.hide {\n  display: none;\n}\n\n.hide-lang-change {\n  display: none;\n}\n\n.key-tab,\n.key-del,\n.key-backspace,\n.key-caps,\n.key-shift,\n.key-enter {\n  flex: 100%;\n}\n\n.key-tab,\n.key-del,\n.key-backspace,\n.key-caps,\n.key-shift,\n.key-enter,\n.key-ctrl,\n.key-win,\n.key-alt,\n.key-space,\n.key-arrow-up,\n.key-arrow-down,\n.key-arrow-right,\n.key-arrow-left {\n  background-color: rgb(53, 54, 66);\n  color: rgb(217, 217, 217);\n}\n\n.key-ctrl,\n.key-win,\n.key-alt {\n  min-width: 60px;\n}\n\n.caps-highlight,\n.key-pressed {\n  background-color: rgb(53, 84, 239);\n  color: white;\n  transform: scale(0.95);\n}\n.caps-highlight:hover,\n.key-pressed:hover {\n  cursor: pointer;\n  background-color: rgb(53, 84, 239);\n}\n\n.caps-highlight::before {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.uppercase-on {\n  text-transform: uppercase;\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px;\n}\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}", "",{"version":3,"sources":["webpack://./src/scss/components/_keyboard.scss","webpack://./src/scss/index.scss"],"names":[],"mappings":"AAAA;EACC,YAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;ACCD;ADCC;EACC,kBAAA;EACM,aAAA;EACN,YAAA;EACA,aAAA;EACM,eAAA;EACN,uBAAA;EACA,aAAA;EAeA,mBAAA;EACA,qBAAA;ACbF;ADAQ;EACI,UAAA;EACT,WAAA;EACS,gBAAA;ACEZ;ADCQ;EACI,kCAAA;EACT,WAAA;EACS,kBAAA;ACCZ;;ADQC;EACC,aAAA;EACA,QAAA;ACLF;ADOC;EACC,YAAA;ACLF;;ADSA;EACC,OAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EAMA,iCAAA;EAOA,yBAAA;ACjBD;ADKC;EACC,eAAA;EACA,0CAAA;EACA,YAAA;ACHF;ADOE;EACC,MAAA;EACA,eAAA;ACLH;;ADWA;EACC,UAAA;ACRD;;ADWA;EACC,aAAA;ACRD;;ADWA;EACC,aAAA;ACRD;;ADWA;;;;;;EAMC,UAAA;ACRD;;ADWA;;;;;;;;;;;;;;EAcC,iCAAA;EACA,yBAAA;ACRD;;ADWA;;;EAGC,eAAA;ACRD;;ADWA;;EAEC,kCAAA;EACA,YAAA;EACA,sBAAA;ACRD;ADSC;;EACC,eAAA;EACA,kCAAA;ACNF;;ADUA;EACC,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,uBAAA;ACPD;;ADUA;EACC,yBAAA;ACPD;;AA/HA;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yCAAA;EACA,eAAA;AAkID;;AA/HA;;;EAGC,sBAAA;AAkID","sourcesContent":[".keyboard {\n\twidth: 900px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\n\t&-textarea {\n\t\tborder-radius: 3px;\n        padding: 10px;\n\t\tresize: none;\n\t\toutline: none;\n        font-size: 16px;\n\t\tletter-spacing: .05rem;\n\t\theight: 200px;\n\n\n        &::-webkit-scrollbar {\n            width: 5px;\n\t\t\theight: 5px;\n            background: none;\n        }\n\n        &::-webkit-scrollbar-thumb {\n            background-color: rgb(53, 84, 239);\n\t\t\theight: 5px;\n            border-radius: 2px;\n        }\n\n\t\tmargin-bottom: 20px;\n\t\twhite-space: pre-wrap;\n\t}\n}\n\n.row {\n\t&-wrap {\n\t\tdisplay: flex;\n\t\tgap: 8px;\n\t}\n\t&:last-child {\n\t\twidth: 810px;\n\t}\n}\n\n.key {\n\tflex: 1;\n\tmin-width: 48px;\n\tposition: relative;\n\tuser-select: none;\n\ttext-align: center;\n\tpadding:  15px;\n\tcolor: white;\n\tfont-weight: 500;\n\tborder-radius: 3px;\n\t&:hover {\n\t\tcursor: pointer;\n\t\tbackground-color: rgba(28, 43, 116, 0.686);\n\t\tcolor: white;\n\t}\n\tbackground-color: rgb(80, 82, 91);\n\t&:nth-child(7) {\n\t\t.digit-back {\n\t\t\ttop: 0;\n\t\t\tfont-size: 16px;\n\t\t}\n\t}\n\ttransition: .1s ease-out;\n}\n\n.key-space {\n\tflex: 100%;\n}\n\n.hide {\n\tdisplay: none;\n}\n\n.hide-lang-change {\n\tdisplay: none;\n}\n\n.key-tab,\n.key-del,\n.key-backspace,\n.key-caps,\n.key-shift,\n.key-enter  {\n\tflex: 100%;\n}\n\n.key-tab,\n.key-del,\n.key-backspace,\n.key-caps,\n.key-shift,\n.key-enter,\n.key-ctrl,\n.key-win,\n.key-alt,\n.key-space,\n.key-arrow-up,\n.key-arrow-down,\n.key-arrow-right,\n.key-arrow-left {\n\tbackground-color: rgb(53, 54, 66);\n\tcolor: rgb(217, 217, 217); \n}\n\n.key-ctrl,\n.key-win,\n.key-alt {\n\tmin-width: 60px;\n}\n\n.caps-highlight,\n.key-pressed {\n\tbackground-color: rgb(53, 84, 239);\n\tcolor: white;\n\ttransform: scale(0.95);\n\t&:hover {\n\t\tcursor: pointer;\n\t\tbackground-color: rgb(53, 84, 239);\n\t}\n}\n\n.caps-highlight::before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 8px;\n\tright: 8px;\n\twidth: 5px;\n\theight: 5px;\n\tborder-radius: 50%;\n\tbackground-color: white;\n}\n\n.uppercase-on {\n\ttext-transform: uppercase;\n}\n","@import \"./components/keyboard\";\n\nbody {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tfont-size: 16px;\n}\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _js_Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Keyboard */ "./src/js/Keyboard.js");


})();

/******/ })()
;
//# sourceMappingURL=bundlea76538e9beb03b0fd646.js.map