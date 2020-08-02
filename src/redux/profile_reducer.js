const add_post = "add-post";
const update_new_post_text = "update-new-post-text";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
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
  isFetching: false
}



export const profileReducer = (state = initialState, action) => {
  switch(action.type) {       
    case add_post:
      let newPost = {
        id: state.postsData[state.postsData.length - 1].id + 1,
        message: state.newPostText,
        likesCount: 0,
        avatar: state.users.user1.avatar
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ""
      };
    case update_new_post_text: 
      return {
        ...state,
        newPostText: action.newText
      };      
    case SET_USER_PROFILE: 
      return {
        ...state,
        userProfile: action.profileData
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }     
    default: 
      return state;
  }  
}

export const addPostActionCreator = () => {
  return {
    type: add_post
  }
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: update_new_post_text,
    newText: text
  }
};

export const setUserProfile = (profileData) => ({
  type: SET_USER_PROFILE,
  profileData
})

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: !isFetching
})