import React from 'react';
import './index.css';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import {logoutUser} from '../../../../redux/login/loginActions';

const Header = ({userLogout}) => {
    const history = useHistory();
    const logoutUser = (e) => {
        e.preventDefault();
        userLogout()
        history.push('/')
    }

    return (
        <div style={{display: "flex", padding: "20px"}}>
            <div className="header-title">
                Welcome to <b>Hack-News</b>!
            </div>
            <div className="logoutLink">
                <a onClick={(e) => logoutUser(e)}>Logout</a>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogout: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);