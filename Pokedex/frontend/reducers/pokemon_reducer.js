import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';



const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  // let nextState;

  switch(action.type) {


    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, state, action.pokemon);
      // nextState = merge({}, state, action.pokemon);
      // return nextState;
    default:
      return state;
  }

};



export default pokemonReducer;
