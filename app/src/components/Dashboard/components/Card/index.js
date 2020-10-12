import React from 'react';
import './index.css';
import { Tag } from 'antd';
import {PlusSquareOutlined, HeartTwoTone } from '@ant-design/icons';

const Card = ({details}) => {
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
            <div className="actions">
                <div className="action-item">
                    <HeartTwoTone twoToneColor="#eb2f96"/>
                    <span>
                        <b> Upvote</b>
                        <span> ({details.upvotes})</span>
                    </span>
                </div>
                <div className="action-item">
                    <PlusSquareOutlined />
                    <span><b> Join Hands</b></span>
                </div>
            </div>
        </div>
    )
}

export default Card;