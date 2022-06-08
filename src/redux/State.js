import { rerenderEntireTree } from "./../render";

let State = {
  ProfilePage: {
    myPostData: [
      { id: 1, post: "Привет, как ты?", countLikes: 10 },
      { id: 2, post: "Это мой первый пост :)", countLikes: 14 },
    ],
  },
  DialogsPage: {
    messagesData: [
      { id: 1, messages: "Привет" },
      { id: 2, messages: "Привет.Как дела?" },
      { id: 3, messages: "Норм :) Что расскажешь?" },
      { id: 4, messages: "Отличная погода сегодня" },
    ],

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
export let addPost = (newMessagesPost) => {
  debugger;
  let newPost = {
    id: 5,
    post: newMessagesPost,
    countLikes: 0,
  };
  State.ProfilePage.myPostData.push(newPost);
  rerenderEntireTree();
};

export default State;
