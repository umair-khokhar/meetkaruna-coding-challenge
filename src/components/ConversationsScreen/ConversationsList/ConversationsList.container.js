import { connect } from 'react-redux'
import { fetchConversations, fetchSingleConversation } from '../../../actions/Actions';
import ConversationsList from './ConversationsList.component';

const sortConversations = (conversations) => {
  return conversations.sort(function(a,b){
    return new Date(b.last_message.created_at) - new Date(a.last_message.created_at);
  });
}

const mapStateToProps = state => {
  return {
    conversations: sortConversations(state.conversationsPart.conversations),
    selectedConversationUUID: state.conversationsPart.selectedConversation.uuid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchConversations: () => {
      dispatch(fetchConversations());
    },
    onConversationSelected: (uuid, name) => {
      dispatch(fetchSingleConversation(uuid, name));
    }
  }
};

const ConversationsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationsList)

export default ConversationsListContainer