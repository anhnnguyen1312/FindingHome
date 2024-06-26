import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { path } from "./ultils/path";
import {
  Home,
  Login,
  HouseRental,
  RoomRental,
  EstateRental,
  HomePage,
  DetailProduct,
  ResetPassword,
} from "./pages/Public";
import Profile from "./pages/LoggedIn/Profile";
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken } from "../src/api/cookieServices";
import { getUserAction } from "../src/redux/store/action/authenAction";
import { HomeLoggedIn } from "./pages/LoggedIn/";
import {
  System,
  ManagePostSystem,
  CensorshipPostSytem,
  ManageUserSystem,
  ManagePostExpiredSystem,
  CreateAccountAdmin,
} from "./pages/System/";

// import {SideBar} from './components/SideBar'

import NewPost from "./pages/LoggedIn/NewPost";
function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const cookie = getAuthToken();
  //   console.log("cookie", cookie);

  //   cookie && dispatch(getUserAction(cookie));
  //   console.log("dispatch xong getusser");
  // }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     const cookie = getAuthToken();
  //     console.log("cookie", cookie);
  //     if (cookie) {
  //       dispatch(getUserAction(cookie));
  //     }
  //   }, 1000);
  // }, []);
  return (
    <Router>
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={"*"} element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.HOUSE_RENTAL} element={<HouseRental />} />
          <Route path={path.ROOM_RENTAL} element={<RoomRental />} />
          <Route path={path.ESTATE_RENTAL} element={<EstateRental />} />
          <Route path={path.DETAIL_PRODUCT} element={<DetailProduct />} />
          <Route path={path.RESET_PASSWORD} element={<ResetPassword />} />
        </Route>
        <Route path={path.HOME_LOGGED_IN} element={<HomeLoggedIn />}>
          <Route path={path.PROFILE} element={<Profile />} />
          <Route path={path.NEWPOST} element={<NewPost />} />
        </Route>
        <Route path={path.SYSTEM} element={<System />}>
          <Route
            path={path.MANAGE_POST_SYSTEM}
            element={<ManagePostSystem />}
          />
          <Route
            path={path.CENSORSHIP_POST_SYSTEM}
            element={<CensorshipPostSytem />}
          />
          <Route
            path={path.MANAGE_POST_EXPIRED_SYSTEM}
            element={<ManagePostExpiredSystem />}
          />
          <Route
            path={path.MANAGE_USER_SYSTEM}
            element={<ManageUserSystem />}
          />
          <Route
            path={path.CREATE_ACCOUNT_ADMIN}
            element={<CreateAccountAdmin />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
