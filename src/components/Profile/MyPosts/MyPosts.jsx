import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let myPost = props.myPostData.map((post) => (
    <Post message={post.post} id={post.id} countLikes={post.countLikes} />
  ));

  let newPostElement = React.createRef();

  const OnbuttonClick = () => {
    props.addPost(); // Функция создания обектра с ввенным значением
    // props.changeNewPost(""); // Зануляем значение

    // newPostElement.current.value = ""; // Сбрасываем значение текст ареа на 0 посе ввода
  };

  let onPostChange = () => {
    let post = newPostElement.current.value; // Берем значения по ссылке из текст ареа
    props.changeNewPost(post); // Функция добавления поста в State.ProfilePage.newPostChange(Виртуально, пока что)
  };

  return (
    <div className={classes.MyPosts}>
      Мой пост
      <div>
        <textarea
          ref={newPostElement}
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
