import { createStore } from "redux";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./modules/rootReducer";

const makeStore: MakeStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());

  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });
