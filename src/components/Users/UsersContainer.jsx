import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { toggleIsFollowing, requestUsers, follow, unfollow } from '../../redux/users_reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from './../../redux/users_selectors';

class UsersContainer extends React.Component {
  componentDidMount() {    
    if(this.props.users.length === 0) {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
  }

  changePage = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  }
  
  render() {
    return(    
      <Users
        changePage={this.changePage}
        {...this.props}
      />    
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: state.auth.isAuth
  }
}
// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//     isAuth: state.auth.isAuth
//   }
// }

let mapDispatchToProps = {
  toggleIsFollowing,
  requestUsers,
  follow,
  unfollow
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
  )(UsersContainer)