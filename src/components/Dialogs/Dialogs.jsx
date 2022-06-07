import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messages = props.state.messagesData.map((el) => {
    return <Message message={el.messages} id={el.id} />;
  });

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogs}</div>
      <div className={classes.messages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
