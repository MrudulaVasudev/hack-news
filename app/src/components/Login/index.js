import React, {useEffect} from 'react';
import { loginUser } from '../../redux/login/loginActions';
import { connect } from 'react-redux';
import './index.css';
import { useHistory } from 'react-router';

const Login = ({loginUser, isLoggedIn}) => {

    const history = useHistory();
    useEffect(() => {
        if(isLoggedIn) {
            history.push("/dashboard");
        }
    }, [isLoggedIn])

    const authenticateUser = (e) => {
		e.preventDefault();
        loginUser(e.target[0].value)
	}

    return (
        <form onSubmit={(e) => authenticateUser(e)} className="loginForm" >
            <label htmlFor="employeeNumber">
                <input
                    type="number"
                    id="employeeNumber"
                    placeholder="Employee ID"
                    required
                />
            </label>
            <button className="loginButton">
                Login
            </button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (user) => {
            dispatch(loginUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);