import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

let store = {
  _state: {
    ProfilePage: {
      myPostData: [
        { id: 1, post: "Привет, как ты?", countLikes: 10 },
        { id: 2, post: "Это мой первый пост :)", countLikes: 14 },
      ],
      newPostChange: "",
    },
    DialogsPage: {
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
    },
    Navbar: {
      navfriends: [
        { id: 1, name: "Дмитрий" },
        { id: 2, name: "Елена" },
        { id: 3, name: "Артём" },
        { id: 4, name: "Инна" },
      ],
    },
  },
  _callSubscriber() {
    console.log("Samurai");
  },

  subscribe(observer) {
    this._callSubscriber = observer; // паттерн наблюдатель
  },

  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
    this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
    this._state.Navbar = navbarReducer(this._state.Navbar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
