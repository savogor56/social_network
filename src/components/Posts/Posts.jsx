import React from 'react';
import classes from './Posts.module.css';
import FormAddsPost from '../FormAddsPost/FormAddsPost';
import Post from '../Post/Post';

let users = {
  user1: {
    avatar: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
  },
  user2: {
    avatar: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg"
  }
}

const Posts = () => {
  return(
    <div className={`${classes.posts} wrap`}>
      <FormAddsPost />
      <Post message="message хуеседж" avatar={users.user2.avatar}/>    
      <Post message="не хуеседж" avatar={users.user1.avatar}/>    
      <Post message="не хуеседж" avatar={users.user1.avatar}/>    
    </div>   
  )
}

export default Posts;