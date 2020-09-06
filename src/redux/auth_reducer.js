import { authAPI, securityAPI } from "../api/api";
import { getProfile } from "./profile_reducer";
import defaultAvatar from '../assets/img/default_avatar.jpg';

const TOGGLE_IS_FETCHING = 'social_network/auth/TOGGLE_IS_FETCHING';
const SET_USER_DATA = 'social_network/auth/SET_USER_DATA';
const SET_CUR_USER_AVATAR = 'social_network/auth/SET_CUR_USER_AVATAR';
const SET_CAPTCHA_URL = 'social_network/auth/SET_CAPTCHA_URL';


const initialState = {
  resultCode: null,
  messages: null,
  data: null,
  isFetching: false,
  isAuth: false,
  curUserAvatar: defaultAvatar,
  captchaUrl: null
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
    case SET_CUR_USER_AVATAR:
      return {
        ...state,
        curUserAvatar: action.avatar
      }
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.url
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

const setCurUserAvatar = (avatar) => ({
  type: SET_CUR_USER_AVATAR,
  avatar
})

const setCaptchaUrl = (url) => ({
  type: SET_CAPTCHA_URL,
  url
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

export const authLogin = (email, password, rememberMe, captcha) => async (dispatch, getState) => {
  dispatch(toggleIsFetching(true));
  const response = await authAPI.authLogin(email, password, rememberMe, captcha);
  const {resultCode, messages } = response.data;
    dispatch(toggleIsFetching(false));
  if (resultCode === 0) {
      dispatch(getCurrentUserData());
      return {
        isSuccess: true
      }
    } else {
      if(resultCode === 10) {
        dispatch(getCaptchaUrl());
        if(!getState().auth.captchaUrl) {
          return {
            isSuccess: false,
            errorMessage: "Please, enter the captcha"
          }
        }
      }
      return {
        isSuccess: false,
        errorMessage: messages[0]
      }
    }      
}

export const authLogOut = () => async dispatch => {
  dispatch(toggleIsFetching(true));
  const response = await authAPI.LogOut();
  dispatch(toggleIsFetching(false));
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }      
}

export const getCaptchaUrl = () => async dispatch => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.url;
  dispatch(setCaptchaUrl(captchaUrl));
}