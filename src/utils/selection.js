export const replaceSelection = value => {
  const selection = window.getSelection();

  const range = selection.getRangeAt(0);

  range.deleteContents();
  range.insertNode(document.createTextNode(value));
};
