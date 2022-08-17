let ADD_MESSAGE = "ADD-MESSAGE";
let CHANGE_MESSAGE = "CHANGE-MESSAGE";


const initialState = {
  messagesData: [
    { id: 1, messages: "Привет" },
    { id: 2, messages: "Привет.Как дела?" },
    { id: 3, messages: "Норм :) Что расскажешь?" },
    { id: 4, messages: "Отличная погода сегодня" },
  ],
  NewMessage: "",

  dialogsData: [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Igor" },
    { id: 3, name: "Valera" },
    { id: 4, name: "Alisa" },
  ],
}

const dialogsReducer = (state = initialState, action) => {
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
