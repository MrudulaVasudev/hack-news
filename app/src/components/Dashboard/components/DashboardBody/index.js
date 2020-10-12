import React, {useEffect, useState} from 'react';
import { Modal, Button, Input, Select } from 'antd';
import './index.css';
import ChallengesTable from '../ChallengesTable';
import { fetchAllChallenges, addNewChallenge } from '../../../../redux/Challenges/ChallengesActions';
import { connect } from 'react-redux';
const {TextArea} = Input, {Option} = Select;

const DashboardBody = ({fetchAllChallenges, challengeData, addNewChallenge}) => {

    const [isAddNewChallengeModalActive, setAddNewChallengeModalActive] = useState(false),
        tags = ["performance", "dashboard", "forecast", "visualization"],
        [challengeTitle, setChallengeTitle] = useState(""),
        [challengeDescription, setChallengeDescription] = useState(""),
        [selectedTag, setSelectedTag] = useState(tags[0])

    useEffect(() => {
        // localStorage.setItem('challengeData', JSON.stringify(challengeData))
        fetchAllChallenges()
    }, [])

    const handleButtonClick = () => {
        setAddNewChallengeModalActive(true);
    },

    onModalClose = () => {
        setAddNewChallengeModalActive(false);
    },

    onSubmitChallenge = () => {
        let newChallenge = {
            title: challengeTitle,
            description: challengeDescription,
            tags: selectedTag,
            createdBy: 1234,
            upvotes: 0,
            joinHands: []
        }
        addNewChallenge(newChallenge)
        challengeData.push(newChallenge);
        localStorage.setItem('challengeData', JSON.stringify(challengeData))

        setAddNewChallengeModalActive(false);
    },

    handleTitleChange = (e) => {
        setChallengeTitle(e.currentTarget.value)
    },

    handleDescriptionChange = (e) => {
        setChallengeDescription(e.currentTarget.value)
    },
    handleSelectChange = (value) => {
        setSelectedTag(value)
    }

    return (
        <div>
            <Button
                type="primary"
                className="challenge-button"
                onClick={handleButtonClick}
            >
                Add New Challenge
            </Button>
            <ChallengesTable />
            <Modal
                title="Add a new challenge"
                visible={isAddNewChallengeModalActive}
                onCancel={onModalClose}
                footer={[<Button key="Cancel" onClick={onModalClose}> Cancel</Button>,
                    <Button key="submit" onClick={onSubmitChallenge}> Submit</Button>]}
            >
                <Input
                    type="text"
                    placeholder="Challenge title here"
                    value={challengeTitle}
                    onChange={(e) => handleTitleChange(e)}
                />

                <TextArea
                    rows={4}
                    placeholder="Challenge description"
                    value={challengeDescription}
                    onChange={(e) => handleDescriptionChange(e)}
                />

                <Select defaultValue={selectedTag} onChange={handleSelectChange}>
                    {tags.map((tag, ind) => {
                        return (
                            <Option key={ind} value={tag}>{tag}</Option>
                        )
                    })}

                </Select>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        challengeData: state.challengesReducer.challengesList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllChallenges: () => dispatch(fetchAllChallenges()),
        addNewChallenge: (data) => dispatch(addNewChallenge(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DashboardBody);