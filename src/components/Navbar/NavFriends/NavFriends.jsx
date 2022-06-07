import classes from "./NavFriends.module.css";
import Friend from "./Friend/Friend";

const NavFriends = (props) => {
  let friend = props.myfriends.map((el) => (
    <Friend name={el.name} id={el.id} />
  ));

  return (
    <div>
      <div className={classes.labelFriends}>Мои друзья</div>
      <div className={classes.friends}>{friend}</div>
    </div>
  );
};

export default NavFriends;
