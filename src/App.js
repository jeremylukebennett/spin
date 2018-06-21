import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import MainButton from './components/MainButton';
import AddToLibraryView from './components/AddToLibraryView';
import ViewLibraryView from './components/ViewLibraryView';
import HomeNav from './components/HomeNav';
import ViewAbout from './components/ViewAbout';




class App extends Component {

  constructor(props) {
    super(props)

    this.state={
      authed: false,
      user: null,
      view: "",
      userLibraryData: null,
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
    this.setState({
      view: "home"
    })
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

  viewAbout = () => {
    console.log("about");
    this.setState({
      view: "about"
    })
  }
  
  updateUserLibraryData = () => {
    fetch(`https://spin-f83e9.firebaseio.com/tracks.json`)
    .then(data => data.json())
    .then((data) => {
        console.log('data',data);

        // Firebase IDs in an array
        let fbID = Object.keys(data);
        console.log('fbID',fbID);
        
        // All track info in an array
        let dataArray = Object.values(data);
        console.log('dataArray',dataArray);

        // Need to get Firebase IDs into their respective track info objects
        let iterator = 0;
        fbID.map(function(firebaseID){
            dataArray[iterator].fbID=firebaseID;
            iterator++;
            return null;
        })

        this.setState({
            userLibraryData: dataArray,
        })
    });
  }
  
  // This resets the user library and returns to the home view
  resetUserLibrary = () => {
    this.setState({
      userLibraryData: null,
      view: "home",
    })
  }

  render() {
    console.log('Did the update state run??');
    // Renders Add to Library component when that button is clicked and changes state so view : addToLibrary
    if(this.state.view === "addToLibrary") {
      return(
        <div>
          <AddToLibraryView userID={this.state.userID} backToHome={this.backToHome} updateUserLibraryData={this.updateUserLibraryData}/>
        </div>
    )}
    else if(this.state.view === "viewLibrary") {
      return(
        <div>
          <ViewLibraryView backToHome={this.backToHome} trackInfo={this.state.userLibraryData} refresh={this.viewLibraryView} updateUserLibraryData={this.updateUserLibraryData}/>
        </div>
      )
    }
    else if(this.state.view === "about") {
      return(
        <div>
          <ViewAbout backToHome={this.backToHome}/>
        </div>
      )
    }
    else if(this.state.authed && this.state.userLibraryData === null) {
        this.updateUserLibraryData()
        return (
          <div>Loading...</div>
        )
    }

    else if(this.state.authed || this.state.view === "home") {
      return (

        <div>

          <HomeNav viewAbout={this.viewAbout}/>
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
        </div>
      )
    }else if(!this.state.authed) {
      return(
        <div>
          <h1 id="login-title">Spin</h1>
          <SignIn userToApp={this.userToApp}/>
        </div>
      )
    }
  }
}

export default App;
