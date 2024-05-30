import rootReducer from "./store/action/reducer/rootReducer";
import { persistStore } from "redux-persist";
import  {applyMiddleware, createStore} from "redux"
import {thunk} from 'redux-thunk'
// const reduxStore = () => {
//     const store = createStore(rootReducer)
//     const persistor = persistStore(store)
//     return { store, persistor}
// }

//persistStore để lưu state của redux vào localstorage
// redux thunk dungf ddeer gọi api trong lúc dispatch các action lên reducer, xử lí bất đồng bộ, nếu k có tthunk thì chỉ 
//dispatch dc 1 object thuần thôi, dùng thunk thòi có thể diatch một hàm , hàm để gọi api
export const store= createStore(rootReducer, applyMiddleware(thunk))
export const persistor  = persistStore(store)