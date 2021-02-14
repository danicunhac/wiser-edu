import { ActionTypes, User } from "./types";

export function addUserRequest(user: User) {
  return {
    type: ActionTypes.addUserRequest,
    payload: {
      user,
    },
  };
}

export function addUserSuccess(user: User) {
  return {
    type: ActionTypes.addUserSuccess,
    payload: {
      user,
    },
  };
}

export function addUserFailureAlreadyLogged(userEmail: string) {
  return {
    type: ActionTypes.addUserFailureAlreadyLogged,
    payload: {
      userEmail,
    },
  };
}

export function addUserFailureNonExists(userEmail: string) {
  return {
    type: ActionTypes.addUserFailureNonExists,
    payload: {
      userEmail,
    },
  };
}
