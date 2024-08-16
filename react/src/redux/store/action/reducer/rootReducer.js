import { authenReducer } from "./authenReducer";
import { userReducer } from "./userReducer";
import { locationReducer } from "./locationReducer";

import { combineReducers } from "redux";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { postReducer } from "./postReducer";

const persistConfig = {
  key: "auth",
  whitelist: ["", ""],
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authenReducer),
  user: userReducer,
  post: postReducer,
  location: locationReducer,
});
export default rootReducer;
