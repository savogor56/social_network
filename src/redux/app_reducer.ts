import { getCurrentUserData } from "./auth_reducer";

const SET_INITIALISED = 'social_network/app/SET_INITIALISED';

let initialState = {
  initialised: null as boolean | null
};

type ActionType = ToggleInitialisedType

export const appReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_INITIALISED:
      return {
        ...state,
        initialised: action.payload
      }
    default:
      return state;
  }
}

type ToggleInitialisedType = {
  type: typeof SET_INITIALISED,
  payload: boolean
}

export const toggleInitialised = (initialised: boolean): ToggleInitialisedType => ({
  type: SET_INITIALISED,
  payload: initialised
})

export const initialisedApp = () => async (dispatch: any) => {  
  await dispatch(getCurrentUserData());
  dispatch(toggleInitialised(true));
}

