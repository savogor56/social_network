import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { toggleIsFollowing, requestUsers, follow, unfollow } from '../../redux/users_reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from './../../redux/users_selectors';

class UsersContainer extends React.Component {
  componentDidMount() {    
    const {users, requestUsers, currentPage, pageSize} = this.props;
    if(users.length === 0) {
      requestUsers(currentPage, pageSize);
    }
  }

  changePage = (pageNumber) => {
    const { pageSize, requestUsers } = this.props;
    requestUsers(pageNumber, pageSize);
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