import { connect } from 'react-redux'
import ConversationsBox from './ConversationsBox.component';

const mapStateToProps = state => {
  return {
    messages: state.conversationsPart.selectedConversation.messages,
    name: state.conversationsPart.selectedConversation.name
  }
}

const ConversationsBoxContainer = connect(
  mapStateToProps
)(ConversationsBox)

export default ConversationsBoxContainer