import { createStore, applyMiddleware } from "redux";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const makeStore: MakeStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);
  console.log(store);
  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });
