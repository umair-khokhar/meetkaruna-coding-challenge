import {  REQUEST_CONVERSATIONS, 
          REQUEST_CONVERSATIONS_SUCCESS, 
          REQUEST_CONVERSATIONS_ERROR,  
          REQUEST_SINGLE_CONVERSATION, 
          REQUEST_SINGLE_CONVERSATION_SUCCESS, 
          REQUEST_SINGLE_CONVERSATION_ERROR  } from './ActionTypes';

export function requestConversations() {
  return {
      type: REQUEST_CONVERSATIONS,
      isFetching: true,
      error: false,
  }
}

export function requestConversationsSuccess(json) {
  return {
      type: REQUEST_CONVERSATIONS_SUCCESS,
      conversations: json,
      isFetching: false,
      error: true,
  }
}

export function requestConversationsError(error) {
  return {
      type: REQUEST_CONVERSATIONS_ERROR,
      conversations: [],
      isFetching: false,
      error: error,
  }
}

export function fetchConversations() {
  return function (dispatch) {
      dispatch(requestConversations());

      return fetch(`https://sec.meetkaruna.com/api/v1/conversations`)
          .then(
              response => response.json(),
              error => {
                dispatch(requestConversationsError(error));
                console.log('An error occurred.', error);
              }
          )
          .then(json =>
              dispatch(requestConversationsSuccess(json))
          )
  }
}


export function requestSingleConversation() {
  return {
      type: REQUEST_SINGLE_CONVERSATION,
      isFetching: true,
      error: false,
  }
}

export function requestSingleConversationSuccess(json, name, uuid) {

  return {
      type: REQUEST_SINGLE_CONVERSATION_SUCCESS,
      conversation: json,
      name,
      uuid,
      isFetching: false,
      error: true,
  }
}

export function requestSingleConversationError(error) {
  return {
      type: REQUEST_SINGLE_CONVERSATION_ERROR,
      conversation: {},
      isFetching: false,
      error: error,
  }
}

export function fetchSingleConversation(uuid, name) {
  return function (dispatch) {
      dispatch(requestSingleConversation());
      return fetch(`https://sec.meetkaruna.com/api/v1/conversations/${uuid}`)
          .then(
              response => response.json(),
              error => {
                dispatch(requestSingleConversationError(error));
                console.log('An error occurred.', error);
              }
          )
          .then(json =>
            dispatch(requestSingleConversationSuccess(json, name, uuid))
          )
  }
}


