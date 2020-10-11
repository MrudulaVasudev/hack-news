import { LOGIN_USER } from "./loginTypes";

const initialState = {
    isLoggedIn: false
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isLoggedIn: true
            }

        default: return state;
    }
}

export default loginReducer;