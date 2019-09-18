import React, { Component } from "react";
import {ConversationsNewNotification, ConversationTimestamp, ConversationsListItemContainer, ConversationUserAvatar, ConversationUserDetails, ConversationUsername, ConversationsChatExcerpt} from '../ConversationsList.styles';
import moment from 'moment';


class ConversationsListItem extends Component {
  constructor(props) {
    super(props);


    console.log(props);
    
    let notificationStyles = {display: 'none'};
    if(this.props.unread > 0 && this.props.direction == 'incoming') {
      notificationStyles = {};
    } 

    
    this.state = {
      notificationStyles
    };

    

    this.loadConversation = this.loadConversation.bind(this);
  }


  loadConversation() {
    localStorage.setItem('selectedConversation', JSON.stringify({uuid: this.props.uuid, name: this.props.name}) );
    this.props.onSelect(this.props.uuid, this.props.name);
  }

  render() {
    let avatar = 'https://ui-avatars.com/api/?name=' + this.props.name;

    let message = this.props.message
    if(this.props.message.length > 78) {
      message = this.props.message.substr(0, 78) + '...';
    }

    let backgroundColor = '';
    if(this.props.selected) {
      backgroundColor = '#74bbfb';
      this.state = {
        notificationStyles: {display: 'none'}
      }; 
    }

    return (
      <ConversationsListItemContainer onClick={this.loadConversation} style={{backgroundColor}}  >
        <ConversationUserAvatar>
          <img src={avatar} width="50" alt={this.props.name} title={this.props.name} />
        </ConversationUserAvatar>
        <ConversationUserDetails>
          <ConversationUsername>{this.props.name}<ConversationTimestamp>{moment(this.props.timestamp, "YYYYMMDD").fromNow()}</ConversationTimestamp></ConversationUsername>
          <ConversationsChatExcerpt>{message}<ConversationsNewNotification style={this.state.notificationStyles}>{this.props.unread}</ConversationsNewNotification></ConversationsChatExcerpt>
        </ConversationUserDetails>
      </ConversationsListItemContainer> 
    );

  }
}

export default ConversationsListItem;
