import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken } from "../src/api/cookieServices";
import { getUserAction } from "../src/redux/store/action/authenAction";
import {
  postAction,
  postActionDemo,
} from "../src/redux/store/action/postAction";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

//Provider dùng để khởi động  reaCT VÀ REDUX SONG SONG, KHI REACt render thì truyền state vào redux bằng biến store
//PersistGate delay quá trình render UI app của bạn cho đến khi state trong local storage đã được lấy ra và lưu trở lại vào Redux.
import { store, persistor } from "./redux/store";
// const dispatch = useDispatch();

const Root = () => {
  useEffect(() => {
    console.log("index dispatch");
    const cookie = getAuthToken();
    cookie && store.dispatch(getUserAction(cookie));
    store.dispatch(postAction());
    console.log("index dispatch done");
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
// ReactDOM.render(<Root />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>
// );
