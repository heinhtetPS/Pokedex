import { RECEIVE_ONE_POKEMON, receiveOnePokemon } from '../actions/pokemon_actions';

//here we should update the pokeDisplay when a single pokemon is received
const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  // let nextState;

  switch(action.type) {

    case RECEIVE_ONE_POKEMON:
      return Object.assign({}, state, action.pokemon);
    default:
      return state;
  }

};



export default uiReducer;
