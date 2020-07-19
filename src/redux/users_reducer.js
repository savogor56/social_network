const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SELECT_PAGE';
const SET_TOTAL_CURRENT_USERS = 'SET_TOTAL_CURRENT_USERS';

let initialState = {
    users: [],
    totalUsers: 1,
    pageSize: 3,
    currentPage: 1
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
        totalUsers: action.totalUsers
      }     
    default: 
      return state;     
  }  
}

export const toggleFollowAC = (followed, userId) => {
  return {
    type: FOLLOW,
    followed: !followed,
    userId
  }
}

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const selectPageAC = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page
  }
}

export const setTotalCurrentsUsersAC = (totalUsers) => {
  return {
    type: SET_TOTAL_CURRENT_USERS,
    totalUsers
  }
}