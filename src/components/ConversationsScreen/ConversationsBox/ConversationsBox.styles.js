import styled from 'styled-components';

const StyledContainer = styled.div`
max-width: calc(100% - 400px);
width: 100%;
float: left;
height: 100%;
`;

const ConversationPerson = styled.div`
  padding: 20px;
  font-size: 24px;
  line-height: 26px;
  color: #666;
  font-weight: 600;
  border-bottom: 1px solid #e1e1e1;
  height: 67px;
  box-sizing: border-box;
`;

const ConversationsMessagesContainer = styled.div`
margin: 0px;
  height: calc(100% - 134px);
  overflow: auto;
`;

const ConversationsMessagesListContainer = styled.ul`
  list-style: none;
  margin: 50px 0 ;
`;

const ConversationsMessagesListItem = styled.li`
  padding: 20px;
  overflow: hidden;
`;

const ConversationMessageOtherUserAvatar = styled.div`
  max-width: 50px;
  width: 50px;
  margin-right: 20px;
  float: left;
`;

const ConversationMessageOtherContainer = styled.div`
  max-width: calc(100% - 70px);
  width: 100%;
  float: left;
`;

const ConversationOtherMessage = styled.div`
  position: relative;
  background: #f1f1f1;
  border-radius: .4em;
  padding: 20px;
  float: left;
  margin-left: 20px;
  max-width: 500px;
`;



const ConversationMessageSelfUserAvatar = styled.div`
  max-width: 50px;
  width: 50px;
  margin-left: 20px;
  margin-right: 0;
  float: right;
`;

const ConversationMessageSelfContainer = styled.div`  
  max-width: calc(100% - 70px);
  width: 100%;
  float: right;
`;


const ConversationSelfMessage = styled.div`
  position: relative;
  background: #5388D7;
  border-radius: .4em;
  padding: 20px;
  float: right;
  margin-right: 20px;
  color: #fff;
`;


const MessageComposeContainer = styled.div`
padding: 13px 20px;
border-top: 1px solid #e1e1e1;
height: 67px;
box-sizing: border-box;
`;

const MessageComposeForm = styled.form`

`;

const MessageComposeTextArea = styled.textarea`
float: left;
	border: 1px solid #e1e1e1;
    height: 40px;
    line-height: 16px;
    font-size: 15px;
    max-width: calc(100% - 162px);
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
`;

const MessageComposeSubmit = styled.button`
display: block;
    background-color: #FFA500;
    border: none;
    padding: 0 10px;
    max-width: 150px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    float: left;
	margin-left: 10px;
	cursor: pointer;
`;

export { 
        StyledContainer, 
        ConversationPerson, 
        ConversationsMessagesContainer, 
        ConversationsMessagesListContainer,
        ConversationsMessagesListItem,
        ConversationMessageOtherUserAvatar,
        ConversationMessageOtherContainer,
        ConversationOtherMessage,
        ConversationMessageSelfUserAvatar,
        ConversationMessageSelfContainer,
        ConversationSelfMessage,
        MessageComposeContainer,
        MessageComposeForm,
        MessageComposeTextArea,
        MessageComposeSubmit
};


