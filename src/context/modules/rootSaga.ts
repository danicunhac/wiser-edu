import { all } from "redux-saga/effects";

import user from "./authentication/sagas";

export default function* rootSaga() {
  return yield all([user]);
}
