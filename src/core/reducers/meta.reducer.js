const initialState = {requests: 0};

module.exports = (state = initialState, action) => {
  switch(action.type) {
    case '/':
      return {
        ...state,
        requests: state.requests + 1
      }
    default:
      return state;
  }
}