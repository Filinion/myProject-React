import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.Navbar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/Profile/"
            element={
              <Profile
                state={props.state.ProfilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/Dialogs/*"
            element={
              <Dialogs
                state={props.state.DialogsPage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/News/" element={<News />} />
          <Route path="/Music/" element={<Music />} />
          <Route path="/Setting/" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
