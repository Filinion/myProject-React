import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileIngo from "./ProfileInfo/ProfileInfo";
import React from 'react'

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileIngo />
      <MyPosts myPostData={props.state.myPostData} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
