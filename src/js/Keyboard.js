import { HtmlObject, WrapHTML } from './CreateKeys';
import KeysData from './KeysData';

class Keyboard {
  constructor(data) {
    this.keyPressed = 'false';
    this.strucutre = '';
    this.strucutre += HtmlObject('h1', 'rss-title', 'RSS Virtual Keyboard');
    this.strucutre += HtmlObject('input', 'keyboard-input');

    for (let row = 0; row < data.length; row += 1) {
      this.strucutre += WrapHTML(this.renderRow(data[row]));
    }

    this.strucutre = WrapHTML(
      this.strucutre,
      undefined,
      'keyboard keyboard-wrap',
    );
  }

  renderRow(row) {
    this.lang = 'en';
    let rowResult = '';
    for (let i = 0; i < row.length; i += 1) {
      if (Array.isArray(row[i].content) && row[i].type === 'digits') {
        rowResult += row[i].content.reduce((keys, currKey) => {
          keys += WrapHTML(
            HtmlObject('span', 'digit', currKey.en) +
              HtmlObject('span', 'digit on-shift', currKey.shift),
            currKey.id,
            'key digit-key',
          );
          return keys;
        }, '');
      }
      if (Array.isArray(row[i].content) && row[i].type === 'letters') {
        rowResult += row[i].content.reduce((keys, currKey) => {
          keys += WrapHTML(
            HtmlObject('span', 'letter letter-eng', currKey.en) +
              HtmlObject('span', 'letter on-shift', currKey.shift) +
              HtmlObject('span', 'letter letter-ru', currKey.ru),
            currKey.id,
            'key letter-key',
          );
          return keys;
        }, '');
      }
      if (row[i].type === 'complex') {
        rowResult += HtmlObject(
          'div',
          `key ${row[i].class}`,
          row[i].content,
          row[i].id,
        );
      }
    }
    return rowResult;
  }

  init() {
    document.body.innerHTML += this.strucutre;
    document.querySelectorAll('.key').forEach((key) => {
      key.addEventListener('click', this.handleClick);
    });
    document.addEventListener('keydown', this.handelEvent);
    document.addEventListener('keyup', this.handelEvent);
  }

  handelEvent(evt) {
    evt.preventDefault();
    switch (evt.code) {
      case 'CapsLock':
        if (evt.type === 'keyup') break;
        document.getElementById('CapsLock').classList.toggle('caps-highlight');
        document
          .querySelectorAll('.letter-key')
          .forEach((letter) => letter.classList.toggle('uppercase-on'));
        break;
      case 'ShiftLeft':
        document.getElementById('ShiftLeft').classList.toggle('key-pressed');
        document
          .querySelectorAll('.on-shift')
          .forEach((letter) => letter.classList.toggle('shift-visible'));
        break;
      case 'ShiftRight':
        document
          .querySelectorAll('.on-shift')
          .forEach((letter) => letter.classList.toggle('shift-visible'));
        this.keyPressed = !this.keyPressed;
        break;
      default:
        break;
    }
  }

  // handleCapsLock() {
  //   console.log(this.lang);

  //   document.getElementById('CapsLock').classList.toggle('caps-on');
  //   document
  //     .querySelectorAll('.letter-key')
  //     .forEach((letter) => letter.classList.toggle('uppercase-on'));
  // }

  // handleShift() {
  //   if (!this.keyPressed) {
  //     document
  //       .getElementById('Shift')
  //       .addEventListener('mouseup', this.handleShift);
  //   }
  //   document
  //     .querySelectorAll('.on-shift')
  //     .forEach((letter) => letter.classList.toggle('shift-visible'));
  //   this.keyPressed = !this.keyPressed;
  // }

  // handleCapsLock() {
  //   this.caps.classList.toggle('caps-on');
  //   this.letters.forEach((letter) => letter.classList.toggle('uppercase-on'));
  // }

  // handleKey(evt) {
  //   document.getElementById(`${evt.code}`).classList?.toggle('key-pressed');
  // }
}

const keyboard = new Keyboard(KeysData());
keyboard.init();
// const Title; = HtmlObject('h1', 'rss-title', 'RSS Virtual Keyboard');
// const Input = HtmlObject('input', 'keyboard-input');
// const KeyboardLayout = WrapHTML(
//   Title + Input + createKeyboard(KeysData()),
//   undefined,
//   'keyboard keyboard-wrap',
// );

// const letters = document.querySelectorAll('.letter-key');
// const caps = document.querySelector('.key-caps');

// function handleCaps() {
//   caps.classList.toggle('caps-on');
//   letters.forEach((letter) => letter.classList.toggle('uppercase-on'));
// }

// function handleKey(evt) {
//   document.getElementById(`${evt.code}`).classList?.toggle('key-pressed');
// }

// caps.addEventListener('click', handleCaps);

// document.addEventListener('keydown', (evt) => {
//   console.log(evt.code);
//   evt.preventDefault();
//   if (evt.code === 'CapsLock') {
//     handleCaps();
//   } else {
//     handleKey(evt);
//   }
// });

// document.addEventListener('keyup', (evt) => {
//   evt.preventDefault();
//   if (evt.code === 'CapsLock') {
//     return;
//   }
//   document.getElementById(`${evt.code}`).classList?.toggle('key-pressed');
// });
