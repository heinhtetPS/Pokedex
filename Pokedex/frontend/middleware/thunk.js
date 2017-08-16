
// const thunkMiddleware = ({ dispatch, getState }) => (next) => (action) => {
export const thunker = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch);
  }

  return next(action);
};

// did not have below
// export default thunkMiddleware;
