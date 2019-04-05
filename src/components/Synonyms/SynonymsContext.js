import React, { Component, createContext } from 'react';

import { fetchSynonyms } from './utils';

export const SynonymsContext = createContext({});

export class SynonymsProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      synonyms: [],
      searchTherm: '',
      search: this.search,
    };
  }

  search = async searchTherm => {
    if (searchTherm === this.state.searchTherm) {
      return;
    }

    if (searchTherm) {
      this.setState({ searchTherm, synonyms: [] });

      const synonyms = await fetchSynonyms(searchTherm);

      this.setState({ synonyms });
    }
  };

  render() {
    return <SynonymsContext.Provider value={this.state}>{this.props.children}</SynonymsContext.Provider>;
  }
}
