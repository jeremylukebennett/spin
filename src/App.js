import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import MainButton from './components/MainButton';
import addToLibraryView from './components/AddToLibraryView';
import { loginWithGoogle } from './auth';
// import {
//   BrowserRouter as Router,
//   Route,
//   NavLink,
// } from 'react-router-dom';
import AddToLibraryView from './components/AddToLibraryView';
import ViewLibraryView from './components/ViewLibraryView';

class App extends Component {

  constructor(props) {
    super(props)

    this.state={
      authed: false,
      user: null
    }
  }

  userToApp = (user) => {
    this.setState({
      authed: true,
      userID: user.user.uid,
    });
  }

  backToHome = () => {
    console.log("working? Back to home?");
  }

  viewAddToLibrary = () => {
    console.log("second button pressed");
    this.setState({
      view: "addToLibrary"
    })
  }

  viewLibraryView = () => {
    console.log("first button pressed");
    this.setState({
      view: "viewLibrary"
    })
  }
  
  
  
  render() {
    
    // Renders Add to Library component when that button is clicked and changes state so view : addToLibrary
    if(this.state.view === "addToLibrary") {
      return(
        <div>
          <AddToLibraryView userID={this.state.userID} backToHome={this.backToHome}/>
        </div>
    )}
    else if(this.state.view === "viewLibrary") {
      return(
        <div>
          <ViewLibraryView />
        </div>
      )
    }else if(this.state.authed) {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
                <div>
                  <MainButton label="View Library"  onClick={() => { this.viewLibraryView() }}/>
                </div>

                <div>  
                  <MainButton label="Add to Library" onClick={() => { this.viewAddToLibrary() }}/>
                </div>
            </div>
          </div>
        </div>
      )
    }else if(!this.state.authed) {
      return(
        <div>
          <h1>Login</h1>
          <SignIn userToApp={this.userToApp}/>
        </div>
      )
    }
  }
}

export default App;
