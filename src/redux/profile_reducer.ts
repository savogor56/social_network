import { ThunkAction } from "redux-thunk";
import { profileAPI } from "../api/api";
import { PhotosType, ProfileType } from "../types/types";
import { ReduxStateType } from "./redux-store";

const ADD_POST = "social_network/profile/ADD_POST";
const UPDATE_NEW_POST_TEXT = "social_network/profile/UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "social_network/profile/SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "social_network/profile/TOGGLE_IS_FETCHING";
const SET_PROFILE_STATUS = "social_network/profile/SET_PROFILE_STATUS";
const DELETE_POST = "social_network/profile/DELETE_POST";
const SAVE_AVATAR_SUCCESS = "social_network/profile/SAVE_AVATAR_SUCCESS";

const initialState = {
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
  userProfile: null as ProfileType | null,
  isFetching: false,
  profileStatus: ''
}

type ActionType = AddPostType | DeletePostType | UpdateNewPostTextType | SetUserProfileType | 
ToggleIsFetchingType | SetProfileStatusType | SaveAvatarSuccessType

export const profileReducer = (state = initialState, action: ActionType): typeof initialState=> {
  switch(action.type) {
    case ADD_POST:
      const newPost = {
        id: state.postsData[state.postsData.length - 1].id + 1,
        message: action.payload,
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
        postsData: state.postsData.filter((item) => item.id !== action.payload)
      };
    case UPDATE_NEW_POST_TEXT: 
      return {
        ...state,
        newPostText: action.payload
      };      
    case SET_USER_PROFILE: 
      return {
        ...state,
        userProfile: action.payload
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case SET_PROFILE_STATUS:
      return {
        ...state,
        profileStatus: action.payload
      }
    case SAVE_AVATAR_SUCCESS:
      return {
        ...state,
        userProfile: {...state.userProfile, photos: action.payload}
      }
    default: 
      return state;
  }  
}

type AddPostType = {
  type: typeof ADD_POST
  payload: string
}

export const addPost = (postMessage: string): AddPostType => ({
    type: ADD_POST,
    payload: postMessage
});

type DeletePostType = {
  type: typeof DELETE_POST
  payload: number
}

export const deletePost = (id: number): DeletePostType => ({
    type: DELETE_POST,
    payload: id
});

type UpdateNewPostTextType = {
  type: typeof UPDATE_NEW_POST_TEXT
  payload: string
}

export const updateNewPostText = (text: string): UpdateNewPostTextType => ({
    type: UPDATE_NEW_POST_TEXT,
    payload: text
});

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  payload: ProfileType
}

const setUserProfile = (profileData: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  payload: profileData
})

type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING
  payload: boolean
}

const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching
})

type SetProfileStatusType = {
  type: typeof SET_PROFILE_STATUS
  payload: string
}

const setProfileStatus = (profileStatus: string): SetProfileStatusType => ({
  type: SET_PROFILE_STATUS,
  payload: profileStatus
})

type SaveAvatarSuccessType = {
  type: typeof SAVE_AVATAR_SUCCESS
  payload: PhotosType
}

const saveAvatarSucces = (photos: PhotosType): SaveAvatarSuccessType => ({
  type: SAVE_AVATAR_SUCCESS,
  payload: photos
});

type ThunkType = ThunkAction<Promise<any>, ReduxStateType, unknown, ActionType>

export const getProfile = (userId: number): ThunkType => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await profileAPI.getProfile(userId)
  dispatch(toggleIsFetching(false));
  dispatch(setUserProfile(data));
  return data;
}

export const getProfileStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getProfileStatus(userId);
  dispatch(setProfileStatus(data));
}

export const putProfileStatus = (profileStatus: string): ThunkType => async (dispatch) => {
  const data = await profileAPI.putProfileStatus(profileStatus)
  if (!data.resultCode) {
    dispatch(setProfileStatus(profileStatus));
  }
}

export const saveAvatar = (file: string): ThunkType => async (dispatch) => {
  const data = await profileAPI.saveAvatar(file);
  if (data.resultCode === 0) {
    dispatch(saveAvatarSucces(data.data.photos));
  }
} 

export const saveProfile = (profileInfo: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.data?.id;
  const data = await profileAPI.saveProfile(profileInfo);
  if (data.resultCode === 0 && userId ) {
    dispatch(getProfile(userId));
    return { isSuccess: true}
  } else {
    return {
      isSuccess: false,
      errorMessage: data.messages[0]
    }
  }
} 