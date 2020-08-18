import { profileAPI } from "../api/api";

const ADD_POST = "social_network/profile/ADD_POST";
const UPDATE_NEW_POST_TEXT = "social_network/profile/UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "social_network/profile/SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "social_network/profile/TOGGLE_IS_FETCHING";
const SET_PROFILE_STATUS = "social_network/profile/SET_PROFILE_STATUS";
const DELETE_POST = "social_network/profile/DELETE_POST";

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
    case ADD_POST:
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
    case UPDATE_NEW_POST_TEXT: 
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
    type: ADD_POST,
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
    type: UPDATE_NEW_POST_TEXT,
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

export const getProfile = userId => async dispatch => {
  dispatch(toggleIsFetching(true));
  const data = await profileAPI.getProfile(userId)
  dispatch(toggleIsFetching(false));
  dispatch(setUserProfile(data));
}

export const getProfileStatus = (userId) => async dispatch => {
  const data = await profileAPI.getProfileStatus(userId);
  dispatch(setProfileStatus(data));
}

export const putProfileStatus = (profileStatus) => async dispatch => {
  let data = await profileAPI.putProfileStatus(profileStatus)
  if (!data.resultCode) {
    dispatch(setProfileStatus(profileStatus));
  }
}