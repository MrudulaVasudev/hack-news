import {FETCH_CHALLENGES, ADD_CHALLENGE, UPDATE_UPVOTES, REDUCE_UPVOTES, WITHDRAW_FROM_CHALLENGE, JOIN_CHALLENGE } from './ChallengesTypes';

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
        case UPDATE_UPVOTES:
            return {
                ...state,
                challengesList: state.challengesList.map((item, ind) => {
                    if(ind === actions.payload.id) {
                        item.upvotes++;
                        item.usersUpvoted.push(actions.payload.user)
                    }
                    return item
                })
            }
        case REDUCE_UPVOTES:
            return {
                ...state,
                challengesList: state.challengesList.map((item, ind) => {
                    if(ind === actions.payload.id) {
                        item.upvotes--
                    }
                    return item
                })
            }

        case JOIN_CHALLENGE:
            return {
                ...state,
                challengesList: state.challengesList.map((item, ind) => {
                    if(ind === actions.payload.id) {
                        item.joinHands.push(parseInt(actions.payload.user))
                    }
                    return item
                })
            }
        case WITHDRAW_FROM_CHALLENGE:
            return {
                ...state,
                challengesList: state.challengesList.map((item, ind) => {
                    if(ind === actions.payload.id) {
                        item.joinHands.some((elem, index) => {
                            if(elem === parseInt(actions.payload.user)) {
                                item.joinHands.splice(index, 1);
                                return true;
                            }
                        })
                    }
                    return item
                })
            }
        default: return state
    }
}
export default challengesReducer;