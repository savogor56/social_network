import React from 'react';
import classes from './Users.module.css'
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';

const Users = ({ totalUsersCount, pageSize, currentPage, changePage, users, portionSize, currentPortion, changePortion, ...props}) => {
  let usersElements = users.map((user) => (
      <User 
        key={user.id} 
        user={user} 
        {...props} 
      />
    ) 
  );
  
  return (
    <section className={classes.users}>
    {props.isFetching && <Preloader /> }
      {usersElements}
      <Paginator 
        totalItemsCount={totalUsersCount} 
        pageSize={pageSize} 
        currentPage={currentPage} 
        changePage={changePage}
        changePortion={changePortion}
        portionSize={portionSize}
        currentPortion={currentPortion}
      />
    </section>    
  )
};

export default Users;
