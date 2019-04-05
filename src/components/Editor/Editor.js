import React, { useContext, useState, useEffect } from 'react';
import { Modal, ModalBody } from 'reactstrap';

import { ControlPanel } from '../ControPanel';
import { EditorContext } from './EditorContext';
import editor from './utils/editor';

import { Synonyms, SynonymsContext } from '../Synonyms';

import './Editor.css';

export function Editor(props) {
  const [modal, setModalState] = useState(false);

  const editorContext = useContext(EditorContext);
  const synonymsContext = useContext(SynonymsContext);

  const actions = [
    { command: 'bold', name: <b>B</b> },
    { command: 'underline', name: <u>U</u> },
    { command: 'italic', name: <i>I</i> },
  ];

  const toggleModalState = () => {
    setModalState(!modal);
  };

  useEffect(function() {
    editor.initialise({
      root: document.getElementById('editor'),
      toggleActionState: editorContext.toggleActionState,
      setActionState: editorContext.setActionState,
      toggleModalState,
      setModalState,
      actions,
      search: synonymsContext.search,
      text: props.text,
    });
  }, []);

  return (
    <div>
      <div id="control-wrap">
        <ControlPanel actions={actions} />
      </div>
      <div id="editor-zone">
        <div id="editor" />
      </div>
      <Modal size="sm" isOpen={modal} toggle={toggleModalState}>
        <ModalBody>
          <ControlPanel actions={actions} />
          <Synonyms />
        </ModalBody>
      </Modal>
    </div>
  );
}
