import React, { useContext } from 'react';
import { Button } from 'reactstrap';

import { EditorContext } from '../Editor/EditorContext';

import './ControlPanel.css';

export function ControlPanel(props) {
  const editorContext = useContext(EditorContext);

  return (
    <div id="format-actions">
      {props.actions.map(action => (
        <Button
          key={action.command}
          outline
          size="sm"
          color="secondary"
          active={editorContext[action.command]}
          onClick={() => editorContext.toggleActionState(action.command)}
        >
          {action.name}
        </Button>
      ))}
    </div>
  );
}
