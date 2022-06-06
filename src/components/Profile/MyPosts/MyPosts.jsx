import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let myPost = props.myPostData.map((post) => (
    <Post message={post.post} id={post.id} countLikes={post.countLikes} />
  ));

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
        <div>{myPost}</div>
      </div>
    </div>
  );
};

export default MyPosts;
