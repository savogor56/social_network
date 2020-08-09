import Posts from './Posts';
import { connect } from 'react-redux';
import { addPost} from '../../../redux/profile_reducer';

const mapStateToProps = state => ({
      postsData: state.profilePage.postsData
})

const mapDispatchToProps = {
  addPost
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;