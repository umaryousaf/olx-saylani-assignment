import {
    LOGIN_AUTH,
    LOGIN_AUTH_FAIL,
    LOGOUT_USER,
    LOGOUT_USER_FAIL,
} from '../actions/type'

const initialState = {
   user: {},
   isAuth: localStorage.getItem('access') ? true : false
}


export default function (state = initialState, action) {
    const { payload, type } = action

    switch (type) {
        case LOGIN_AUTH:
            localStorage.setItem('access', payload.token)
            return {
                ...state,
                user: payload,
                isAuth: true
            }
       case LOGOUT_USER:
            localStorage.removeItem('access')
           return{
               ...state,
               isAuth: false
           }
        case LOGIN_AUTH_FAIL:
        case LOGOUT_USER_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}