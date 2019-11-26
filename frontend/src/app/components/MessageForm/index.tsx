import * as React from 'react';
import { MessagesActions } from 'app/actions';
import { MessageEffect } from 'app/effects/MessageEffect';

export namespace MessageForm {
  export interface Props {
    addMessage: typeof MessagesActions.addMessage,
  }

  export interface State {
    recipient: string,
    text: string,
  }
}

export class MessageForm extends React.Component<MessageForm.Props, MessageForm.State> {
  constructor(props: MessageForm.Props, context?: any) {
    super(props, context);
    this.state = { recipient: '', text: '' };
    this.handleSave = this.handleSave.bind(this);
    this.handleChangeRecipient = this.handleChangeRecipient.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleSave(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const { text, recipient } = this.state;
    MessageEffect
      .sendMessage({ text, recipient })
      .then(() => {
        this.props.addMessage({ text, recipient });
      })
      .catch((e) => {
        alert('Error');
      });
  }

  handleChangeRecipient(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ recipient: event.target.value });
  }

  handleChangeText(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ text: event.target.value });
  }

  render() {
    const { recipient, text } = this.state;
    return (
      <form className="container mb-3" onSubmit={this.handleSave}>
        <div className="row align-items-end">
          <div className="col">
            <div className="row">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="recipient">Recipient</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone number of recipient"
                  aria-label="Recipient"
                  aria-describedby="recipient"
                  value={recipient}
                  onChange={this.handleChangeRecipient}
                />
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="text">Text</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Text to be sent out"
                  aria-label="Text"
                  aria-describedby="text"
                  value={text}
                  onChange={this.handleChangeText}
                />
              </div>
            </div>
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </div>
      </form>
    );
  }
}
