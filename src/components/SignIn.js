import React, { Component } from 'react';
import { loginWithGoogle } from '../auth';

class SignIn extends Component {

    constructor(props) {
        super(props)
    
        // this.state={
        //   foo: false,
        // }
    }

    // Launches authentication via Google
    authenticate(){

        const updateIt = this.props.changeAuth;
        // Login via Google and launch updateIt function in App.js 
        loginWithGoogle(updateIt());
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