import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator, changeNewPostCreator} from "../../../redux/profileReducer";

const mapStateToProps = (state) => {

    return {
        ProfilePage: state.ProfilePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        addTextPost: (text) => dispatch(changeNewPostCreator(text))
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)