import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import api from "../../../services/api";
import {
  addUserFailureAlreadyLogged,
  addUserFailureNonExists,
  addUserRequest,
  addUserSuccess,
} from "./actions";
import { ActionTypes, User } from "./types";

type CheckUserExistenceRequest = ReturnType<typeof addUserRequest>;

interface StateData {
  authentication: {
    user: User;
  };
}

function* checkUser({ payload }: CheckUserExistenceRequest) {
  const { user } = payload;

  const currentUser: User = yield select(
    (state: StateData) => state.authentication.user
  );

  if (currentUser) {
    yield put(addUserFailureAlreadyLogged(user.email));
    return currentUser;
  }

  const existentUsersResponse: AxiosResponse<User[]> = yield call(
    api.get,
    "users"
  );

  const foundUser = existentUsersResponse.data.filter(
    (mappedUser) =>
      mappedUser.email === user.email && mappedUser.password === user.password
  );

  if (foundUser.length !== 0) {
    yield put(addUserSuccess(user));
    return user;
  } else {
    yield put(addUserFailureNonExists(user.email));
    return user;
  }
}

export default all([takeLatest(ActionTypes.addUserRequest, checkUser)]);
