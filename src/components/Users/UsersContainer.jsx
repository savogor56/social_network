import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { toggleIsFollowing, requestUsers, follow, unfollow } from '../../redux/users_reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getCurrentPortion, getPortionSize } from './../../redux/users_selectors';
import { setCurrentPortion } from './../../redux/users_reducer';

class UsersContainer extends React.Component {
  componentDidMount() {    
    const {users, requestUsers, currentPage, pageSize} = this.props;
    if(users.length === 0) {
      requestUsers(currentPage, pageSize);
    }
  }

  changePage = (pageNumber, portionNumber) => {
    const { pageSize, requestUsers } = this.props;
    requestUsers(pageNumber, pageSize, portionNumber);
  }

  changePortion = (portionNumber) => {
    const  {setCurrentPortion} = this.props;
    setCurrentPortion(portionNumber);
  }
  
  render() {
    return(    
      <Users
        changePage={this.changePage}
        changePortion={this.changePortion}
        {...this.props}
      />    
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    portionSize: getPortionSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    currentPortion: getCurrentPortion(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = {
  toggleIsFollowing,
  requestUsers,
  follow,
  unfollow,
  setCurrentPortion
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
  )(UsersContainer)