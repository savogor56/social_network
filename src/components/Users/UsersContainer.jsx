import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { toggleFollow, setUsers, selectPage, setTotalCurrentsUsers, toggleIsFetching } from '../../redux/users_reducer';
import { getUsers } from './../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    if(this.props.users.length === 0) {
      this.props.toggleIsFetching(this.props.isFetching);
      getUsers(this.props.currentPage, this.props.pageSize)
        .then((data) => {      
          const users = data.items;
          const totalUsersCount = Math.ceil(data.totalCount / 50);
          this.props.setUsers(users);
          this.props.setTotalCurrentsUsers(totalUsersCount);
      })
    }
  }

  changePage = (pageNumber) => {
    this.props.toggleIsFetching(this.props.isFetching);
    this.props.selectPage(pageNumber);
      getUsers(pageNumber, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(this.props.isFetching);
        const users = data.items;  
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