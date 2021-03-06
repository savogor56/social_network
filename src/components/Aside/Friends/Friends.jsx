import React from 'react';
import classes from './Friends.module.css';

export const Friends = ({friends}) => {

  return (
    <div className={classes.friends_wrapper}>
    <p>Friends</p>
      <div className={classes.friends}>
        {
          friends.map((friend) => {
            return (
              <div key={friend.id} className={classes.friend}>
                  <img src={friend.avatar} alt=""/>
                  <p>{friend.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
