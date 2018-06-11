import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import BPMCalc from './components/BPMCalc';
import MainButton from './components/MainButton';
import addToLibraryView from './components/AddToLibraryView';
import { loginWithGoogle } from './auth';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';
import AddToLibraryView from './components/AddToLibraryView';
// import userInfo from './auth';
// import logo from './spin-icon.jpg';
// import FirstView from './components/FirstView';
// import SecondView from './components/SecondView';
// import Dotenv from 'dotenv';
// import { base } from './firebaseInfo';



// require('dotenv').config();


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
      user: user,
    });
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
          <AddToLibraryView />
        </div>
      )}
    else if(this.state.view === "viewLibrary") {
      return(
        <div>
          Viewing Library Now
        </div>
      )
    }else if(this.state.authed) {
      return (
        <div>
          <BPMCalc />
          <MainButton label="View Library"  onClick={() => { this.viewLibraryView() }}/>
          <MainButton label="Add to Library" onClick={() => { this.viewAddToLibrary() }}/>
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
