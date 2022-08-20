import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {


  const OnClickHandler = () => {
    props.addPost()
  };

  let onChangeHandler = (e) => {
      props.addTextPost(e.currentTarget.value)
  };
    let myPost = props.ProfilePage.myPostData.map((post) => (
        <Post message={post.post} id={post.id} countLikes={post.countLikes} />
    ));
  return (
    <div className={classes.MyPosts}>
      Мой пост
      <div>
        <textarea
          onChange={onChangeHandler}
          value={props.ProfilePage.newPostChange}
        />
        <br></br>
        <button onClick={OnClickHandler}>Добавить</button>
      </div>
      <div className={classes.posts}>
        <div>{myPost}</div>
      </div>
    </div>
  );
};

export default MyPosts;
