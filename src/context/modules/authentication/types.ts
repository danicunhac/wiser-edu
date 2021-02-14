export enum ActionTypes {
  addUserRequest = "ADD_USER_REQUEST",
  addUserSuccess = "ADD_USER_SUCCESS",
  addUserFailureAlreadyLogged = "ADD_USER_FAILURE_ALREADY_LOGGED",
  addUserFailureNonExists = "ADD_USER_FAILURE_NON_EXISTS",
}

export interface User {
  id: string;
  email: string;
  password: string;
}

export interface AuthenticationState {
  user: User;
  nonExistentUserCheck: boolean;
  alreadyLoggedCheck: boolean;
}
