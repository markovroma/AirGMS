import { combineReducers } from 'redux';
import { RootState } from './state';
import { messagesReducer } from './messages';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  messages: messagesReducer as any
});
