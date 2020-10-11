import React from 'react';
import { Button } from 'antd';
import './index.css';

const DashboardBody = () => {
    return (
        <div>
            <Button
                type="primary"
                className="challenge-button"
            >
                Add New Challenge
            </Button>
        </div>
    )
}

export default DashboardBody;