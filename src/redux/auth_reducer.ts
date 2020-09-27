import { authAPI, securityAPI } from "../api/api";
import { getProfile } from "./profile_reducer";
import defaultAvatar from '../assets/img/default_avatar.jpg';

const TOGGLE_IS_FETCHING = 'social_network/auth/TOGGLE_IS_FETCHING';
const SET_USER_DATA = 'social_network/auth/SET_USER_DATA';
const SET_CUR_USER_AVATAR = 'social_network/auth/SET_CUR_USER_AVATAR';
const SET_CAPTCHA_URL = 'social_network/auth/SET_CAPTCHA_URL';


export type UserDataType = {
  id: number
  email: string
  login: string
}

const initialState = {
  resultCode: null as number | null,
  messages: null as Array<string> | null,
  data: null as UserDataType | null,
  isFetching: false,
  isAuth: false,
  curUserAvatar: defaultAvatar,
  captchaUrl: null as string | null
}

type ActionType = SetUserDataType | ToggleIsFetchingType | SetCurUserAvatarType | SetCaptchaUrlType

export const authReducer = (state = initialState, action: ActionType): typeof initialState => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case SET_CUR_USER_AVATAR:
      return {
        ...state,
        curUserAvatar: action.payload
      }
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.payload
      }
    default:
      return state
  }  
}

type SetUserDataType = {
  type: typeof SET_USER_DATA
  payload: {
    data: UserDataType | null
    resultCode: number | null
    messages: Array<string> | null
    isAuth: boolean
  }
}

const setUserData = (userData: UserDataType | null, resultCode: number | null, messages: Array<string> | null, isAuth: boolean): SetUserDataType => ({
  type: SET_USER_DATA,
  payload: {
    data: userData,
    resultCode,
    messages,
    isAuth
  }
})

type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING
  payload: boolean
}

const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching
})

type SetCurUserAvatarType = {
  type: typeof SET_CUR_USER_AVATAR
  payload: string
}

const setCurUserAvatar = (avatar: string): SetCurUserAvatarType => ({
  type: SET_CUR_USER_AVATAR,
  payload: avatar
})

type SetCaptchaUrlType = {
  type: typeof SET_CAPTCHA_URL
  payload: string
}

const setCaptchaUrl = (url: string): SetCaptchaUrlType => ({
  type: SET_CAPTCHA_URL,
  payload: url
})

export const getCurrentUserData = () => async (dispatch: any) => {
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

export const authLogin = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any, getState: any) => {
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

export const authLogOut = () => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  const response = await authAPI.LogOut();
  dispatch(toggleIsFetching(false));
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }      
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.url;
  dispatch(setCaptchaUrl(captchaUrl));
}