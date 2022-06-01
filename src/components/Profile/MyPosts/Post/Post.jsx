import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.item}>
      <img src="https://cs6.pikabu.ru/avatars/1121/x1121129-2144512139.png"></img>
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
