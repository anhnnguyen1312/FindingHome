import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux' 

//Provider dùng để khởi động  reaCT VÀ REDUX SONG SONG, KHI REACt render thì truyền state vào redux bằng biến store
//PersistGate delay quá trình render UI app của bạn cho đến khi state trong local storage đã được lấy ra và lưu trở lại vào Redux.
import { store, persistor } from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store= {store}>
    <PersistGate loading= {null} persistor={persistor} >
          <App />
    </PersistGate>
  </Provider>
  

);

