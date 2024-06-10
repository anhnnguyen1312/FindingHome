import Cookies from 'js-cookie'
import {jwtDecode} from 'jwt-decode'

export const setAuthToken = (token) => {
  Cookies.set('authToken', token, { expires: 1, secure: false, sameSite: 'Strict' })
};

export const getAuthToken = () => {
   const encodeCookie =  Cookies.get('authToken')
   if(encodeCookie){
    const decodeCookie = jwtDecode(encodeCookie)
    return decodeCookie
   }else{
    return false
   }
};

export const removeAuthToken = () => {
  Cookies.remove('authToken')
};