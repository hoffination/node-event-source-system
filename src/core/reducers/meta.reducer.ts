import AppAction from '../interfaces/appAction'
import AppState from '../interfaces/appState';

const initialState: AppState = {
  requests: 0,
  media: []
}

export const ADD_MEDIA_ACTION = '@@ness/ADD_MEDIA';

export const reducer = (state: AppState = initialState, action: AppAction) => {
  switch(action.type) {
    case '/':
      return {
        ...state,
        requests: state.requests + 1
      }
    case ADD_MEDIA_ACTION:
      return {
        ...state,
        media: [
          ...state.media,
          action.payload
        ]
      }
    default:
      return state
  }
}
