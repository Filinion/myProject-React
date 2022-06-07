import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileIngo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileIngo />
      <MyPosts myPostData={props.state.myPostData} />
    </div>
  );
};

export default Profile;
