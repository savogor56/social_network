import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { toggleFollow, setUsers, selectPage, setTotalCurrentsUsers, toggleIsFetching } from '../../redux/users_reducer';
import * as axios from 'axios';

class UsersContainer extends React.Component {
  componentDidMount() {
    if(this.props.users.length === 0) {
      this.props.toggleIsFetching(this.props.isFetching);
      axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
      .then((response) => {
        this.props.toggleIsFetching(this.props.isFetching);        
        const users = response.data.items;
        const totalUsersCount = Math.ceil(response.data.totalCount / 50);
        this.props.setUsers(users);
        this.props.setTotalCurrentsUsers(totalUsersCount);
      })
    }    
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

let mapDispatchToProps = {
  toggleFollow,
  setUsers,
  selectPage,
  setTotalCurrentsUsers,  
  toggleIsFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);