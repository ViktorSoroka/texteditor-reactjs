import xss from 'xss';

import { exec } from '../../../utils';

export const initialise = settings => {
  const content = document.createElement('div');

  content.contentEditable = true;
  content.innerHTML = xss(settings.text);

  content.onkeydown = event => {
    if (event.key !== 'Tab') {
      return;
    }

    const methodQuery = event.shiftKey ? 'outdent' : 'indent';

    exec(methodQuery);
    event.preventDefault();
  };

  content.ondblclick = () => {
    const selection = window.getSelection();
    const selectionValue = selection.toString();

    if (!selectionValue) {
      return;
    }

    settings.toggleModalState();

    // handle loose of selection while modal is opened
    document.addEventListener(
      'selectstart',
      () => {
        settings.setModalState();
      },
      { once: true }
    );

    settings.search(selectionValue);
  };

  settings.root.appendChild(content);

  settings.actions.forEach(action => {
    const handler = () => settings.setActionState(action.command);

    content.addEventListener('keyup', handler);
    content.addEventListener('mouseup', handler);
  });

  return () => {
    settings.root.removeChild(content);
  };
};

export default { initialise };
