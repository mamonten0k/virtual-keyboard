export const HtmlObject = (
  type,
  classes,
  text,
  id = undefined,
  path = undefined,
) => `<${type} class='${classes}' ${path ? `src='${path}'` : ''} 
    ${id ? `id="${id}"` : ''}>${text}</${type}>`;

export const WrapHTML = (
  content,
  wrapperClasses = 'row row-wrap',
  wrapperType = 'div',
) => `<${wrapperType} class="${wrapperClasses}">${content}</${wrapperType}>`;
