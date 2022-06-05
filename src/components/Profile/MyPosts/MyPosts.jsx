import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.MyPosts}>
      Мой пост
      <div>
        <textarea></textarea>
        <br></br>
        <button>Добавить</button>
        <br></br>
        <button>Удалить</button>
      </div>
      <div className={classes.posts}>
        <div>
          <Post message="Привет, как ты?" countLikes="10" />
          <Post message="Это мой первый пост :)" countLikes="15" />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
