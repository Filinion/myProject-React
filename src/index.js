import "./index.css";
import { rerenderEntireTree } from "./render";
import reportWebVitals from "./reportWebVitals";
import State from "./redux/State";

rerenderEntireTree(State);
reportWebVitals();
