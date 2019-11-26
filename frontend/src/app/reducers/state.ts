import { MessageModel } from 'app/models';

export interface RootState {
  messages: RootState.MessageState;
  router?: any;
}

export namespace RootState {
  export type MessageState = MessageModel[];
}
