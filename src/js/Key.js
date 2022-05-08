import HtmlBuilder from './HtmlBuilder';

export default class Key {
  /* eslint-disable-next-line */
  constructor({ en, shift, id, ru, classes }, row) {
    this.type = 'span';
    this.en = en;
    this.shift = shift;
    this.id = id;
    this.ru = ru;
    this.classes = classes;
    this.row = row;
    this.keyPressed = false;
    this.keyHTML = '';
    this.HtmlBuilder = new HtmlBuilder();
    this.HtmlBuilder.build = this.HtmlBuilder.build.bind(this);
    this.getHTML = this.getHTML.bind(this);
  }

  getHTML() {
    let code = '';
    code += this.HtmlBuilder.build(this.type, 'letter-en', this.en);

    if (this.shift) {
      code += this.HtmlBuilder.build(this.type, 'behave-on-shift hide', this.shift);
    }

    if (this.ru) {
      code += this.HtmlBuilder.build(this.type, ' letter-ru hide', this.ru);
    }

    return this.HtmlBuilder.build('div', `key ${this.classes}`, code, this.id);
  }
}
