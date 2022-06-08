import State from "././redux/State";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost } from "./redux/State";

export let rerenderEntireTree = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App state={State} addPost={addPost} />
    </BrowserRouter>
  );
};
