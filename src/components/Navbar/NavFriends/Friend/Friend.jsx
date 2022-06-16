import { NavLink } from "react-router-dom";
import classes from "./Friend.module.css";
import React from 'react'

const Friend = (props) => {
  let to = "/friend/" + props.id;

  return (
    <div className={classes.friend}>
      <div>
        <img src="https://cs6.pikabu.ru/avatars/1121/x1121129-2144512139.png"></img>
        <div className={classes.textFriend}>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.activeLink : false
            }
            to={to}
          >
            {props.name}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Friend;
