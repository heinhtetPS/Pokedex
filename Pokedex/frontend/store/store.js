import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
// import thunkMiddleware from '../middleware/thunk';
import { thunker } from '../middleware/thunk';

const configureStore = () => {

  // return createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
  return createStore(rootReducer, applyMiddleware(thunker, logger));

};

export default configureStore;
