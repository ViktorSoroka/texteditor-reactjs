export const fetchSynonyms = searchTherm => {
  return fetch(`https://api.datamuse.com/words?rel_syn=${searchTherm}`)
    .then(response => response.json())
    .then(synonyms => synonyms.map(({ word }) => word).slice(0, 5))
    .catch(() => []);
};
