import React from 'react';
import classes from './Posts.module.css';
import FormAddsPost from './FormAddsPost/FormAddsPost';
import Post from './Post/Post';

const Posts = (props) => {
  return(
    <div className={classes.posts}>
      <FormAddsPost />
      {props.postsData.map((post) => {
        return(
          <Post 
            message={post.message} 
            avatar={post.avatar}
            likesCount={post.likesCount0}
          />
        )
      })}
    </div>   
  )
}

export default Posts;