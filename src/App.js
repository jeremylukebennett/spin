import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import BPMCalc from './components/BPMCalc';
import { loginWithGoogle } from './auth';
// import { storeUserInfo } from './auth'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';
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
    this.changeAuth = this.changeAuth.bind(this);
  }


  // 
  changeAuth(user){
// I need to set state here to the user object. Then I can pass it down to the library viewing and adding views
    console.log("this should change state");
    this.setState({
      authed: true,
      // user: storeUserInfo,
      // test: true,
    });
  }



  render() {
    
    // let action1 = () => {
    //   console.log("first button pressed");
    //   this.setState({
    //     currentView: "view1"
    //   });
    //   console.log(this.state.currentView)
    // }
    
    // let action2 = () => {
    //   console.log("second button pressed");
    //   this.setState({
    //     currentView: "view2"
    //   });
    // }


    return this.state.authed ? (
      <div>
        <BPMCalc />
        <button>View Library</button>
        <button>Add to Library</button>
      </div>
    ) : (
      <div>
        <h1>Login</h1>
        <SignIn changeAuth={this.changeAuth}/>
      </div>
    )




    // if(!this.state.authed) {
    //   return (
    //     <div>
    //       <h1>Google Login</h1>
    //       <SignIn changeAuth={this.changeAuth}/>
    //     </div>
    //   )
    // }else if(this.state.authed) {
    //   return(
    //     <div>
    //       <h1>Logged in!</h1>
    //       <h4>BPM Calc:</h4>
    //       <BPMCalc />
    //     </div>
    //   )
    // }
    

  // if(this.state.currentView === null) {
  //     return (
  //       <div className="App">
  //         <header className="App-header">
  //           <img src={logo} className="App-logo" alt="logo" />
  //           <h1 className="App-title">Spin</h1>
  //         </header>
  //         <p className="App-intro">
  //           Demo
  //         </p>

  //         <button onClick={action1}>Button 1</button>
  //         <button onClick={action2}>Button 2</button>
  //         <BPMCalc />
  //       </div>
  //     );
  //   }else if(this.state.currentView === "view1"){
  //     return(
  //       <div className="App">
  //         <FirstView />
  //       </div>
  //     );
  //   }else if(this.state.currentView === "view2"){
  //     return(
  //       <div className="App">
  //         <SecondView />
  //       </div>      
  //     );
  //   }
  }
}

export default App;
