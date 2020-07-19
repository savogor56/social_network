import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { toggleFollowAC, setUsersAC, selectPageAC, setTotalCurrentsUsersAC } from '../../redux/users_reducer';
// import UsersAPIComponent from './UsersAPIComponent';
import * as axios from 'axios';

class UsersContainer extends React.Component {
  componentDidMount() {
      axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
      .then((response) => {        
        const users = response.data.items;
        const totalUsers = Math.ceil(response.data.totalCount / 500);
        this.props.setUsers(users);
        this.props.setTotalCountUsers(totalUsers)
      })
  }

  changePage = (p) => {
    this.props.selectPage(p);
      axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
      .then((response) => {
        const users = response.data.items;  
        this.props.setUsers(users); 
      })
  }
  
  render() {    
    return(
      <Users 
        changePage={this.changePage}
        users={this.props.users}
        totalUsers={this.props.totalUsers}
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);