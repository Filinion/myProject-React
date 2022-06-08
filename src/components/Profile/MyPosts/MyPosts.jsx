import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let myPost = props.myPostData.map((post) => (
    <Post message={post.post} id={post.id} countLikes={post.countLikes} />
  ));

  let newPostElement = React.createRef();

  const OnbuttonClick = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.MyPosts}>
      Мой пост
      <div>
        <textarea ref={newPostElement}></textarea>
        <br></br>
        <button onClick={OnbuttonClick}>Добавить</button>
        <br></br>
        <button>Удалить</button>
      </div>
      <div className={classes.posts}>
        <div>{myPost}</div>
      </div>
    </div>
  );
};

export default MyPosts;
