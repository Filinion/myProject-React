import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Post
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>
        <div>
          <Post message="Привет, как ты?" countLikes="Like 10" />
          <Post message="Это мой первый пост :)" countLikes="Like 15" />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
