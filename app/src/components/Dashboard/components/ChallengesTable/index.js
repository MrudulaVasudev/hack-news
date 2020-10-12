import React from 'react';
import Card from '../Card';
import { connect } from 'react-redux';

const ChallengesTable = ({challengeData}) => {
    return (
        <div style={{position: "relative", top: "80px"}}>
            {
                challengeData ? challengeData.map((d, ind) => {
                    return <Card key={ind} details={d}/>
                }) : <span>No Data Yet</span>
            }
        </div>
    )
}

const mapStateToProps = state => {
    console.log("From the table: ", state)
    return {
        challengeData: state.challengesReducer.challengesList
    }
}

export default connect(mapStateToProps, null)(ChallengesTable);