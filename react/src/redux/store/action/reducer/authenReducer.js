import actionTypes from '../actionTypes'

const initialState = {
    isLogIn: false,
    token: null,
    msg:''
}

export const authenReducer = (state = initialState,action) => {
    switch (action.type){
        case actionTypes.REGISTER__SUC :
            return {
                ...state,
                isLogIn : true,
                token: action.data

            }
            case actionTypes.REGISTER__FAIL :
                return {
                    ...state,
                    isLogIn : false,
                    token: null,
                    msg:action.data
    
                }
        default:
        return state;
        
    }
}