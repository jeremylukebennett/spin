import React from 'react';
import BPMCalc from './BPMCalc';
import BackButton from './BackButton';
import { pushTrackInfo } from '../firebaseFunctionality';
import './AddToLibraryView.css';




class AddToLibraryView extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      // bpm: 0,
      value: 0,
    }
    // this.setBPM = this.setBPM.bind(this);
  }


  setBPM = (bpmAverage) => {
    console.log('bpmAverage',60000/bpmAverage);

    this.setState({
      value: Math.floor(60000/bpmAverage),
    })

    console.log("value in state of 'AddToLibraryView'",this.state.value)
  }

  // tryPassingBPMArray = (bpmArray) => {
  //   console.log("bpmArray: ", bpmArray)
  // }

  stringifyFormData = (fd) => {
    const data = {};
      for (let key of fd.keys()) {
        data[key] = fd.get(key);
      }
      return JSON.stringify(data, null, 2);
  }
  

  submitTrackData = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log('data',data);

    let stringifiedData = this.stringifyFormData(data);
    console.log('stringifiedData',stringifiedData);
    
    let parsedData = JSON.parse(stringifiedData);
    console.log('parsedData',parsedData);
    pushTrackInfo(parsedData, this.props.userID);
    // this.props.resetUserLibrary();
    this.props.updateUserLibraryData();
  }

  // componenDidUpdate(prevProps){
  //   if(prevProps !== this.props) {
  //     console.log(prevProps);
  //   }
  // }

  render() {
    
    return (
      <div>
        <BackButton backToHome={this.props.backToHome}/>

        <div className="form-control add-to-library-form-container">
          <form onSubmit={this.submitTrackData}>
            Track:
            <input className="form-control" type="text" name="track"/><br/>
            Artist:
            <input className="form-control" type="text" name="artist"/><br/>
            Album:
            <input className="form-control" type="text" name="album"/><br/>
            Genre:
            <input className="form-control" type="text" name="genre"/><br/>
            BPM:
            <BPMCalc setBPM={this.setBPM} tryPassingBPMArray={this.tryPassingBPMArray}/>
            <input value={this.state.value} className="form-control" type="text" name="bpm"/><br/>
            Notes:
            <input className="form-control" type="text" name="notes"/><br/><br/>
            <button type="submit" name="submit">Submit</button>
          </form>
        </div>

      </div>
    );
  }
}

export default AddToLibraryView;