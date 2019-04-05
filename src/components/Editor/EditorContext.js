import React, { Component, createContext } from 'react';
import { exec } from '../../utils';

export const EditorContext = createContext({});

export class EditorProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleActionState: this.toggleActionState,
      setActionState: this.setActionState,
    };
  }

  getActionState = action => document.queryCommandState(action);

  toggleActionState = action => {
    exec(action);

    this.setActionState(action);
  };

  setActionState = action => {
    this.setState({ [action]: this.getActionState(action) });
  };

  render() {
    return <EditorContext.Provider value={this.state}>{this.props.children}</EditorContext.Provider>;
  }
}
