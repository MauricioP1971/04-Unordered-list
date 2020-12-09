const listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
  const newList = `<li class="list-group-item">${content}</li>`;
  return newList;
};

// const listItem = content => `<li class="list-group-item">${content}</li>`;

// console.log(listItem("milk"));

const unorderedList = (items) => {
  const content = items.map(item => listItem(item)).join('\n  ');
  return `<ul class="list-group">${content}</ul>`;
};

module.exports = { listItem, unorderedList }; // Do not remove.
