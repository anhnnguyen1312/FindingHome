import rootReducer from "./store/action/reducer/rootReducer";
import { persistStore } from "redux-persist";
import  {applyMiddleware, createStore} from "redux"
import {thunk} from 'redux-thunk'
export const store= createStore(rootReducer, applyMiddleware(thunk))
export const persistor  = persistStore(store)