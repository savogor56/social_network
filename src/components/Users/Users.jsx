import React from 'react';
import classes from './Users.module.css'
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    let usersElements = props.users.map((user) => {
      return(
        <User 
          key={user.id} 
          user={user} 
          toggleFollow={props.toggleFollow} 
          toggleIsFollowing={props.toggleIsFollowing}
          followingInProgress={props.followingInProgress}         
        />
      )
    })
  
    return (
      <main className={`${classes.users} wrap`}>
      {props.isFetching && <Preloader /> }
        {usersElements}
        <div className={classes.pagination}>
        {pages.map((p) => {
          return (
            <button
              key={p}
              onClick={ () => { props.changePage(p) } }
              className={props.currentPage === p ? classes.selected : undefined} 
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
