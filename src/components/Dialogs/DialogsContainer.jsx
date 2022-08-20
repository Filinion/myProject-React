import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageCreator, changeMessageCreator} from "../../redux/dialogsReducer";


const mapStateToProps = (state) => {
    return {
        DialogPage: state.DialogPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeSendMessage: (text) => dispatch(changeMessageCreator(text)),
        addMessage: () => dispatch(addMessageCreator())
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)