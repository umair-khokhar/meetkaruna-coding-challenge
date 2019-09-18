import React, { Component } from 'react';

import { 
  ConversationsMessagesListItem,
  ConversationMessageSelfContainer,
  ConversationSelfMessage } from '../ConversationsBox.styles';

class ConversationsMessageOther extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ConversationsMessagesListItem>
        <ConversationMessageSelfContainer>
          <ConversationSelfMessage>{this.props.message}</ConversationSelfMessage>
        </ConversationMessageSelfContainer>
      </ConversationsMessagesListItem>
    );
  }
}

export default ConversationsMessageOther;
