const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SELECT_PAGE';
const SET_TOTAL_CURRENT_USERS = 'SET_TOTAL_CURRENT_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    totalUsersCount: 1,
    pageSize: 3,
    currentPage: 1,
    isFetching: false
  }


export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if(action.userId === user.id) {
            return {...user, followed: action.followed}
          }
          return user;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    case SET_TOTAL_CURRENT_USERS:
      return{
        ...state,
        totalUsersCount: action.totalUsersCount
      }     
    case TOGGLE_IS_FETCHING:
      return{
        ...state,
        isFetching: action.isFetching
      }     
    default: 
      return state;     
  }  
}

export const toggleFollow = (followed, userId) => {
  return {
    type: FOLLOW,
    followed: !followed,
    userId
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const selectPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page
  }
}

export const setTotalCurrentsUsers = (totalUsersCount) => {
  return {
    type: SET_TOTAL_CURRENT_USERS,
    totalUsersCount
  }
}

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: !isFetching
  }
}