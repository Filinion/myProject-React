import classes from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.activeLink : false
          }
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.activeLink : false
          }
          to="/dialogs"
        >
          Dialogs
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.activeLink : false
          }
          to="/News"
        >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.activeLink : false
          }
          to="/Music"
        >
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.activeLink : false
          }
          to="/Setting"
        >
          Setting
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
