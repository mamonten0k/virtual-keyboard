export default class HtmlBuilder {
  singleBracket = 'single';

  cunstructor() {
    this.build = this.build.bind(this);
  }

  build(type, classes, innerContent, id, bracketType = 'double', path = undefined) {
    if (bracketType === this.singleBracket) {
      return `<${type} class='${classes}' ${path ? `src='${path}'` : ''} 
      ${id ? `id='${id}'` : ''}/>`;
    }

    return `<${type} class='${classes}' ${path ? `src='${path}'` : ''} 
    ${id ? `id='${id}'` : ''}>${innerContent}</${type}>`;
  }
}
