import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let myPostData = [
    { id: 1, post: "Привет, как ты?", countLikes: 10 },
    { id: 2, post: "Это мой первый пост :)", countLikes: 14 },
  ];

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
          <Post
            message={myPostData[0].post}
            countLikes={myPostData[0].countLikes}
          />
          <Post
            message={myPostData[1].post}
            countLikes={myPostData[1].countLikes}
          />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
