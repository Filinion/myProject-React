import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator, changeNewPostCreator} from "../../../redux/profileReducer";

const mapStateToProps = (state) => {
    debugger
    return {
        myPostData: state.ProfilePage.myPostData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        addTextPost: (text) => dispatch(changeNewPostCreator(text))
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)