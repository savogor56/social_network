import { authAPI } from "../api/api";
import { getProfile } from "./profile_reducer";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    resultCode: null,
    messages: null,
    data: null,
    isFetching: false,
    isAuth: false
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
    default:
      return state
  }  
}


export const setUserData = (userData, resultCode, messages) => ({
  type: SET_USER_DATA,
  userData,
  resultCode,
  messages,
  isAuth: !resultCode
})

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
})

export const getCurrentUserData = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));    
    authAPI.getCurrentUserData()
      .then(curUserData => {
        dispatch(toggleIsFetching(false));
        let { data, resultCode, messages } = curUserData;
        dispatch(setUserData(data, resultCode, messages));
        getProfile(data.id);
      })
  }
}

export const authLogin = (email, password, rememberMe) => (dispatch => {
  dispatch(toggleIsFetching(true));
  authAPI.authLogin(email, password, rememberMe)
    .then(data => {
      dispatch(toggleIsFetching(false));
      console.log(data);
    })
}) 