import React, {useState, useEffect} from 'react';
import './index.css';
import { Tag } from 'antd';
import {PlusSquareOutlined, HeartTwoTone, HeartFilled, LikeFilled } from '@ant-design/icons';
import {connect} from 'react-redux';
import {updateUpvote, reduceCount, joinTheChallenge, withdrawFromTheChallenge} from "../../../../redux/Challenges/ChallengesActions"

const Card = ({id, details, updateUpvote, challengeData, reduceCount, joinTheChallenge, withdrawFromTheChallenge}) => {
    var hasJoined = false;
    const loggedInUser = localStorage.getItem("loggedInUser"),
        [upVote, setUpvote] = useState(false),
        [joinHands, setjoinHands] = useState(false),

        upvoteChallenge = (e) => {
            debugger
            e.preventDefault()
            if(!upVote) {
                setUpvote(true)
                updateUpvote(id, loggedInUser)
            } else {
                setUpvote(false)
                reduceCount(id, loggedInUser)
            }
        },

        joinHandsForTheChallenge = (e) => {
            debugger
            e.preventDefault();
            if(!joinHands) {
                setjoinHands(true)
                joinTheChallenge(loggedInUser, id)
            } else {
                setjoinHands(false)
                withdrawFromTheChallenge(loggedInUser, id)
            }
        }

    useEffect(() => {
        debugger
        details.joinHands.some(e => {
            if(e === parseInt(loggedInUser)) {
                setjoinHands(true)
                return true;
            }
        })
        details.usersUpvoted.some(e => {
            debugger
            if(e === parseInt(loggedInUser)) {
                setUpvote(true)
                return true;
            }
        })
    }, [])

    useEffect(() => {
        debugger
        localStorage.setItem("setUpvote", upVote)
    }, [upVote])

    useEffect(() => {
        debugger
        localStorage.setItem("hasUserJoined", joinHands)
    }, [joinHands])

    return (
        <div className="card-wrapper">
            <div className="card-details">
                <div className="left-partition">
                    <div>
                        <div><b>Title</b></div>
                        <div>{details.title}</div>
                    </div>
                    <div className="tags">
                        {
                            details.tags === 'forecast' ? <Tag color="magenta">#{details.tags}</Tag> :
                            details.tags === 'dashboard' ? <Tag color="green">#{details.tags}</Tag> :
                            details.tags === 'visualization' ? <Tag color="cyan">#{details.tags}</Tag> :
                            <Tag color="orange">#{details.tags}</Tag>
                        }
                    </div>
                </div>
                <div className="right-partition">
                    <div><b>Description</b></div>
                    <div>{details.description}</div>
                </div>
            </div>
            {parseInt(loggedInUser) !== details.createdBy && <div className="actions">
                <div className="action-item">
                    { upVote ? <HeartFilled twoToneColor="#eb2f96" /> : <HeartTwoTone twoToneColor="#eb2f96"/>}
                    <span>
                        <a onClick={(e) => upvoteChallenge(e)}><b> Upvote</b></a>
                        <span> ({challengeData[id].upvotes})</span>
                    </span>
                </div>
                <div className="action-item">
                    <a onClick={(e) => joinHandsForTheChallenge(e)}>
                        {joinHands ? <><LikeFilled /><span><b> You're in!</b></span></> : <><PlusSquareOutlined /><span><b> Join Hands</b></span></>}
                    </a>
                </div>
            </div>
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateUpvote: (id) => dispatch(updateUpvote(id)),
        reduceCount: (id) => dispatch(reduceCount(id)),
        joinTheChallenge: (user, id) => dispatch(joinTheChallenge(user, id)),
        withdrawFromTheChallenge: (user, id) => dispatch(withdrawFromTheChallenge(user, id))
    }
}

const mapStateToProps = state => {
    localStorage.setItem("challengeData", JSON.stringify(state.challengesReducer.challengesList))
    return {
        challengeData: state.challengesReducer.challengesList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);