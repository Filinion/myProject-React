import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {

  let OnClickHandler = () => {

    props.addMessage()
  };

  let OnChangeHandler = (e) => {

   props.changeSendMessage(e.currentTarget.value)
  };


  let dialogs = props.DialogPage.dialogsData.map((dialog) => (
      <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messages = props.DialogPage.messagesData.map((el) => {
    return <Message message={el.messages} id={el.id} />;
  });


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogs}</div>
      <div className={classes.messages}>{messages}</div>
      <div className={classes.textMessage}>
        <textarea
          onChange={OnChangeHandler}
          value={props.DialogPage.NewMessage}
          cols={40}
          rows={4}
        ></textarea>
        <div className={classes.btnMessage}>
          <button onClick={OnClickHandler}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
