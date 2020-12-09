const listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
  const newList = `<li class="list-group-item">${content}</li>`;
  return newList;
};

console.log(listItem("milk"));

const unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)

};

module.exports = { listItem, unorderedList }; // Do not remove.
