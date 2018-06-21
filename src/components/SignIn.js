import React, { Component } from 'react';
import { loginWithGoogle } from '../auth';
import './SignIn.css';

class SignIn extends Component {

    // Launches authentication via Google
    authenticate(){
        // Login via Google and launch updateIt function in App.js 
        loginWithGoogle(this.props.userToApp)
    }

    render() {
        return(
            <div className="d-flex justify-content-center">
                <button className="log-btn" onClick={() => this.authenticate('google')}>Login</button>
            </div>
        )
    }

}

export default SignIn;