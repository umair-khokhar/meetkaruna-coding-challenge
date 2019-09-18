import {  REQUEST_CONVERSATIONS, 
          REQUEST_CONVERSATIONS_SUCCESS, 
          REQUEST_CONVERSATIONS_ERROR,
          REQUEST_SINGLE_CONVERSATION, 
          REQUEST_SINGLE_CONVERSATION_SUCCESS, 
          REQUEST_SINGLE_CONVERSATION_ERROR  
        } from "../actions/ActionTypes";

const initialState = {
  conversations: [],
  selectedConversation: {uuid: '', name: '', messages: []},
  isFetching: false,
  error: false,
};

const ConversationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_CONVERSATIONS:
          return {
            ...state,
            isFetching: true
          };
        case REQUEST_CONVERSATIONS_SUCCESS:
          return {
            ...state,
            conversations: [...state.conversations, ...action.conversations.data],
                isFetching: false
            };
        case REQUEST_CONVERSATIONS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        case REQUEST_SINGLE_CONVERSATION:
          return {
            ...state,
            isFetching: true
          };
        case REQUEST_SINGLE_CONVERSATION_SUCCESS:
          return {
            ...state,
            selectedConversation: {name: action.name, uuid: action.uuid, messages: action.conversation.data.messages},
            isFetching: false
          };
        case REQUEST_SINGLE_CONVERSATION_ERROR:
          return {
            ...state,
            isFetching: false,
            error: true,
          };
        default:
          return state
      }
                                
};

export default ConversationsReducer;