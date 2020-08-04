import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { toggleIsFollowing, getUsers, follow, unfollow } from '../../redux/users_reducer';
import { Redirect } from 'react-router-dom';

class UsersContainer extends React.Component {
  componentDidMount() {    
    if(this.props.users.length === 0) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  }

  changePage = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }
  
  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />
    }    
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = {
  toggleIsFollowing,
  getUsers,
  follow,
  unfollow
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);