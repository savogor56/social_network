import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { toggleFollow, setUsers, selectPage, toggleIsFetching } from '../../redux/users_reducer';
import { usersAPI } from './../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {    
    if(this.props.users.length === 0) {
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize, this.props.toggleIsFetching, this.props.isFetching)
        .then((data) => {
          if (this.props.isFetching) {
            this.props.toggleIsFetching(this.props.isFetching);
          }          
          const users = data.items;
          const totalUsersCount = Math.ceil(data.totalCount / 50);
          this.props.setUsers(users, totalUsersCount);
          // this.props.setTotalCurrentsUsers(totalUsersCount);
      })
    }
  }

  changePage = (pageNumber) => {
    this.props.selectPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize, this.props.toggleIsFetching, this.props.isFetching)
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
  // setTotalCurrentsUsers,  
  toggleIsFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);