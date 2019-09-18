import React, { Component } from 'react';

import { 
  ConversationsMessagesListItem,
  ConversationMessageOtherUserAvatar,
  ConversationMessageOtherContainer,
  ConversationOtherMessage, } from '../ConversationsBox.styles';

class ConversationsMessageOther extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ConversationsMessagesListItem>
        <ConversationMessageOtherContainer>
          <ConversationOtherMessage>{this.props.message}</ConversationOtherMessage>
        </ConversationMessageOtherContainer>
      </ConversationsMessagesListItem>
    );
  }
}

export default ConversationsMessageOther;
