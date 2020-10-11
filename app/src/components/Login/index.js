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
        console.log(e.currentTarget[0].value)
        loginUser()
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
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: () => {
            dispatch(loginUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);