import { authAPI } from "../api/api";
import { getProfile } from "./profile_reducer";
import defaultAvatar from '../assets/img/default_avatar.jpg';

const TOGGLE_IS_FETCHING = 'social_network/auth/TOGGLE_IS_FETCHING';
const SET_USER_DATA = 'social_network/auth/SET_USER_DATA';
const SET_ERROR = 'social_network/auth/SET_ERROR';
const SET_CUR_USER_AVATAR = 'social_network/auth/SET_ERROR';

let initialState = {
  resultCode: null,
  messages: null,
  data: null,
  isFetching: false,
  isAuth: false,
  error: null,
  curUserAvatar: defaultAvatar
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        data: action.userData,
        resultCode: action.resultCode,
        messages: action.messages,
        isAuth: action.isAuth
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      }
    case SET_CUR_USER_AVATAR:
      return {
        ...state,
        curUserAvatar: action.avatar
      }
    default:
      return state
  }  
}


const setUserData = (userData, resultCode, messages, isAuth) => ({
  type: SET_USER_DATA,
  userData,
  resultCode,
  messages,
  isAuth
})

const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
})

const setError = (error) => ({
  type: SET_ERROR,
  error
})

const setCurUserAvatar = (avatar) => ({
  type: SET_CUR_USER_AVATAR,
  avatar
})

export const getCurrentUserData = () => async dispatch => {
  dispatch(toggleIsFetching(true));    
  const response = await authAPI.getCurrentUserData();      
  dispatch(toggleIsFetching(false));
  const { data, resultCode, messages } = response.data;
  if (resultCode === 0) {
    dispatch(setUserData(data, resultCode, messages, true));
    const profileData = await dispatch(getProfile(data.id));
    const avatar = profileData.photos.large;
    if (avatar) { 
      dispatch(setCurUserAvatar(avatar))
    }
  } 
}

export const authLogin = (email, password, rememberMe) => async dispatch => {
  dispatch(toggleIsFetching(true));
  const response = await authAPI.authLogin(email, password, rememberMe);
  const {resultCode, messages } = response.data;
    dispatch(setError(null));
    dispatch(toggleIsFetching(false));
  if (resultCode === 0) {
      dispatch(getCurrentUserData());
    } else {
      dispatch(setError(messages[0]))
    }      
}

export const authLogOut = () => async dispatch => {
  dispatch(toggleIsFetching(true));
  let response = await authAPI.LogOut();
  dispatch(toggleIsFetching(false));
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }      
}