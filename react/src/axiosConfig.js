import axios from 'axios'
const instance = axios.create({
    // baseURl: process.env.REACT_APP_SERVER_URL
    
    // baseURl: 'http://localhost:3000/',
    // baseURl: 'https://jsonplaceholder.typicode.com/'
    timeout: 300000,
    headers: {
        'Content-Type': 'application/json',
    }
})

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // gắn token vào header
    let token = localStorage.getItem('persist:auth') 
    console.log('token',token)
    console.log('token',config)
    return config;
}, function (error) {
    
    console.log('error',error)

    return Promise.reject(error);
});

// instance.interceptors.response.use(function (response) {
//     // refresh token
//     return response;
// }, function (error) {
//     return Promise.reject(error);
// });

export default instance 