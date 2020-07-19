import { connect } from 'react-redux';
import Users from './Users';
import { toggleFollowAC, setUsersAC, selectPageAC, setTotalCurrentsUsersAC } from '../../redux/users_reducer';
import UsersClass from './UsersClass';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (followed, userId) => {
      dispatch(toggleFollowAC(followed, userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    selectPage: (page) => {
      dispatch(selectPageAC(page));
    },
    setTotalCountUsers: (totalCountUser) => {
      dispatch(setTotalCurrentsUsersAC(totalCountUser));
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);