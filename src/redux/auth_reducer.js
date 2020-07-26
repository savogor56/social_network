const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    resultCode: null,
    messages: null,
    data: null,
    isFetching: true,
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
  isFetching: !isFetching
})