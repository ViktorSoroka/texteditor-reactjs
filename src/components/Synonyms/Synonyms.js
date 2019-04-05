import React, { useContext } from 'react';
import { Button } from 'reactstrap';

import { SynonymsContext } from './SynonymsContext';
import { replaceSelection } from '../../utils';

export function Synonyms() {
  const synonymsContext = useContext(SynonymsContext);
  const { synonyms } = synonymsContext;

  if (!synonyms.length) {
    return (
      <div id="format-actions">
        <p>No synonyms found</p>
      </div>
    );
  }

  return (
    <div id="format-actions">
      <p>Synonyms: </p>
      {synonyms.map(synonym => (
        <Button
          key={synonym}
          outline
          size="sm"
          onClick={() => {
            replaceSelection(synonym);
          }}
        >
          {synonym}
        </Button>
      ))}
    </div>
  );
}
