import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { MessagesActions } from 'app/actions/messages';
import { MessageModel } from 'app/models';

const initialState: RootState.MessageState = [];

export const messagesReducer = handleActions<RootState.MessageState, MessageModel | MessageModel[]>(
  {
    [MessagesActions.Type.SET_MESSAGE_LIST]: (state, action) => {
      if (action.payload && Array.isArray(action.payload)) {
        return [
          ...action.payload,
        ];
      }
      return state;
    },
    [MessagesActions.Type.ADD_MESSAGE]: (state, action) => {
      if (action.payload && !Array.isArray(action.payload)) {
        return [
          {
            recipient: action.payload.recipient,
            text: action.payload.text,
            date: 'Sending ...',
          },
          ...state,
        ];
      }
      return state;
    },
  },
  initialState,
);
