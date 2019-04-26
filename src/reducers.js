import { combineReducers } from 'redux'

function locale(state = 'de_DE', action) {
  switch (action.type) {
    case 'UPDATE_LANGUAGE':
      return action.payload;
    default:
      return state
  }
}

function ui(state = 'IS_LOADING', action){
  switch (action.type) {
    case 'IS_LOADING':
      return 'IS_LOADING';
    case 'IS_LOADED':
      return 'IS_LOADED';
    default:
      return state
  }
}

const appReducer = combineReducers({
  locale,
  ui
});

const rootReducer = (state, action) => {
  if(action.type === 'REINIT_STATE_WITH_PAYLOAD'){
    state = action.payload;
  }

  return appReducer(state, action);
}

export default rootReducer;
