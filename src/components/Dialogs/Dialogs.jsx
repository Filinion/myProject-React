import { Link } from "react-router-dom";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog}>
          <Link to="/dialogs/1">Ivan</Link>
        </div>
        <div className={classes.dialog}>
          <Link to="/dialogs/2">Igor</Link>
        </div>
        <div className={classes.dialog}>
          <Link to="/dialogs/3">Valera</Link>
        </div>
        <div className={classes.dialog}>
          <Link to="/dialogs/4">Alisa</Link>
        </div>
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
