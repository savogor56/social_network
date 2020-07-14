import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';
import FormAddsPostContainer from './FormAddsPost/FormAddsPostContainer';

const Posts = (props) => {
  let postsElements = props.postsData.map((post) => {
    return(
      <Post
        key={post.id}
        message={post.message} 
        avatar={post.avatar}
        likesCount={post.likesCount0}
      />
    )
  });
  
  return(
    <div className={classes.posts}>
      <FormAddsPostContainer dispatch={props.dispatch} newPostText={props.newPostText} />
      {postsElements}
    </div>   
  )
}

export default Posts;