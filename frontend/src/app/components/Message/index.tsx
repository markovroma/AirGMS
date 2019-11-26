import * as React from 'react';
import { MessageModel } from 'app/models';
import * as style from './style.css';
import * as classNames from 'classnames';

export namespace Message {
  export interface Props {
    message: MessageModel,
  }

  export interface State {
  }
}

export class Message extends React.Component<Message.Props, Message.State> {
  constructor(props: Message.Props, context?: any) {
    super(props, context);
  }

  render() {
    const { text, date } = this.props.message;
    return (
      <div className={classNames(style.messageContainer, 'row')}>
        <div className="alert alert-primary col-12" role="alert">
          <div>{text}</div>
        </div>
        <div className="col-2">{date}</div>
      </div>
    );
  }
}
