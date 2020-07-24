import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { toggleFollowAC, setUsersAC, selectPageAC, setTotalCurrentsUsersAC, toggleIsFetchingAC } from '../../redux/users_reducer';
// import UsersAPIComponent from './UsersAPIComponent';
import classes from './Users.module.css';
import * as axios from 'axios';
import loader from '../../assets/img/loader.svg';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(this.props.isFetching);
      axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
      .then((response) => {
        this.props.toggleIsFetching(this.props.isFetching);        
        const users = response.data.items;
        const totalUsersCount = Math.ceil(response.data.totalCount / 500);
        this.props.setUsers(users);
        this.props.setTotalCountUsers(totalUsersCount)
      })
  }

  changePage = (p) => {
    this.props.toggleIsFetching(this.props.isFetching);
    this.props.selectPage(p);
      axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
      .then((response) => {
        this.props.toggleIsFetching(this.props.isFetching);
        const users = response.data.items;  
        this.props.setUsers(users);
      })
  }
  
  render() {    
    return(    
      <Users
        isFetching={this.props.isFetching}
        changePage={this.changePage}
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        toggleFollow={this.props.toggleFollow}
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
    isFetching: state.usersPage.isFetching
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
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    }
  }
}

// let actionCreators = {
//   toggleFollow,
//   setUsers,
//   selectPage,
//   setTotalCurrentsUsers: setTotalCurrentsUsers,  
//   toggleIsFetching
// }

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);