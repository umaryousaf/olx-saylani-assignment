import {
    LOGIN_AUTH,
    LOGIN_AUTH_FAIL,
    LOGOUT_USER,
    LOGOUT_USER_FAIL,
} from './type'
import { firebase2, auth} from '../config/firebase';

export const addUser = () => async (dispatch) => {
    try {
        var provider = new auth.GoogleAuthProvider();
        firebase2
            .auth()
            .signInWithPopup(provider)
            .then(function (result) {
              var  user = result.user;
              var token = result.credential.accessToken;
              
                dispatch({
                    type: LOGIN_AUTH,
                    payload: {user, token}
                })
                console.log(user)
                console.log(user.displayName)
            }).catch(function (error) {
                console.log(error)
            }); 
    } catch (error) {
        dispatch({
            type: LOGIN_AUTH_FAIL 
        })
    }
}

export const logoutUser = () => async (dispatch ) => {
    try {
        firebase2
        .auth()
        .signOut()
        .then(function() {
            dispatch({
                type: LOGOUT_USER,
            })
          }).catch(function(error) {
            console.log(error)
          });
    } catch (error) {
        dispatch({
            type: LOGOUT_USER_FAIL
        })
    }
}