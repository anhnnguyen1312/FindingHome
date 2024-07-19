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
  ProfilePublic,
  ListLiked,
} from "./pages/Public";
import Profile from "./pages/LoggedIn/Profile";
import { HomeLoggedIn } from "./pages/LoggedIn/";
import {
  System,
  ManagePostSystem,
  CensorshipPostSytem,
  ManageUserSystem,
  ManagePostExpiredSystem,
  CreateAccountAdmin,
  Notification,
} from "./pages/System/";

import NewPost from "./pages/LoggedIn/NewPost";
import FindRoom from "./pages/Public/FindRoom";
function App() {
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
          <Route path={path.PROFILE_PUBLIC_ID} element={<ProfilePublic />} />
          <Route path={path.FINDROOM} element={<FindRoom />} />
          <Route path={path.RESET_PASSWORD} element={<ResetPassword />} />
        </Route>
        <Route path={path.HOME_LOGGED_IN} element={<HomeLoggedIn />}>
          <Route path={path.PROFILE} element={<Profile />} />
          <Route path={path.NOTIFICATION} element={<Notification />} />
          <Route path={path.NEWPOST} element={<NewPost />} />
          <Route path={path.LIST_LIKED} element={<ListLiked />} />
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
          <Route path={path.NOTIFICATION} element={<Notification />} />
          <Route
            path={path.CREATE_ACCOUNT_ADMIN}
            element={<CreateAccountAdmin />}
          />
          <Route path={path.PROFILE_PUBLIC_ID} element={<ProfilePublic />} />

          <Route path={path.DETAIL_PRODUCT} element={<DetailProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
