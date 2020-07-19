import React from 'react';
import classes from './Users.module.css'
import User from './User/User';
import * as axios from 'axios';

const Users = (props) => {
  let getUsers = () => {
    let n = 3
    if(props.users.length === 0) {
      axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {        
        const users = response.data.items.slice(0, n)
        props.setUsers(users);
      })
    } else {
      
      axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {        
        const start = props.users.length - 1;
        n = n + start;              
        let users = response.data.items.slice(start, n);
        props.setUsers(users);
      })
    }
  }
 
  
  

  let usersElements = props.users.map((user) => {
    return(
      <User key={user.id} user={user} toggleFollow={props.toggleFollow} />
    )
  })

  return (
    <main className={`${classes.users} wrap`}>
      <button onClick={getUsers}>TEST</button>
      {usersElements}
    </main>    
  );
};

export default Users;
