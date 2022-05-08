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
    this.handleShift = this.handleShift.bind(this);
    // this.handleBackspace = this.handleBackspace.bind(this);
    this.handleCapsLock = this.handleCapsLock.bind(this);
    this.handleDefault = this.handleDefault.bind(this);
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
        this.handleShift(evt);
        break;
      case 'ShiftRight':
        this.handleShift(evt);
        break;
      case 'Backspace':
        this.handleBackspace(evt);
        break;
      case 'Tab':
        this.handleTab(evt);
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
  }

  handleShift(evt) {
    evt.stopPropagation();

    if (evt.type === 'keydown' && !this.keyPressed) return;

    document.getElementById(evt.code).classList.toggle('key-pressed');
    this.keyLetters.forEach((letter) => letter.classList.toggle('uppercase-on'));
    this.onShiftKeys.forEach((letter) => {
      letter.classList.toggle('hide');
      letter.previousSibling.classList.toggle('hide');
    });

    this.keyPressed = !this.keyPressed;
  }

  // handleBackspace(evt) {
  //   console.log(this.lang, evt.code);
  //   // evt.stopPropagation();
  // }

  handleTab(evt) {
    evt.preventDefault();
    document.getElementById(evt.code).classList.toggle('key-pressed');
    this.textarea.value += '     ';
  }

  handleDefault(evt) {
    evt.stopPropagation();

    document.getElementById(evt.code).classList.toggle('key-pressed');
    this.textarea.value += evt.key;
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
    this.onShiftKeys = document.querySelectorAll('.on-shift');

    document.addEventListener('keydown', this.handelEvent);
    document.addEventListener('keyup', this.handelEvent);

    this.textarea = document.querySelector('.keyboard-textarea');
    this.textarea.focus();
  }
}

const keyboard = new Keyboard(KeysData());
keyboard.init();
