import { connect } from 'react-redux';
import Users from './Users';
import { followAC } from '../../redux/users_reducer';

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (followed, userId) => {
      dispatch(followAC(followed, userId));
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);