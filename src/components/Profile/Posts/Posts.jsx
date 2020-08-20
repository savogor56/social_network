import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';
import FormAddsPost from './FormAddsPost/FormAddsPost';

const Posts = ({postsData, addPost}) => {
  let postsElements = postsData.map( post => {
    return(
      <Post
        key={post.id}
        message={post.message} 
        avatar={post.avatar}
        likesCount={post.likesCount}
      />
    )
  });
  
  return(
    <div className={classes.posts}>
      <FormAddsPost addPost={addPost} />
      {postsElements}
    </div>   
  )
}

export default Posts;