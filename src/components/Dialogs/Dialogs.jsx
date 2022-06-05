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
  let dialogsData = [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Igor" },
    { id: 3, name: "Valera" },
    { id: 4, name: "Alisa" },
  ];

  let messagesData = [
    { id: 1, messages: "Привет" },
    { id: 2, messages: "Как дела?" },
    { id: 3, messages: "Что расскажешь?" },
    { id: 4, messages: "Отличная погода сегодня" },
  ];

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>

      <div className={classes.messages}>
        <Message message={messagesData[0].messages} />
        <Message message={messagesData[1].messages} />
        <Message message={messagesData[2].messages} />
        <Message message={messagesData[3].messages} />
      </div>
    </div>
  );
};

export default Dialogs;
