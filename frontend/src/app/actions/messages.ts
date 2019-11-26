import { createAction } from 'redux-actions';
import { MessageModel } from 'app/models';

export namespace MessagesActions {

  export enum Type {
    ADD_MESSAGE = 'ADD_MESSAGE',
    SET_MESSAGE_LIST = 'SET_MESSAGE_LIST',
  }

  export const addMessage = createAction<PartialPick<MessageModel, 'text' | 'recipient' >>(Type.ADD_MESSAGE);
  export const setMessageList = createAction<MessageModel[]>(Type.SET_MESSAGE_LIST);
}

export type MessagesActions = Omit<typeof MessagesActions, 'Type'>;
