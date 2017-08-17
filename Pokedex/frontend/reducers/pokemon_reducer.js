import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';



const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  // let nextState;

  switch(action.type) {


    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
      // nextState = merge({}, state, action.pokemon);
      // return nextState;
    case RECEIVE_ONE_POKEMON:
      const newPoke = action.payload.poke;
      return merge({}, state, {[newPoke.id]: newPoke});
    default:
      return state;
  }

};



export default pokemonReducer;
