export const fetchAllPokemon = () => {
  // below is returning a promise
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  });
};

export const fetchOnePokemon = (pokemonID) => {
  // below is returning a promise
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${pokemonID}`
  });
};
