import React, { Component } from 'react';
import logo from './spin-icon.jpg';
import './App.css';
import FirstView from './components/FirstView';
import SecondView from './components/SecondView';
import BPMCalc from './components/BPMCalc';


class App extends Component {

  constructor(props) {
    super(props)

    this.state={
      currentView: null,
    }
  }


  render() {
    
    let action1 = () => {
      console.log("first button pressed");

      this.setState({
        currentView: "view1"
      });
      console.log(this.state.currentView)
    }
    
    let action2 = () => {
      console.log("second button pressed");

      this.setState({
        currentView: "view2"
      });
      console.log(this.state.currentView)
    }
    

  if(this.state.currentView === null) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Spin</h1>
          </header>
          <p className="App-intro">
            Demo
          </p>

          <button onClick={action1}>Button 1</button>
          <button onClick={action2}>Button 2</button>
          <BPMCalc />

        </div>
      );
    }else if(this.state.currentView === "view1"){
      return(
        <div className="App">
          <FirstView />
        </div>
      );
    }else if(this.state.currentView === "view2"){
      return(
        <div className="App">
          <SecondView />
        </div>      
      );
    }
  }
}

export default App;
