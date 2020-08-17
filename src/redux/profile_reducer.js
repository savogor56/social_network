import { profileAPI } from "../api/api";

const add_post = "add-post";
const update_new_post_text = "update-new-post-text";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const DELETE_POST = "DELETE_POST";

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
  isFetching: false,
  profileStatus: ''
}



export const profileReducer = (state = initialState, action) => {
  switch(action.type) {       
    case add_post:
      let newPost = {
        id: state.postsData[state.postsData.length - 1].id + 1,
        message: action.postMessage,
        likesCount: 0,
        avatar: ''
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ""
      };
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((item) => item.id !== action.id)
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
    case SET_PROFILE_STATUS:
      return {
        ...state,
        profileStatus: action.profileStatus
      }     
    default: 
      return state;
  }  
}

export const addPost = (postMessage) => {
  return {
    type: add_post,
    postMessage
  }
};

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id
  }
};

export const updateNewPostText = (text) => {
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
  isFetching
})

export const setProfileStatus = (profileStatus) => ({
  type: SET_PROFILE_STATUS,
  profileStatus
})

export const getProfile = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    profileAPI.getProfile(userId)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUserProfile(data));
      })
  }
}

export const getProfileStatus = (userId) => {
  return dispatch => {
    profileAPI.getProfileStatus(userId)
      .then(data => {
        dispatch(setProfileStatus(data));
      })
  }
}

export const putProfileStatus = (profileStatus) => {
  return dispatch => {
    profileAPI.putProfileStatus(profileStatus)
      .then(data => {
        if (!data.resultCode) {
          dispatch(setProfileStatus(profileStatus));
        }
      })
  }
}