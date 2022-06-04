import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";

import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="Profile" element={<Profile />} />
          <Route path="Dialogs" element={<Dialogs />} />
          <Route path="News" element={<News />} />
          <Route path="Music" element={<Music />} />
          <Route path="Setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
