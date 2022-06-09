import { rerenderEntireTree } from "./../render";

let State = {
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
};

window.State = State;

export let addPost = () => {
  let newPost = {
    id: 5,
    post: State.ProfilePage.newPostChange,
    countLikes: 0,
  };
  State.ProfilePage.myPostData.push(newPost);
  State.ProfilePage.newPostChange = "";
  rerenderEntireTree();
};

export let changeNewPost = (newsPost) => {
  State.ProfilePage.newPostChange = newsPost;
  rerenderEntireTree();
};

export let addMessage = () => {
  let newMessage = {
    id: 5,
    messages: State.DialogsPage.NewMessage,
  };
  State.DialogsPage.messagesData.push(newMessage);
  State.DialogsPage.NewMessage = "";
  rerenderEntireTree();
};

export let changeMessage = (text) => {
  State.DialogsPage.NewMessage = text;
  rerenderEntireTree();
};

export default State;
