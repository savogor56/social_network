import React from 'react';
import classes from './Users.module.css'
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';

const Users = ({ totalUsersCount, pageSize, currentPage, changePage, users, ...props}) => {
  let usersElements = users.map((user) => (
      <User 
        key={user.id} 
        user={user} 
        {...props} 
      />
    ) 
  );
  
  return (
    <main className={`${classes.users} wrap`}>
    {props.isFetching && <Preloader /> }
      {usersElements}
      <Paginator 
        totalUsersCount={totalUsersCount} 
        pageSize={pageSize} 
        currentPage={currentPage} 
        changePage={changePage}  
      />
    </main>    
  )
};

export default Users;
