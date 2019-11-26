import * as React from 'react';
import { Message } from 'app/components/Message';
import { MessageModel } from 'app/models';
import { MessagesActions } from 'app/actions/messages';
import * as style from './style.css';
import * as classNames from 'classnames';

export namespace MessageList {
  export interface Props {
    messages: MessageModel[],
    actions: MessagesActions,
  }
}

export class MessageList extends React.Component<MessageList.Props> {
  constructor(props: MessageList.Props, context?: any) {
    super(props, context);
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="container">
        {messages.map((message, index) => (
          <div className="row" key={index}>
            <div className={classNames(style.messageItemContainer, 'col-10')}>
              <Message
                message={message}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
