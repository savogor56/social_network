import Posts from './Posts';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';  

const mapStateToProps = state => {
  return (
    {
      postsData: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText
    }
  )
}

const mapDispatchToProps = (dispatch) => {
  return (
    {
      addPost: () => {
        let action = addPostActionCreator();
        dispatch(action);
      },
      onPostChange: (text) => {
        let action = updateNewPostTextActionCreator(text);
        dispatch(action);
      }
    }
  )
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;