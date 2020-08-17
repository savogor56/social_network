const { profileReducer, addPost, deletePost } = require("./profile_reducer");

it('after add post length posts data should be increment', () => {
  // 1. test data
  let action = addPost('test-message');
  let state = {
    postsData: [
      {
        id: 1,
        message: "Hi bro, its my first post!! How are u?",
        likesCount: 2,
        avatar: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg"
      },
      {
        id: 2,
        message: "Hi and me too! I'm ok!",
        likesCount: 1,
        avatar: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
      }
    ],
    newPostText: "",
    userProfile: null,
    isFetching: false,
    profileStatus: ''
  };
  // 2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.postsData.length).toBe(3);
})

it('after delete length should be decrement', () => {
  // 1. test data
  let action = deletePost(1);
  let state = {
    postsData: [ 
      {
        id: 1,
        message: "Hi bro, its my first post!! How are u?",
        likesCount: 2,
        avatar: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg"
      },
      {
        id: 2,
        message: "Hi and me too! I'm ok!",
        likesCount: 1,
        avatar: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
      }
    ],
    newPostText: "",
    userProfile: null,
    isFetching: false,
    profileStatus: ''
  };
  // 2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.postsData.length).toBe(1);
})
