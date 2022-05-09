import HtmlBuilder from './HtmlBuilder';
import Key from './Key';
import KeysData from './KeysData';

class Keyboard {
  constructor(keysData) {
    this.structure = '';
    this.strotherHtmlucutre = '';
    this.textarea = null;
    this.keysData = keysData;
    this.keys = new Map();
    this.HtmlBuilder = new HtmlBuilder();

    this.handelEvent = this.handelEvent.bind(this);
    this.handleCapsLock = this.handleCapsLock.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.handleShiftRight = this.handleShiftRight.bind(this);
    this.handleShiftLeft = this.handleShiftLeft.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.handleCapsLock = this.handleCapsLock.bind(this);
    this.handleDefault = this.handleDefault.bind(this);
    // this.handleArrow = this.handleArrow.bind(this);
  }

  createKeysByRow(row, rowNum) {
    for (let i = 0; i < row.length; i += 1) {
      this.keys.set(row[i].id, new Key(row[i], rowNum));
    }
  }

  getHTML() {
    let currRow = 0;
    let rowLayout = '';
    let keysLayout = '';

    for (const key of this.keys.values()) {
      if (currRow !== key.row) {
        keysLayout += this.HtmlBuilder.build('div', 'row row-wrap', rowLayout);
        rowLayout = '';
        currRow += 1;
      }
      rowLayout += key.getHTML();
    }

    keysLayout += this.HtmlBuilder.build('div', 'row row-wrap', rowLayout);
    return keysLayout;
  }

  handelEvent(evt) {
    switch (evt.code) {
      case 'CapsLock':
        this.handleCapsLock(evt);
        break;
      case 'ShiftLeft':
        this.handleShiftLeft(evt);
        break;
      case 'ShiftRight':
        this.handleShiftRight(evt);
        break;
      case 'Backspace':
        this.handleBackspace(evt);
        break;
      case 'Tab':
        this.handleTab(evt);
        break;
      case 'Space':
        this.handleSpace(evt);
        break;
      case 'Enter':
        this.handleEnter(evt);
        break;
      case 'AltLeft':
        this.handleAltLeft(evt);
        break;
      case 'AltRight':
        this.handleAltRight(evt);
        break;
      case 'ControlLeft':
        this.handleControl(evt);
        break;
      case 'ControlRight':
        this.handleControl(evt);
        break;
      case 'ArrowUp':
        this.handleArrow(evt);
        break;
      case 'ArrowDown':
        this.handleArrow(evt);
        break;
      case 'ArrowLeft':
        this.handleArrow(evt);
        break;
      case 'ArrowRight':
        this.handleArrow(evt);
        break;
      case 'Delete':
        this.handleDelete(evt);
        break;
      default:
        this.handleDefault(evt);
        break;
    }
  }

  handleCapsLock(evt) {
    evt.stopPropagation();
    if (evt.type === 'keyup') return;

    document.getElementById(evt.code).classList.toggle('caps-highlight');
    this.keyLetters.forEach((letter) => letter.classList.toggle('uppercase-on'));
    this.keys.get(evt.code).keyPressed = !this.keys.get(evt.code).keyPressed;
  }

  handleShiftLeft(evt) {
    evt.preventDefault();

    if (this.keys.get(evt.code).keyPressed && evt.type === 'keydown') return;

    document.getElementById(evt.code).classList.toggle('key-pressed');
    this.keyLetters.forEach((letter) => letter.classList.toggle('uppercase-on'));
    this.onShiftKeys.forEach((letter) => {
      letter.classList.toggle('hide');
      letter.previousSibling.classList.toggle('hide');
    });

    this.keys.get(evt.code).keyPressed = !this.keys.get(evt.code).keyPressed;
  }

  handleShiftRight(evt) {
    evt.preventDefault();

    if (this.keys.get(evt.code).keyPressed && evt.type === 'keydown') return;

    document.getElementById(evt.code).classList.toggle('key-pressed');
    this.keyLetters.forEach((letter) => letter.classList.toggle('uppercase-on'));
    this.onShiftKeys.forEach((letter) => {
      letter.classList.toggle('hide');
      letter.previousSibling.classList.toggle('hide');
    });

    this.keys.get(evt.code).keyPressed = !this.keys.get(evt.code).keyPressed;
  }

  handleBackspace(evt) {
    this.textarea.focus();

    if (this.keys.get(evt.code).keyPressed && evt.type === 'keydown') return;

    document.getElementById(evt.code).classList.toggle('key-pressed');
    this.keys.get(evt.code).keyPressed = !this.keys.get(evt.code).keyPressed;
  }

  handleControl(evt) {
    evt.preventDefault();

    if (evt.ctrlKey && evt.altKey && evt.type !== 'keyup') {
      this.keyLettersEn.forEach((letter) => {
        letter.classList.toggle('hide-lang-change');
        letter.classList.toggle('input-visible');
      });
      this.keyLettersRu.forEach((letter) => {
        if (letter.previousSibling.classList.contains('behave-on-shift')) {
          letter.previousSibling?.classList.toggle('hide-lang-change');
        }
        letter.classList.toggle('hide');
      });
      // this.onShiftKeys.forEach((letter) => {
      //   if (letter.previousSibling.classList.contains('behave-on-shift')) {
      //     letter.previousSibling?.classList.toggle('input-visible');
      //   }
      // });
    }

    if (this.keys.get(evt.code).keyPressed && evt.type === 'keydown') return;

    document.getElementById(evt.code).classList.toggle('key-pressed');
    this.keys.get(evt.code).keyPressed = !this.keys.get(evt.code).keyPressed;
  }

