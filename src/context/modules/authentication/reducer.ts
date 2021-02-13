import { Reducer } from "redux";
import { AuthenticationState } from "./types";

const initialState: AuthenticationState = { user: null };

const authentication: Reducer<AuthenticationState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "ADD_USER": {
      const { user } = action.payload;
      state.user = user;
      return state;
    }
    default: {
      return state;
    }
  }
};

export default authentication;
