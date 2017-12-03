import AppAction from '../interfaces/appAction'

const initialState = {requests: 0};

const reducer = (state = initialState, action: AppAction) => {
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

export { reducer };