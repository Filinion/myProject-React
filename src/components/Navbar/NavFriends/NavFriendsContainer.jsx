import {connect} from "react-redux";
import NavFriends from "./NavFriends";



const MapStateToProps = (state) => {
    return{
        myfriends:state.NavbarPage.navfriends
    }
}
const mapDispatchToProps = () => {
    return{}
}

export const NavFriendsContainer = connect(MapStateToProps,mapDispatchToProps)(NavFriends)