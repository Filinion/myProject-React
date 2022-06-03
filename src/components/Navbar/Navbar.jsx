import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <Link to="/profile">Profile</Link>
      </div>
      <div className={classes.item}>
        <Link to="/dialogs">Dialogs</Link>
      </div>
      <div className={classes.item}>
        <Link to="/News">News</Link>
      </div>
      <div className={classes.item}>
        <Link to="/Music">Music</Link>
      </div>
      <div className={classes.item}>
        <Link to="/Setting">Setting</Link>
      </div>
    </nav>
  );
};

export default Navbar;
