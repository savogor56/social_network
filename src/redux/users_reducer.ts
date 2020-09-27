import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object_helpers";
import { PhotosType } from "./profile_reducer";

const TOGGLE_FOLLOWED = 'social_network/users/TOGGLE_FOLLOWED';
const SET_USERS = 'social_network/users/SET_USERS';
const SET_CURRENT_PAGE = 'social_network/users/SET_CURRENT_PAGE';
const SET_CURRENT_PORTION = 'social_network/users/SET_CURRENT_PORTION';
const TOGGLE_IS_FETCHING = 'social_network/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'social_network/users/TOGGLE_IS_FOLLOWING';

export type UserType = {
  id: number
  name: string
  status: string
  photos: PhotosType
  followed: boolean
}

const initialState = {
    users: [] as Array<UserType>,
    totalUsersCount: 1,
    pageSize: 5,
    portionSize: 10,
    currentPortion: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
  }

type ActionType = ToggleFollowType | SetUsersType | SetCurrentPageType | SetCurrentPortionType |
ToggleIsFetchingType | ToggleIsFollowingType


export const usersReducer = (state = initialState, action: ActionType) => {
  switch(action.type) {
    case TOGGLE_FOLLOWED:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload.userId, 'id', { followed: action.payload.followed }),
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.payload.users],
        totalUsersCount: action.payload.totalUsersCount ?
        action.payload.totalUsersCount :
        state.totalUsersCount
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      } 
    case SET_CURRENT_PORTION:
      return {
        ...state,
        currentPortion: action.payload
      } 
    case TOGGLE_IS_FETCHING:
      return{
        ...state,
        isFetching: action.payload
      }     
    case TOGGLE_IS_FOLLOWING:
      return{
        ...state,
        followingInProgress: action.payload.isFollowing ? 
          [...state.followingInProgress, action.payload.userId ] :
          [state.followingInProgress.filter(id => id !== action.payload.userId )]
      }     
    default: 
      return state;     
  }  
}

type ToggleFollowType = {
  type: typeof TOGGLE_FOLLOWED
  payload: {
    followed: boolean
    userId: number
  }
}

export const toggleFollow = (followed: boolean, userId: number): ToggleFollowType => {
  return {
    type: TOGGLE_FOLLOWED,
    payload: {
      followed: !followed,
      userId
    }
  }
}

type SetUsersType = {
  type: typeof SET_USERS
  payload: {
    users: Array<UserType>
    totalUsersCount: number
  }
}

export const setUsers = (users: Array<UserType>, totalUsersCount: number)  => {
  return {
    type: SET_USERS,
    payload: {
      users,
      totalUsersCount
    }
  }
}

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  payload: number
}

export const setCurrentPage = (page: number): SetCurrentPageType => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page
  }
}

type SetCurrentPortionType = {
  type: typeof SET_CURRENT_PORTION
  payload: number
}

export const setCurrentPortion = (portionNumber: number): SetCurrentPortionType => {
  return {
    type: SET_CURRENT_PORTION,
    payload: portionNumber
  }
}

type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING
  payload: boolean
}

const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType=> {
  return {
    type: TOGGLE_IS_FETCHING,
    payload: isFetching
  }
}

type ToggleIsFollowingType = {
  type: typeof TOGGLE_IS_FOLLOWING
  payload: {
    isFollowing: boolean
    userId: number
  }
}

export const toggleIsFollowing = (isFollowing: boolean, userId: number): ToggleIsFollowingType => {
  return {
    type: TOGGLE_IS_FOLLOWING,
    payload:{
      isFollowing,
      userId
    }
  }
}

export const requestUsers = (currentPage: number, pageSize: number, currentPortion: number) => async (dispatch: any) => {
  dispatch(setCurrentPortion(currentPortion));
  dispatch(setCurrentPage(currentPage));
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  const users = data.items;
  const totalUsersCount = data.totalCount
  dispatch(setUsers(users, totalUsersCount));
} 

const followUnfollowFlow = async (dispatch:any, followed: boolean, userId: number, apiMethod: (userId: number) => Promise<any>) => {
  const data = await apiMethod(userId);
  dispatch(toggleIsFollowing(false, userId));
  if (data.resultCode === 0) {
    dispatch(toggleFollow(followed, userId));        
  }
}

export const follow = (followed: boolean, userId: number) => (dispatch: any) => {
  const apiMethod = usersAPI.follow.bind(this);
  followUnfollowFlow(dispatch, followed, userId, apiMethod);
  
}

export const unfollow = (followed: boolean, userId: number) => (dispatch: any) => {
  const apiMethod = usersAPI.unfollow.bind(this);
  followUnfollowFlow(dispatch, followed, userId, apiMethod);
}
