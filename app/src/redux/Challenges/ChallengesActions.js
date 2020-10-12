import {FETCH_CHALLENGES, ADD_CHALLENGE, UPDATE_UPVOTES, REDUCE_UPVOTES, WITHDRAW_FROM_CHALLENGE, JOIN_CHALLENGE} from './ChallengesTypes';
import { challengeData } from '../../constants/challengesBoard';

export const fetchAllChallenges = () => {
    return dispatch => {
        debugger
        let data = localStorage.getItem('challengeData') ? JSON.parse(localStorage.getItem('challengeData')) : challengeData;
        dispatch({
            type: FETCH_CHALLENGES,
            payload: data
        })
    }
}

export const addNewChallenge = (challengeData) => {
    console.log("challengeData", challengeData)
    return dispatch => {
        dispatch({
            type: ADD_CHALLENGE,
            payload: challengeData
        })
    }
}

export const updateUpvote = (id, user) => {
    return dispatch => {
        dispatch({
            type: UPDATE_UPVOTES,
            payload: {
                id,
                user
            }
        })
    }
}

export const reduceCount = (id, user) => {
    return dispatch => {
        dispatch({
            type: REDUCE_UPVOTES,
            payload: {
                id,
                user
            }
        })
    }
}

export const withdrawFromTheChallenge = (user, id) => {
    return dispatch => {
        dispatch({
            type: WITHDRAW_FROM_CHALLENGE,
            payload: {
                user: user,
                id: id
            }
        })
    }
}

export const joinTheChallenge = (user, id) => {
    return dispatch => {
        dispatch({
            type: JOIN_CHALLENGE,
            payload: {
                user: user,
                id: id
            }
        })
    }
}