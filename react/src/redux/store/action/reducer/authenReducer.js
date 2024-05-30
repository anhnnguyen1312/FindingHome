import actionTypes from '../actionTypes'

const initialState = {
    isLoggedIn: false,
    token: null,
    msg:'fail',
    update: false
}

export const authenReducer = (state = initialState,action) => {
    switch (action.type){
        case actionTypes.REGISTER__SUC :
            case actionTypes.LOGIN__SUC :
            return {
                ...state,
                isLoggedIn : true,
                token: action.data,
                msg: ''
            }
            case actionTypes.REGISTER__FAIL :
                case actionTypes.LOGIN__FAIL :
                return {
                    ...state,
                    isLoggedIn : false,
                    token: null,
                    msg:action.data,
                    update:!state.update
    
                }
                case actionTypes.LOGOUT :
                return {
                    ...state,
                    isLoggedIn : false,
                    token: null,
                    msg:''
    
                }
        default:
        return state;
        
    }
}

