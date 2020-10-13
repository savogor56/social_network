import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { toggleIsFollowing, requestUsers, follow, unfollow } from '../../redux/users_reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getCurrentPortion, getPortionSize } from '../../redux/users_selectors';
import { setCurrentPortion, ToggleIsFollowingType } from '../../redux/users_reducer';
import { UserType } from '../../types/types';
import { ReduxStateType } from '../../redux/redux-store';

type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  portionSize: number
  totalUsersCount: number
  currentPage: number
  currentPortion: number
  isFetching: boolean
  followingInProgress: Array<number | undefined>
  isAuth: boolean
}

type MapDispatchPropsType = {
  toggleIsFollowing: (isFollowing: boolean, userId: number) => ToggleIsFollowingType
  requestUsers: (pageNumber: number, pageSize: number, portionNumber?: number) => void
  follow: (followed: boolean, userId: number) => any
  unfollow: (followed: boolean, userId: number) => any
  setCurrentPortion: (portionNumber: number) => void
}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {    
    const {users, requestUsers, currentPage, pageSize} = this.props;
    if(users.length === 0) {
      requestUsers(currentPage, pageSize);
    }
  }

  changePage = (pageNumber: number, portionNumber: number) => {
    const { pageSize, requestUsers } = this.props;
    requestUsers(pageNumber, pageSize, portionNumber);
  }

  // changePortion = (portionNumber: number) => {
  //   const  {setCurrentPortion} = this.props;
  //   setCurrentPortion(portionNumber);
  // }
  
  render() {
    return(
      <>
        <h2>{this.props.pageTitle}</h2>
        <Users
        changePage={this.changePage}
        //changePortion={this.changePortion}
        {...this.props}
      /> 
      </>  
         
    )
  }
}

const mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    portionSize: getPortionSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    currentPortion: getCurrentPortion(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = {
  toggleIsFollowing,
  requestUsers,
  follow,
  unfollow,
  setCurrentPortion
}

export default compose (
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, ReduxStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
  )(UsersContainer)