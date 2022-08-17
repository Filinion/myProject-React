import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";


const rootReducer = combineReducers({
    ProfilePage:profileReducer,
    DialogPage:dialogsReducer,
    NavbarPage:navbarReducer
})

export let store = createStore(rootReducer)
console.log(store)