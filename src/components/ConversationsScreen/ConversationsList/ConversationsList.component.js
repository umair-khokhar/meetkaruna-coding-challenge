import React, { Component } from "react";

import {StyledContainer, SearchConversationContainer, SearchConversationForm, SearchConversationField, SearchConversationButton, ConversationsListContainer} from './ConversationsList.styles';
import ConversationsListItem from "./ConversationsListItem/ConversationsListItem.component";
import { normalizeUnits } from "moment";

class ConversationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {initialLaunch: true, searching: false, searchTerm: ''};
    this.props.onFetchConversations();
    this.handleSearch = this.handleSearch.bind(this);
    
  }


  componentDidUpdate() {
    if(this.props.conversations.length > 0 && this.state.initialLaunch) {
      let selectedConversation = localStorage.getItem('selectedConversation');

      if(selectedConversation !== null) {
        selectedConversation = JSON.parse(selectedConversation);
        this.props.onConversationSelected(selectedConversation.uuid, selectedConversation.name);
      } else {
        this.props.onConversationSelected(this.props.conversations[0].uuid, this.props.conversations[0].name);
        this.setState({ initialLaunch: false });
      }
    }
  }

  handleSearch(e) {
    this.setState({searching: true, searchTerm: e.target.value});
    console.log(this.state);
  }
  

  render() {
    return (
      <StyledContainer>
        <SearchConversationContainer>
          <SearchConversationForm>
            <SearchConversationField placeholder='Search' onChange={this.handleSearch}/>
          </SearchConversationForm>
          <SearchConversationButton>+</SearchConversationButton>
        </SearchConversationContainer>
        <ConversationsListContainer>
        {this.props.conversations.map((conversation) => {
          let selected = false;
          if(conversation.uuid === this.props.selectedConversationUUID)
            selected = true;
          if(this.state.searching) {
            if(conversation.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) > -1) {
              return <ConversationsListItem selected={selected} onSelect={this.props.onConversationSelected} uuid={conversation.uuid} name={conversation.name} unread={conversation.unread} message={conversation.last_message.body} direction={conversation.last_message.direction} timestamp={conversation.last_message.created_at}  />
            }
          } else {
            return <ConversationsListItem selected={selected} onSelect={this.props.onConversationSelected} uuid={conversation.uuid} name={conversation.name} unread={conversation.unread} message={conversation.last_message.body} direction={conversation.last_message.direction} timestamp={conversation.last_message.created_at}  />
          }

          

        })} 
        </ConversationsListContainer>
      </StyledContainer>
    );
  }
}

export default ConversationsList;
