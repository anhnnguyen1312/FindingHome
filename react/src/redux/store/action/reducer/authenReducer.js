// import actionTypes from "../actionTypes";
// const initialState = {
// <<<<<<< Updated upstream
//     isLoggedIn: false,
//     token: null,
//     msg:'',
//     data:'',
//     update: false
// }

// export const authenReducer = (state = initialState,action) => {
//     switch (action.type){
//         case actionTypes.REGISTER__SUC :
//             case actionTypes.LOGIN__SUC :
//             return {
//                 ...state,
//                 isLoggedIn : true,
//                data:action.data,
//                 msg: null,
//             }
//             case actionTypes.REGISTER__FAIL :
//                 case actionTypes.LOGIN__FAIL :
//                 return {
//                     ...state,
//                     isLoggedIn : false,
//                     token: null,
//                     msg:action.msg,
//                     update:!state.update

//                 }
//                 case actionTypes.LOGOUT :
//                 return {
//                     ...state,
//                     isLoggedIn : false,
//                     token: null,
//                     msg:' Login Fail'

//                 }
//         default:
//         return state;

//     }
// }
// =======
//   isLoggedIn: false,
//   token: null,
//   msg: "",
//   update: false,
//   data: null,
// };

// // export const authenReducer = (state = initialState,action) => {
// //     switch (action.type){
// //         case actionTypes.REGISTER__SUC :
// //             case actionTypes.LOGIN__SUC :
// //             return {
// //                 ...state,
// //                 isLoggedIn : true,
// //                data:action.data,
// //                 msg: null,
// //             }
// //             case actionTypes.REGISTER__FAIL :
// //                 case actionTypes.LOGIN__FAIL :
// //                 return {
// //                     ...state,
// //                     isLoggedIn : false,
// //                     token: null,
// //                     msg:action.msg,
// //                     update:!state.update

// //                 }
// //                 case actionTypes.LOGOUT :
// //                 return {
// //                     ...state,
// //                     isLoggedIn : false,
// //                     token: null,
// //                     msg:' Login Fail'

// //                 }
// //         default:
// //         return state;

// //     }
// // }
// // >>>>>>> Stashed changes

// export const authenReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.REGISTER__SUC:
//     case actionTypes.LOGIN__SUC:
//       return {
//         ...state,
//         isLoggedIn: true,
//         data: action.data,
//         msg: "Login Success",
//       };
//     case actionTypes.REGISTER__FAIL:
//     case actionTypes.LOGIN__FAIL:
//       return {
//         ...state,
//         isLoggedIn: false,
//         data: null,
//         msg: action.msg || "Login Fail!",
//         update: !state.update,
//       };
//     case actionTypes.LOGOUT:
//       return {
//         ...state,
//         isLoggedIn: false,
//         // token: null,
//         data: null,
//         msg: "Log Out!",
//       };
//     default:
//       return state;
//   }
// };
// >>>>>>> Stashed changes

import actionTypes from "../actionTypes";

const initialState = {
  isLoggedIn: false,
  token: null,
  msg: "",
  data: "",
  update: false,
};

export const authenReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER__SUC:
    case actionTypes.LOGIN__SUC:
      return {
        ...state,
        isLoggedIn: true,
        data: action.data,
        msg: null,
      };
    case actionTypes.REGISTER__FAIL:
    case actionTypes.LOGIN__FAIL:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        msg: action.msg,
        update: !state.update,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        // msg: " Log Out!",
        msg: null,
      };
    default:
      return state;
  }
};
