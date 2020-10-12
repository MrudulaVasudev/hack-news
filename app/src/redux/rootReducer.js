import {combineReducers} from 'redux';
import loginReducer from './login/loginReducer';
import challengesReducer from './Challenges/ChallengesReducer';

const rootReducer = combineReducers({
    loginReducer,
    challengesReducer
})

export default rootReducer;