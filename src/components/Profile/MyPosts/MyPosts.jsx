import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {
  let myPost = props.myPostData.map((post) => (
    <Post message={post.post} id={post.id} countLikes={post.countLikes} />
  ));
 let a
  const OnClickHandler = () => {
    props.addPost()
  };

  let onChangeHandler = (e) => {
      props.addTextPost(e.currentTarget.value)
  };

  return (
    <div className={classes.MyPosts}>
      Мой пост
      <div>
        <textarea
          onChange={onChangeHandler}
          // {/*  onChange Добавляет каждый введенный элемент с клавы} */}
          value={props.newPostChange}
        />
        <br></br>
        <button onClick={OnClickHandler}>Добавить</button>
        {/* Добавляет функцию описанную выше для кнопки} */}
      </div>
      <div className={classes.posts}>
        <div>{myPost}</div>
      </div>
    </div>
  );
};

export default MyPosts;
