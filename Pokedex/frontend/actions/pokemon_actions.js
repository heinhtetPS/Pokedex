import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';

export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receiveOnePokemon = (payload) => {
  return {
    type: RECEIVE_ONE_POKEMON,
    payload
  };
};

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
    // pokemon above is the response json received by promise
);

export const requestOnePokemon = (id) => (dispatch) => (
  APIUtil.fetchOnePokemon(id)
    .then(pokemon => dispatch(receiveOnePokemon(pokemon)))
    // pokemon above is the response json received by promise
);
