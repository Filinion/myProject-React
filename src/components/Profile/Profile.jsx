import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileIngo from "./ProfileInfo/ProfileInfo";
import React from 'react'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <ProfileIngo />
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
