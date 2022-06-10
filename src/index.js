import State, { subscribe } from "././redux/State";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost } from "./redux/State";
import { changeNewPost } from "./redux/State";
import { addMessage } from "./redux/State";
import { changeMessage } from "./redux/State";
import reportWebVitals from "./reportWebVitals";

let root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App
        state={State}
        addPost={addPost}
        changeNewPost={changeNewPost}
        addMessage={addMessage}
        changeMessage={changeMessage}
      />
    </BrowserRouter>
  );
};
rerenderEntireTree();
reportWebVitals();
subscribe(rerenderEntireTree);
