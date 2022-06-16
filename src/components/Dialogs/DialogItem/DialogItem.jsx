import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";
import React from 'react'

const DialogItem = (props) => {
  let to = "/dialogs/" + props.id;
  return (
    <div className={classes.dialogMen}>
      <div>
        <img
          src="https://cs6.pikabu.ru/avatars/1121/x1121129-2144512139.png"
          alt=""
        />
      </div>
      <div className={classes.items}>
        <NavLink
          className={(navData) => (navData.isActive ? classes.activeLink : "")}
          to={to}
        >
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
