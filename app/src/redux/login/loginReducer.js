import { LOGIN_USER, LOGOUT_USER } from "./loginTypes";

const initialState = {
    isLoggedIn: false,
    loggedInUser: ""
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isLoggedIn: true,
                loggedInUser: action.userId
            }

        case LOGOUT_USER:
            return {
                ...state,
                isLoggedIn: false
            }

        default: return state;
    }
}

export default loginReducer;