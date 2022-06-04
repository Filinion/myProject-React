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
          Профиль
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.activeLink : false
          }
          to="/dialogs"
        >
          Сообщения
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.activeLink : false
          }
          to="/News"
        >
          Новости
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.activeLink : false
          }
          to="/Music"
        >
          Музыка
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.activeLink : false
          }
          to="/Setting"
        >
          Настройки
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
