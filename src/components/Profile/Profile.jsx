import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div>
        <img src="https://image.winudf.com/v2/image/Y29tLnNhbmdhbS5oaXBzdGVyLndhbGxwYXBlcnNfc2NyZWVuc2hvdHNfNF8yMGU5NDk2/screen-4.jpg?fakeurl=1&type=.jpg"></img>
      </div>
      <div>
        <img src="https://avatars.yandex.net/get-music-user-playlist/59900/522453638.1003.652/m1000x1000?1513785396380&webp=false"></img>
      </div>
      <div>
        Аватарка и описание
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
