import { createSelector } from "reselect";
import { ReduxStateType } from "./redux-store";

const getUsersSelector = (state: ReduxStateType) => {
  return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter(item => true);
}); 

export const getPageSize  = (state: ReduxStateType) => {
  return state.usersPage.pageSize
}
export const getPortionSize  = (state: ReduxStateType) => {
  return state.usersPage.portionSize
}

export const getCurrentPage  = (state: ReduxStateType) => {
  return state.usersPage.currentPage
}

export const getCurrentPortion  = (state: ReduxStateType) => {
  return state.usersPage.currentPortion
}

export const getTotalUsersCount  = (state: ReduxStateType) => {
  return state.usersPage.totalUsersCount
}

export const getIsFetching  = (state: ReduxStateType) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress  = (state: ReduxStateType) => {
  return state.usersPage.followingInProgress
}


