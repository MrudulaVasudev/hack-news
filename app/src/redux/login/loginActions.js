import { LOGIN_USER } from './loginTypes';

export const loginUser = () => {
    return dispatch => {
        dispatch(userLoginAction())
    }
}

const userLoginAction = () => {
    return {
        type: LOGIN_USER
    }
}