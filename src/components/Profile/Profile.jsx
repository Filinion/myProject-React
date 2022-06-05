import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileIngo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <ProfileIngo />
      <MyPosts />
    </div>
  );
};

export default Profile;
