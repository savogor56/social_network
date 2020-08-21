import { getCurrentUserData } from "./auth_reducer";

const SET_INITIALISED = 'social_network/app/SET_INITIALISED';

let initialState = {
  initialised: null
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALISED:
      return {
        ...state,
        initialised: action.initialised
      }
    default:
      return state;
  }
}

export const toggleInitialised = (initialised) => ({
  type: SET_INITIALISED,
  initialised
})

export const initialisedApp = () => async dispatch => {  
  await dispatch(getCurrentUserData());
  dispatch(toggleInitialised(true));
}

