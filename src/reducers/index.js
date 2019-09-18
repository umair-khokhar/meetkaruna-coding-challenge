import { combineReducers } from 'redux';
import ConversationsReducer from './Conversations.reducer';
export default combineReducers({
    conversationsPart: ConversationsReducer,
});