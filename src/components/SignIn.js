import React, { Component } from 'react';
import { loginWithGoogle } from '../auth';

class SignIn extends Component {

    constructor(props) {
        super(props)
    }




    // Launches authentication via Google
    authenticate(){

        // const updateIt = this.props.changeAuth;
        // Login via Google and launch updateIt function in App.js 
        loginWithGoogle(this.props.userToApp)
    }

    render() {
        return(
            <div>
                <button onClick={() => this.authenticate('google')}>Login</button>
            </div>
        )
    }

}

export default SignIn;