import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [],
    totalUsersCount: 1,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        users: [...action.users],
        totalUsersCount: action.totalUsersCount ?
        action.totalUsersCount :
        state.totalUsersCount
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      } 
    case TOGGLE_IS_FETCHING:
      return{
        ...state,
        isFetching: action.isFetching
      }     
    case TOGGLE_IS_FOLLOWING:
      return{
        ...state,
        followingInProgress: action.isFollowing ? 
          [...state.followingInProgress, action.userId ] :
          [state.followingInProgress.filter(id => id !== action.userId )]
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

export const setUsers = (users, totalUsersCount) => {
  return {
    type: SET_USERS,
    users,
    totalUsersCount
  }
}

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page
  }
}

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

export const toggleIsFollowing = (isFollowing, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING,
    isFollowing,
    userId
  }
}

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
      .then((data) => {
        dispatch(toggleIsFetching(false))
        const users = data.items;
        const totalUsersCount = Math.ceil(data.totalCount / 50);
        dispatch(setUsers(users, totalUsersCount));
      })
  }
}

export const follow = (followed, userId) => {
  return (dispatch) => {
    usersAPI.follow(userId)
      .then(data => {
        dispatch(toggleIsFollowing(false, userId))
        if (data.resultCode === 0) {
          dispatch(toggleFollow(followed, userId));        }
      })
  }
}

export const unfollow = (followed, userId) => {
  return (dispatch) => {
    usersAPI.unfollow(userId)
      .then(data => {
        dispatch(toggleIsFollowing(false, userId))
        if (data.resultCode === 0) {
          dispatch(toggleFollow(followed, userId));
        }
      })
  }
}
