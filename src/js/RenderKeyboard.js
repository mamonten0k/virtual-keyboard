import { HtmlObject, WrapHTML } from './CreateKeys';
import KeysData from './KeysData';

function renderRow(row) {
  let rowResult = '';

  for (let i = 0; i < row.length; i += 1) {
    if (Array.isArray(row[i].content) && row[i].type === 'digits') {
      rowResult += row[i].content.reduce((keys, currKey) => {
        currKey = currKey.split('/');
        keys += WrapHTML(
          HtmlObject('span', 'digit digit-front', currKey[0]) +
            HtmlObject('span', 'digit digit-back', currKey[1]),
          'key digit-key',
        );
        return keys;
      }, '');
    }
    if (Array.isArray(row[i].content) && row[i].type === 'letters') {
      rowResult += row[i].content.reduce((keys, currKey) => {
        currKey = currKey.split('/');
        keys += WrapHTML(
          HtmlObject('span', 'letter letter-eng', currKey[0]) +
            HtmlObject('span', 'letter letter-ru', currKey[1]),
          'key letter-key',
        );
        return keys;
      }, '');
    }
    if (row[i].type === 'complex') {
      rowResult += HtmlObject(
        'div',
        `key ${row[i].id}`,
        row[i].content,
        row[i].id,
      );
    }
  }
  return rowResult;
}

function createKeyboard(data) {
  let layout = '';
  for (let row = 0; row < data.length; row += 1) {
    layout += WrapHTML(renderRow(data[row]));
  }
  return layout;
}

// const Title = CreateKeys('h1', 'rss-title', 'RSS Virtual Keyboard');
// const WrapRow = CreateKeys('div');
// const Input = CreateKeys('input');
const KeyboardLayout = WrapHTML(
  createKeyboard(KeysData()),
  'keyboard keyboard-wrap',
);
// console.log(renderRow(KeysData()[0]), 'nenene');
document.body.innerHTML += KeyboardLayout;
