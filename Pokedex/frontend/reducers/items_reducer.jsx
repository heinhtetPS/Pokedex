import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';



const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  // let nextState;

  switch(action.type) {

    case RECEIVE_ONE_POKEMON:
      const newState = Object.assign({}, state);
      action.payload.items.forEach((item) => (
        newState[item.id] = item
      ));
      return newState;
    default:
      return state;
  }

};



export default itemsReducer;
