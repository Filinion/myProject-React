let ADD_MESSAGE = "ADD-MESSAGE";
let CHANGE_MESSAGE = "CHANGE-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        messages: state.NewMessage,
      };
      state.messagesData.push(newMessage);
      state.NewMessage = "";
      return state;
    case CHANGE_MESSAGE:
      state.NewMessage = action.text;
      return state;
    default:
      return state;
  }
};

export const addMessageCreator = () => ({ type: ADD_MESSAGE });

export const changeMessageCreator = (text) => ({
  type: CHANGE_MESSAGE,
  text: text,
});

export default dialogsReducer;
