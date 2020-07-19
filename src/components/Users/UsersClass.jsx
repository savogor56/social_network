import React from 'react';
import classes from './Users.module.css'
import User from './User/User';
import * as axios from 'axios';

class UsersClass extends React.Component {
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

  getUsers = (p) => {
    this.props.selectPage(p);
      axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
      .then((response) => {
        const users = response.data.items;  
        this.props.setUsers(users); 
      })
  }
  
  render() {    
    let pageCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
    let pages = [];
    console.log(this.props.totalUsers);
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    let usersElements = this.props.users.map((user) => {
      return(
        <User key={user.id} user={user} toggleFollow={this.props.toggleFollow} />
      )
    })
  
    return (
      <main className={`${classes.users} wrap`}>
        <button onClick={this.getUsers}>TEST</button>
        {usersElements}
        <div className={classes.pagination}>
        {pages.map((p) => {
          return (
            <button onClick={ () => { this.getUsers(p) } } className={this.props.currentPage === p && classes.selected} >
            {p}
            </button>
          )
        })}
        </div>
      </main>    
    )
  }
}

export default UsersClass;