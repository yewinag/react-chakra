import { AnyAction, combineReducers, Reducer } from 'redux';

import appReducer from './app';
import counterReducer from './counter';

const applicationReducer = combineReducers({
  app: appReducer,
  counter: counterReducer,
});

export type RootState = ReturnType<typeof applicationReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'RESET') {
    state = {} as RootState;
    localStorage.clear();
  }
  return applicationReducer(state, action);
};
export default rootReducer;
