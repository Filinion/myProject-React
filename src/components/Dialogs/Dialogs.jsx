import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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

  let dialogs = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messages = messagesData.map((el) => {
    return <Message message={el.messages} />;
  });

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogs}</div>

      <div className={classes.messages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
