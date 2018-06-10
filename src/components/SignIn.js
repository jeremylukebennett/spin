import React, { Component } from 'react';
import { loginWithGoogle } from '../auth';

class SignIn extends Component {

    constructor(props) {
        super(props)
    
        this.state={
          foo: false,
        }
      }

    authenticate(){
        console.log("am I in the authenticate function?");
        const updateIt = this.props.changeAuth;
        console.log('updateIt',updateIt);
        loginWithGoogle(updateIt());
    }

    render() {
        debugger
        return(
            <div>
                <button onClick={() => this.authenticate('google')}>Login</button>
            </div>
        )

    }

}

export default SignIn;