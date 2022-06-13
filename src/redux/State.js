let ADD_POST = "ADD-POST";
let CHANGE_NEW_POST = "CHANGE-NEW-POST";
let ADD_MESSAGE = "ADD-MESSAGE";
let CHANGE_MESSAGE = "CHANGE-MESSAGE";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        post: this._state.ProfilePage.newPostChange,
        countLikes: 0,
      };
      this._state.ProfilePage.myPostData.push(newPost);
      this._state.ProfilePage.newPostChange = "";
      this._callSubscriber(this._state);
    } else if (action.type === CHANGE_NEW_POST) {
      this._state.ProfilePage.newPostChange = action.newsPost;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 5,
        messages: this._state.DialogsPage.NewMessage,
      };
      this._state.DialogsPage.messagesData.push(newMessage);
      this._state.DialogsPage.NewMessage = "";
      this._callSubscriber(this._state);
    } else if (action.type === CHANGE_MESSAGE) {
      this._state.DialogsPage.NewMessage = action.text;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const changeNewPostCreator = (post) => ({
  type: CHANGE_NEW_POST,
  newsPost: post,
});

export const addMessageCreator = () => ({ type: ADD_MESSAGE });

export const changeMessageCreator = (text) => ({
  type: CHANGE_MESSAGE,
  text: text,
});

export default store;
window.store = store;
