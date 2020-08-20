import { connect } from "react-redux";
import Aside from "./Aside";

const mapStateToProps = (state) => ({
    menu: state.aside.menu,
    friends: state.aside.friends
})

export default connect(mapStateToProps)(Aside)