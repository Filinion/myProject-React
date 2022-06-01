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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
