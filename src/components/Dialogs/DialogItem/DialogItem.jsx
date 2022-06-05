import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = (props) => {
  let to = "/dialogs/" + props.id;
  return (
    <div className={classes.items}>
      <NavLink
        className={(navData) => (navData.isActive ? classes.activeLink : false)}
        to={to}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
