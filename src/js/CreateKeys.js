export const HtmlObject = (
  type,
  classes,
  text,
  id = undefined,
  path = undefined,
) => {
  if (type === 'input') {
    return `<${type} class='${classes}' ${path ? `src='${path}'` : ''} 
       ${id ? `id="${id}"` : ''}/>`;
  }
  return `<${type} class='${classes}' ${path ? `src='${path}'` : ''} 
    ${id ? `id="${id}"` : ''}>${text}</${type}>`;
};

export const WrapHTML = (
  content,
  id,
  wrapperClasses = 'row row-wrap',
  wrapperType = 'div',
) => {
  if (content === 'undefined') return '';
  return `<${wrapperType} class="${wrapperClasses}" ${
    id ? `id="${id}" ` : ''
  }>${content}</${wrapperType}>`;
};
