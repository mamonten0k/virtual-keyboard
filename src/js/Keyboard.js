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
    this.currId = '';
    this.capsLock = false;

    this.init = this.init.bind(this);
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
    this.onLanguageChange = this.onLanguageChange.bind(this);
  }

  handelEvent(evt) {
    console.log(JSON.stringify(evt));
    const { code: id } = evt;
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

  handleMouseEvent(evt) {
    this.textarea.focus();

    if (evt.target.id !== '' && evt.type === 'mousedown') {
      this.currId = evt.target.id.replace(/\s/g, '');
    } else if (evt.type === 'mousedown') {
      this.currId = evt.target.parentNode.id.replace(/\s/g, '');
    }
    if (evt.type === 'mousedown') {
      this.handelEvent(
        new KeyboardEvent('keydown', { code: this.currId, key: this.currId }),
      );
    } else {
      this.handelEvent(
        new KeyboardEvent('keyup', { code: this.currId, key: this.currId }),
      );
    }
  }

  handleCapsLock(evt, id) {
    evt.stopPropagation();

    if (evt.type === 'keyup') {
      this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
      return;
    }

    if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;

    document.getElementById(id).classList.toggle('caps-highlight');
    this.keyLetters.forEach((letter) => letter.classList.toggle('uppercase-on'));
    this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
    this.capsLock = !this.capsLock;
  }

  handleShiftLeft(evt, id) {
    evt.preventDefault();

    if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;

    document.getElementById(id).classList.toggle('key-pressed');
    this.keyLetters.forEach((letter) => letter.classList.toggle('uppercase-on'));
    this.onShiftKeys.forEach((letter) => {
      letter.classList.toggle('hide');
      letter.previousSibling.classList.toggle('hide');
    });

    this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
  }

  handleShiftRight(evt, id) {
    evt.preventDefault();

    if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;

    document.getElementById(id).classList.toggle('key-pressed');
    this.keyLetters.forEach((letter) => letter.classList.toggle('uppercase-on'));
    this.onShiftKeys.forEach((letter) => {
      letter.classList.toggle('hide');
      letter.previousSibling.classList.toggle('hide');
    });

    this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
  }

  handleBackspace(evt, id) {
    this.textarea.focus();

    if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;

    document.getElementById(id).classList.toggle('key-pressed');
    this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
  }

  handleControl(evt, id) {
    evt.preventDefault();

    if (evt.ctrlKey && evt.altKey && evt.type !== 'keyup') {
      this.onLanguageChange();
    }

    if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;

    document.getElementById(id).classList.toggle('key-pressed');
    this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
  }

  handleTab(evt, id) {
    evt.preventDefault();

    if (evt.type !== 'keyup') this.changeTextareaValue('\t');
    if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;

    document.getElementById(id).classList.toggle('key-pressed');
    this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
  }

  handleSpace(evt, id) {
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

  handleArrow(evt, id) {
    if (evt.type !== 'keyup') {
      this.textarea.focus();
    }

    if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;

    document.getElementById(id).classList.toggle('key-pressed');
    this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
  }

  handleAltLeft(evt, id) {
    evt.preventDefault();

    if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;
    document.getElementById(id).classList.toggle('key-pressed');

    if (evt.ctrlKey && evt.altKey && evt.type !== 'keyup') {
      this.onLanguageChange();
    }

    this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
  }

  handleAltRight(evt, id) {
    evt.preventDefault();

    if (evt.shiftKey && evt.altKey && evt.type === 'keyup') {
      document.getElementById('ControlLeft').classList.remove('key-pressed');
    }

    if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;

    document.getElementById(id).classList.toggle('key-pressed');
    this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
  }

  handleMetaLeft(evt, id) {
    evt.preventDefault();

    if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;

    document.getElementById(id).classList.toggle('key-pressed');
    this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
  }

  handleEnter(evt, id) {
    evt.preventDefault();

    document.getElementById(id).classList.toggle('key-pressed');

    if (evt.type === 'keyup') return;
    this.changeTextareaValue('\n');
  }

  handleDefault(evt, id) {
    evt.preventDefault();

    if (this.keys.get(id) === undefined) return;
    if (evt.type !== 'keyup') this.changeTextareaValue(this.getInputValue(evt, id));
    if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;

    document.getElementById(id).classList.toggle('key-pressed');
    this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
  }

  getInputValue(evt, id) {
    const parentNode = document.getElementById(id);
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
    if (
      this.keys.get('ShiftLeft').keyPressed ||
      this.keys.get('ShiftRight').keyPressed ||
      this.capsLock
    ) {
      return symbol.toUpperCase();
    }
    return symbol;
  }

  handleDelete(evt, id) {
    this.textarea.focus();

    if (this.keys.get(id).keyPressed && evt.type === 'keydown') return;

    document.getElementById(id).classList.toggle('key-pressed');
    this.keys.get(id).keyPressed = !this.keys.get(id).keyPressed;
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

  onLanguageChange(type) {
    console.log(localStorage.lang, type);
    if (type !== 'ON_PAGE_RELOAD') {
      localStorage.lang = localStorage.lang === 'en' ? 'ru' : 'en';
      console.log(localStorage.lang, type);
    }

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

  init() {
    document.body.innerHTML += this.HtmlBuilder.build('div', 'keyboard', ' ');

    const wrapper = document.querySelector('.keyboard');

    wrapper.innerHTML += this.HtmlBuilder.build(
      'h1',
      'rss-title',
      'RSS Virtual Keyboard',
    );

    wrapper.innerHTML += this.HtmlBuilder.build(
      'div',
      'rss-description',
      `Смена языка: <b>LeftCtrl+LeftAlt</b>. Трабл с залипанием <b>Ctrl</b> при клацании <b>Alt</b> и <b>Shift</b> (любых, но одновременно) - не баг, а фишка виндовс.
      Серьезно, Windows так работает, после <b>Ctrl+Alt</b> обязательно триггерится <b>Ctrl</b>, я не виноват.`,
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

    this.keyLetters = document.querySelectorAll('.letter-key');
    this.keyLettersEn = document.querySelectorAll('.letter-en');
    this.keyLettersRu = document.querySelectorAll('.letter-ru');
    this.onShiftKeys = document.querySelectorAll('.behave-on-shift');

    if (localStorage.lang === null) {
      console.log(localStorage.lang);
      localStorage.setItem('lang', 'en');
    } else if (localStorage.lang === 'ru') {
      this.onLanguageChange('ON_PAGE_RELOAD');
    }

    document.addEventListener('keydown', this.handelEvent);
    document.addEventListener('keyup', this.handelEvent);
    document.addEventListener('mousedown', this.handleMouseEvent);
    document.addEventListener('mouseup', this.handleMouseEvent);

    this.textarea = document.querySelector('.keyboard-textarea');
    this.textarea.focus();
  }
}

const keyboard = new Keyboard(KeysData());
keyboard.init();
