import { Reducer } from "redux";
import { ActionTypes, AuthenticationState } from "./types";

const initialState: AuthenticationState = {
  user: null,
  nonExistentUserCheck: false,
  alreadyLoggedCheck: false,
};

const authentication: Reducer<AuthenticationState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.addUserSuccess: {
      const { user } = action.payload;
      state.alreadyLoggedCheck = false;
      state.nonExistentUserCheck = false;
      state.user = user;
      return state;
    }
    case ActionTypes.addUserFailureAlreadyLogged: {
      state.nonExistentUserCheck = false;
      state.alreadyLoggedCheck = true;
      return state;
    }
    case ActionTypes.addUserFailureNonExists: {
      state.alreadyLoggedCheck = false;
      state.nonExistentUserCheck = true;
      return state;
    }
    default: {
      return state;
    }
  }
};

export default authentication;