  handleTab(evt) {
    evt.preventDefault();
    // if (evt.altKey && evt.tabKey && evt.type === 'keydown') return;
    if (evt.type !== 'keyup') this.changeTextareaValue('\t');
    if (this.keys.get(evt.code).keyPressed && evt.type === 'keydown') return;

    document.getElementById(evt.code).classList.toggle('key-pressed');
    this.keys.get(evt.code).keyPressed = !this.keys.get(evt.code).keyPressed;
  }

  handleSpace(evt) {
    evt.preventDefault();

    if ((evt.altKey || evt.tabtKey) && evt.type === 'keydown') {
      this.keys.get(evt.code).keyPressed = !this.keys.get(evt.code).keyPressed;
      return;
    }

    if (evt.type !== 'keyup') this.changeTextareaValue(evt.key);
    if (this.keys.get(evt.code).keyPressed && evt.type === 'keydown') return;

    document.getElementById(evt.code).classList.toggle('key-pressed');
    this.keys.get(evt.code).keyPressed = !this.keys.get(evt.code).keyPressed;
  }

  handleArrow(evt) {
    if (evt.type !== 'keyup') {
      this.textarea.focus();
    }

    if (this.keys.get(evt.code).keyPressed && evt.type === 'keydown') return;

    document.getElementById(evt.code).classList.toggle('key-pressed');
    this.keys.get(evt.code).keyPressed = !this.keys.get(evt.code).keyPressed;
  }

  handleAltLeft(evt) {
    evt.preventDefault();

    if (this.keys.get(evt.code).keyPressed && evt.type === 'keydown') return;
    document.getElementById(evt.code).classList.toggle('key-pressed');

    if (evt.ctrlKey && evt.altKey && evt.type !== 'keyup') {
      this.keyLettersEn.forEach((letter) => {
        letter.classList.toggle('hide-lang-change');
      });
      this.keyLettersRu.forEach((letter) => {
        if (letter.previousSibling.classList.contains('behave-on-shift')) {
          letter.previousSibling?.classList.toggle('hide-lang-change');
        }
        letter.classList.toggle('hide');
      });
    }

    this.keys.get(evt.code).keyPressed = !this.keys.get(evt.code).keyPressed;
  }

  handleAltRight(evt) {
    evt.preventDefault();

    if (evt.shiftKey && evt.altKey && evt.type === 'keyup') {
      document.getElementById('ControlLeft').classList.remove('key-pressed');
    }

    if (this.keys.get(evt.code).keyPressed && evt.type === 'keydown') return;

    document.getElementById(evt.code).classList.toggle('key-pressed');
    this.keys.get(evt.code).keyPressed = !this.keys.get(evt.code).keyPressed;
  }

  handleEnter(evt) {
    evt.preventDefault();

    document.getElementById(evt.code).classList.toggle('key-pressed');

    if (evt.type === 'keyup') return;
    this.changeTextareaValue('\n');
  }

  handleDefault(evt) {
    evt.preventDefault();

    if (this.keys.get(evt.code) === undefined) return;
    if (evt.type !== 'keyup') this.changeTextareaValue(this.getInputValue(evt));
    if (this.keys.get(evt.code).keyPressed && evt.type === 'keydown') return;

    document.getElementById(evt.code).classList.toggle('key-pressed');
    this.keys.get(evt.code).keyPressed = !this.keys.get(evt.code).keyPressed;
  }

  getInputValue(evt) {
    const parentNode = document.getElementById(evt.code);
    let symbol = '';

    for (let i = 0; i < parentNode.children.length; i += 1) {
      if (
        !parentNode.children[i].classList.contains('hide') &&
        !parentNode.children[i].classList.contains('hide-lang-change')
      ) {
        symbol = parentNode.children[i].innerHTML;
        break;
      }
    }

    if (evt.shiftKey || this.keys.get('CapsLock').keyPressed) {
      return symbol.toUpperCase();
    }
    return symbol;
  }

  handleDelete(evt) {
    this.textarea.focus();

    if (this.keys.get(evt.code).keyPressed && evt.type === 'keydown') return;

    document.getElementById(evt.code).classList.toggle('key-pressed');
    this.keys.get(evt.code).keyPressed = !this.keys.get(evt.code).keyPressed;
  }

  changeTextareaValue(input) {
    this.textarea.setRangeText(
      input,
      this.textarea.selectionStart,
      this.textarea.selectionEnd,
      'end',
    );
    this.textarea.focus();
  }

  init() {
    document.body.innerHTML += this.HtmlBuilder.build('div', 'keyboard', ' ');

    const wrapper = document.querySelector('.keyboard');

    wrapper.innerHTML += this.HtmlBuilder.build(
      'h1',
      'rss-title',
      'RSS Virtual Keyboard',
    );

    wrapper.innerHTML += this.HtmlBuilder.build(
      'textarea',
      'keyboard-textarea',
      '',
      '',
      'single',
    );

    for (let row = 0; row < this.keysData.length; row += 1) {
      this.createKeysByRow(this.keysData[row], row);
    }

    wrapper.innerHTML += this.getHTML();

    // document.querySelectorAll('.key').forEach((key) => {
    //   key.addEventListener('click', this.handleClick);
    // });

    this.keyLetters = document.querySelectorAll('.letter-key');
    this.keyLettersEn = document.querySelectorAll('.letter-en');
    this.keyLettersRu = document.querySelectorAll('.letter-ru');
    this.onShiftKeys = document.querySelectorAll('.behave-on-shift');

    document.addEventListener('keydown', this.handelEvent);
    document.addEventListener('keyup', this.handelEvent);

    this.textarea = document.querySelector('.keyboard-textarea');
    this.textarea.focus();
  }
}

const keyboard = new Keyboard(KeysData());
keyboard.init();
