import React, { Component } from 'react';

import getMockText from './text.service';
import { EditorProvider, SynonymsProvider, Editor } from './components';

import './App.css';

class App extends Component {
  state = {
    loading: true,
    text: null,
  };

  async componentDidMount() {
    this.fetchText();
  }

  async fetchText() {
    const text = await getMockText();

    this.setState({
      loading: false,
      text,
    });
  }

  render() {
    if (this.state.loading) {
      return <div className="App">Loading...</div>;
    }

    return (
      <div className="App">
        <header>
          <span>Simple Text Editor</span>
        </header>
        <main>
          <EditorProvider>
            <SynonymsProvider>
              <Editor text={this.state.text} />
            </SynonymsProvider>
          </EditorProvider>
        </main>
      </div>
    );
  }
}

export default App;
