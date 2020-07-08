import React from 'react';
import classes from './Posts.module.css';
import FormAddsPost from './FormAddsPost/FormAddsPost';
import Post from './Post/Post';

const Posts = (props) => {
  return(
    <div className={classes.posts}>
      <FormAddsPost addPost={props.addPost} newPostText={props.newPostText} changePost={props.changePost} />
      {props.postsData.map((post) => {
        return(
          <Post
            key={post.id}
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