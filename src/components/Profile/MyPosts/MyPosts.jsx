import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {
  addPostActionCreator,
  changeNewPostCreator,
} from "./../../../redux/State";

const MyPosts = (props) => {
  let myPost = props.myPostData.map((post) => (
    <Post message={post.post} id={post.id} countLikes={post.countLikes} />
  ));

  const OnbuttonClick = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (e) => {
    let post = e.target.value; // Берем значения по ссылке из текст ареа
    props.dispatch(changeNewPostCreator(post)); // Функция добавления поста в State.ProfilePage.newPostChange(Виртуально, пока что)
  };

  return (
    <div className={classes.MyPosts}>
      Мой пост
      <div>
        <textarea
          onChange={onPostChange}
          // {/*  onChange Добавляет каждый введенный элемент с клавы} */}
          value={props.newPostChange}
        />
        <br></br>
        <button onClick={OnbuttonClick}>Добавить</button>
        {/* Добавляет функцию описанную выше для кнопки} */}
      </div>
      <div className={classes.posts}>
        <div>{myPost}</div>
      </div>
    </div>
  );
};

export default MyPosts;
