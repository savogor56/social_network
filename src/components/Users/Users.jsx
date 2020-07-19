import React from 'react';
import classes from './Users.module.css'
import User from './User/User';

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];;
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    let usersElements = props.users.map((user) => {
      return(
        <User key={user.id} user={user} toggleFollow={props.toggleFollow} />
      )
    })
  
    return (
      <main className={`${classes.users} wrap`}>
        {usersElements}
        <div className={classes.pagination}>
        {pages.map((p) => {
          return (
            <button 
              onClick={ () => { props.changePage(p) } } 
              className={props.currentPage === p && classes.selected} 
            >
            {p}
            </button>
          )
        })}
        </div>
      </main>    
    )
};

export default Users;
