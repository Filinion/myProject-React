import classes from "./Header.module.css";
import React from 'react'
const Header = () => {
  return (
    <header className={classes.header}>
      <img src="Logo.png"></img>
    </header>
  );
};

export default Header;
