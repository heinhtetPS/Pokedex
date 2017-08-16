export const fetchAllPokemon = () => {
  // below is returning a promise
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  });
};
