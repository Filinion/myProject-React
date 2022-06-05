import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

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

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Ivan" id="1" />
        <DialogItem name="Igor" id="2" />
        <DialogItem name="Valera" id="3" />
        <DialogItem name="Alisa" id="4" />
      </div>

      <div className={classes.messages}>
        <Message message="Привет" />
        <Message message="Как дела?" />
        <Message message="Что расскажешь?" />
        <Message message="Отличная погода сегодня" />
      </div>
    </div>
  );
};

export default Dialogs;
