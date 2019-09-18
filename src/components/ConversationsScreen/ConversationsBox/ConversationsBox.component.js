import React, { Component } from "react";

import { 
  StyledContainer, 
  ConversationPerson, 
  ConversationsMessagesContainer, 
  ConversationsMessagesListContainer, 
  MessageComposeContainer,
  MessageComposeTextArea,
  MessageComposeSubmit,
  MessageComposeForm
} from './ConversationsBox.styles';

import ConversationsMessageSelf from './ConversationsMessage/ConversationsMessageSelf.component';
import ConversationsMessageOther from './ConversationsMessage/ConversationsMessageOther.component';


class ConversationsBox extends Component {
  constructor() {
    super();
    this.state = {};
  }

  scrollToBottom = () => {
    this.listEnd.scrollIntoView({block: "end"});
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <StyledContainer>
        <ConversationPerson>{this.props.name} </ConversationPerson>
        <ConversationsMessagesContainer>
          <ConversationsMessagesListContainer ref={(el) => { this.listEnd = el; }}>
          {this.props.messages.map((message) => {
            if(message.direction == 'outgoing')
              return <ConversationsMessageSelf uuid={message.uuid}  message={message.body} direction={message.direction} timestamp={message.created_at}  />
            else
            return <ConversationsMessageOther uuid={message.uuid}  message={message.body} direction={message.direction} timestamp={message.created_at}  />
          })} 
           
          </ConversationsMessagesListContainer>
        </ConversationsMessagesContainer>
        <MessageComposeContainer>
          <MessageComposeForm>
            <MessageComposeTextArea></MessageComposeTextArea>
            <MessageComposeSubmit>Send</MessageComposeSubmit>
          </MessageComposeForm>
        </MessageComposeContainer>
      </StyledContainer>
    );
  }
}

export default ConversationsBox;
