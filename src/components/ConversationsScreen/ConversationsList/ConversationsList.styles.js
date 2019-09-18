import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 400px;
  width: 100%;
  float: left;
  height: 100%;
  background-color: #fafafa;
  -webkit-box-shadow: 5px 0px 5px 0px rgba(230,230,230,1);
  -moz-box-shadow: 5px 0px 5px 0px rgba(230,230,230,1);
  box-shadow: 5px 0px 5px 0px rgba(230,230,230,1);
`;


const SearchConversationContainer = styled.div `
  padding: 20px;
  font-size: 24px;
  line-height: 26px;
  color: #666;
  font-weight: 600;
  border-bottom: 1px solid #e1e1e1;
  height: 67px;
  box-sizing: border-box;
`;

const SearchConversationForm = styled.form `
  float: left;
  max-width: calc(100% - 162px);
  width: 100%;
`;

const SearchConversationField = styled.input `
  border: 1px solid #e1e1e1;
  height: 40px;
  line-height: 16px;
  font-size: 15px;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`;

const SearchConversationButton = styled.button `
  display: block;
  background-color: #FFA500;
  border: none;
  padding: 0 10px;
  max-width: 150px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  float: right;
  margin-left: 10px;
  cursor: pointer;
`;


const ConversationsListContainer = styled.ul`
  list-style: none;
  margin: 0px;
  height: calc(100% - 67px);
  overflow: auto;
`;

const ConversationsListItemContainer = styled.li`
  padding: 20px;
  border-bottom: 1px solid #e1e1e1;
  overflow: hidden;
  cursor: pointer;
`;

const ConversationUserAvatar = styled.div`
  max-width: 50px;
  width: 50px;
  margin-right: 20px;
  float: left;
`;

const ConversationUserDetails = styled.div`
  max-width: calc(100% - 70px);
  width: 100%;
  float: left;
`;

const ConversationUsername = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #666;
  margin-bottom: 10px;
`;

const ConversationsChatExcerpt = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #666;
  padding-right: 20px;
`;

const ConversationTimestamp = styled.span`
font-weight: 300;
font-size: 12px;
line-height: 12px;
color: #666;
margin-bottom: 0;
float: right;
margin-top: 8px;
`;

const ConversationsNewNotification = styled.span`
  float: right;
  margin-right: -20px;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  max-width: 20px;
  width: 20px;
  background-color: deepskyblue;
  border-radius: 25px;
  display: block;
  text-align: center;
`;




export { 
  StyledContainer, 
  SearchConversationContainer, 
  SearchConversationForm,
  SearchConversationField,
  SearchConversationButton,
  ConversationsListContainer, 
  ConversationsListItemContainer,
  ConversationUserAvatar, 
  ConversationUserDetails,
  ConversationUsername,
  ConversationsChatExcerpt,
  ConversationsNewNotification,
  ConversationTimestamp
};
