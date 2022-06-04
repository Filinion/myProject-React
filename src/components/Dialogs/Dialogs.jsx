import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog}>Ivan</div>
        <div className={classes.dialog}>Igor</div>
        <div className={classes.dialog}>Valera</div>
        <div className={classes.dialog}>Alisa</div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How are You</div>
        <div className={classes.message}>Привет</div>
      </div>
    </div>
  );
};

export default Dialogs;
