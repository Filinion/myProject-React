import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogs = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let sendMessage = React.createRef();

  let messages = props.state.messagesData.map((el) => {
    return <Message message={el.messages} id={el.id} />;
  });

  let clickSendMessage = () => {
    props.addMessage();
  };

  let changeSendMessage = () => {
    let text = sendMessage.current.value;
    props.changeMessage(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogs}</div>
      <div className={classes.messages}>{messages}</div>
      <div className={classes.textMessage}>
        <textarea
          ref={sendMessage}
          onChange={changeSendMessage}
          value={props.state.NewMessage}
          cols={40}
          rows={4}
        ></textarea>
        <div className={classes.btnMessage}>
          <button onClick={clickSendMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
