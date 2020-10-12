import {FETCH_CHALLENGES, ADD_CHALLENGE} from './ChallengesTypes';

const initialState = {
    challengesList: []
}

const challengesReducer = (state=initialState, actions) => {
    console.log(actions)
    switch(actions.type) {
        case FETCH_CHALLENGES:
            return {
                ...state,
                challengesList: actions.payload
            }

        case ADD_CHALLENGE:
            return {
                ...state,
                challengesList: [...state.challengesList, actions.payload]
            }
        default: return state
    }
}
export default challengesReducer;