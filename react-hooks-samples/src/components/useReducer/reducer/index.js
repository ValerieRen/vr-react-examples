export const init = (initialState) => {
  return {
    count: initialState,
  };
};

export const reducer = (state, action = {}) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}
