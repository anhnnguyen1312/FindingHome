import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { getAuthToken } from "../src/api/cookieServices";
import { getUserAction } from "../src/redux/store/action/authenAction";
import {
  postAction,
  homepagePostAction,
} from "../src/redux/store/action/postAction";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { store, persistor } from "./redux/store";

const Root = () => {
  useEffect(() => {
    const cookie = getAuthToken();
    console.log("cookie", cookie);
    cookie && store.dispatch(getUserAction(cookie));
    store.dispatch(postAction());
    store.dispatch(homepagePostAction());
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
