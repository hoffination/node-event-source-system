import AppAction from '../interfaces/appAction'
import AppState from '../interfaces/appState';
const R = require('ramda');

const descTimeSort = (a: any, b: any) => b.timeFinished - a.timeFinished;

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
        media: R.sort(descTimeSort, R.append(action.payload, state.media))
      }
    default:
      return state
  }
}
