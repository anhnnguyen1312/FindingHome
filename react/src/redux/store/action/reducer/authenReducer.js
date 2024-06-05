import actionTypes from "../actionTypes";

const initialState = {
    isLoggedIn: false,
    token: null,
    msg:'',
    data:'',
    update: false
}

export const authenReducer = (state = initialState,action) => {
    switch (action.type){
        case actionTypes.REGISTER__SUC :
            case actionTypes.LOGIN__SUC :
            return {
                ...state,
                isLoggedIn : true,
               data:action.data,
                msg: null,
            }
            case actionTypes.REGISTER__FAIL :
                case actionTypes.LOGIN__FAIL :
                return {
                    ...state,
                    isLoggedIn : false,
                    token: null,
                    msg:action.msg,
                    update:!state.update
    
                }
                case actionTypes.LOGOUT :
                return {
                    ...state,
                    isLoggedIn : false,
                    token: null,
                    msg:' Login Fail'
    
                }
        default:
        return state;
        
    }
}
