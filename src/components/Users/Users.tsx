import React from 'react';
import classes from './Users.module.css'
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import { UserType } from '../../types/types';

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  changePage: (p: number, portionNumber: number) => void
  portionSize: number
  currentPortion: number
  users: Array<UserType>
  isFetching: boolean
  unfollow: Function
  follow: Function
  followingInProgress: Array<number | undefined>
  toggleIsFollowing: Function
 // changePortion: Function
}

const Users: React.FC<PropsType> = ({ totalUsersCount, pageSize, currentPage, changePage, users, portionSize, currentPortion, ...props}) => {
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
        portionSize={portionSize}
        currentPortion={currentPortion}
      />
    </section>    
  )
};

export default Users;
