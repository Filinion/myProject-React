import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let myPostData = [
  { id: 1, post: "Привет, как ты?", countLikes: 10 },
  { id: 2, post: "Это мой первый пост :)", countLikes: 14 },
];

let messagesData = [
  { id: 1, messages: "Привет" },
  { id: 2, messages: "Как дела?" },
  { id: 3, messages: "Что расскажешь?" },
  { id: 4, messages: "Отличная погода сегодня" },
];

let dialogsData = [
  { id: 1, name: "Ivan" },
  { id: 2, name: "Igor" },
  { id: 3, name: "Valera" },
  { id: 4, name: "Alisa" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App
      myPostData={myPostData}
      messagesData={messagesData}
      dialogsData={dialogsData}
    />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
