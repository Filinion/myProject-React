import {store} from "./redux/store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = () => {
    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );
};
rerenderEntireTree();
reportWebVitals();
store.subscribe(rerenderEntireTree);
