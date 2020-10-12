import {FETCH_CHALLENGES, ADD_CHALLENGE} from './ChallengesTypes';
import { challengeData } from '../../constants/challengesBoard';

export const fetchAllChallenges = () => {
    return dispatch => {
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