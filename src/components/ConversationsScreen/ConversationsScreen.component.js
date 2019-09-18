import React, { Component } from 'react';

import { StyledContainer } from './ConversationsScreen.styles';
import ConversationsListContainer from './ConversationsList/ConversationsList.container';
import ConversationsBoxContainer from './ConversationsBox/ConversationsBox.container';

class ConversationsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledContainer>
        <ConversationsListContainer></ConversationsListContainer>
        <ConversationsBoxContainer></ConversationsBoxContainer>
      </StyledContainer>
    );
  }
}

export default ConversationsScreen;
