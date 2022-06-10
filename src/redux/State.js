let store = {
  _state: {
    ProfilePage: {
      myPostData: [
        { id: 1, post: "Привет, как ты?", countLikes: 10 },
        { id: 2, post: "Это мой первый пост :)", countLikes: 14 },
      ],
      newPostChange: "Samurai",
    },
    DialogsPage: {
      messagesData: [
        { id: 1, messages: "Привет" },
        { id: 2, messages: "Привет.Как дела?" },
        { id: 3, messages: "Норм :) Что расскажешь?" },
        { id: 4, messages: "Отличная погода сегодня" },
      ],
      NewMessage: "Samurai",

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

  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("Samurai");
  },
  addPost() {
    debugger;
    let newPost = {
      id: 5,
      post: this._state.ProfilePage.newPostChange,
      countLikes: 0,
    };
    this._state.ProfilePage.myPostData.push(newPost);
    this._state.ProfilePage.newPostChange = "";
    this._callSubscriber(this._state);
  },

  changeNewPost(newsPost) {
    this._state.ProfilePage.newPostChange = newsPost;
    this._callSubscriber(this._state);
  },

  addMessage() {
    let newMessage = {
      id: 5,
      messages: this._state.DialogsPage.NewMessage,
    };
    this._state.DialogsPage.messagesData.push(newMessage);
    this._state.DialogsPage.NewMessage = "";
    this._callSubscriber(this._state);
  },

  changeMessage(text) {
    this._state.DialogsPage.NewMessage = text;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer; // паттерн наблюдатель
  },
};

export default store;
window.store = store;
