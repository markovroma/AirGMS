import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from 'app/reducers';
import { MessageForm } from 'app/components/MessageForm';
import { MessageList } from 'app/components/MessageList';
import { bindActionCreators, Dispatch } from 'redux';
import { omit } from 'app/utils';
import { MessagesActions } from 'app/actions/messages';
import { MessageEffect } from 'app/effects/MessageEffect';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    messages: RootState.MessageState;
    actions: MessagesActions;
  }
}

@connect(
  (state: RootState, ownProps): Pick<App.Props, 'messages'> => {
    return {
      messages: state.messages,
    };
  },
  (dispatch: Dispatch): Pick<App.Props, 'actions'> => ({
    actions: bindActionCreators(omit(MessagesActions, 'Type'), dispatch)
  })
)
export class App extends React.Component<App.Props> {
  componentDidMount() {
    MessageEffect
      .getMessageList()
      .then((messages: any[]) => {
        const messageModels = messages.map((message) => ({
          text: message.text,
          recipient: message.recipient,
          date: message.sending_at || 'Sending ...',
        }));
        this.props.actions.setMessageList(messageModels);
      });
  }

  render() {
    const { messages, actions } = this.props;
    return (
      <div>
        <div className="container">
          <MessageForm
            addMessage={actions.addMessage}
          />
          <MessageList
            messages={messages}
            actions={actions}
          />
        </div>
      </div>
    );
  }
}
