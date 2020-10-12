import { LOGIN_USER, LOGOUT_USER } from './loginTypes';

export const loginUser = (userId) => {
    return dispatch => {
        dispatch(userLoginAction(userId))
        localStorage.setItem("loggedInUser", userId)
    }
}

const userLoginAction = (userId) => {
    return {
        type: LOGIN_USER,
        userId: userId
    }
}

export const logoutUser = () => {
    return dispatch => {
        dispatch({
            type: LOGOUT_USER
        })
    }
}