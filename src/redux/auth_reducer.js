import { authAPI } from "../api/api";
import { getProfile } from "./profile_reducer";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERROR = 'SET_ERROR';

let initialState = {
    resultCode: null,
    messages: null,
    data: null,
    isFetching: false,
    isAuth: false,
    error: null
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

export const getCurrentUserData = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));    
  return authAPI.getCurrentUserData()
      .then(curUserData => {
        dispatch(toggleIsFetching(false));
        let { data, resultCode, messages } = curUserData;
        if (resultCode === 0) {
        dispatch(setUserData(data, resultCode, messages, true));
        getProfile(data.id);
      }
      })
  }
}

export const authLogin = (email, password, rememberMe) => (dispatch => {
  dispatch(toggleIsFetching(true));
  authAPI.authLogin(email, password, rememberMe)
    .then(data => {
      dispatch(setError(null));
      dispatch(toggleIsFetching(false));
      if (data.resultCode === 0) {
        dispatch(getCurrentUserData())
        console.log(data.data);
      } else {
        dispatch(setError(data.messages[0]))
      }
      
    })
})

export const authLogOut = () => dispatch => {
  dispatch(toggleIsFetching(true));
  authAPI.LogOut()
    .then(data => {
      dispatch(toggleIsFetching(false));
      if(data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }      
    })
}