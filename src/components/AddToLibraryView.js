import React from 'react';
import BPMCalc from './BPMCalc';
import BackButton from './BackButton';
import { pushTrackInfo } from '../firebaseFunctionality';



class AddToLibraryView extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      bpm: [],
    }

    // this.setBPM = this.setBPM.bind(this);

  }


  setBPM = (bpmAverage) => {


    this.setState({
      bpm: bpmAverage,
    })
  }

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

  render() {
    
    return (
      <div>
        <BackButton backToHome={this.props.backToHome}/>
        <form onSubmit={this.submitTrackData}>
          Track:
          <input type="text" name="track"/><br/>
          Artist:
          <input type="text" name="artist"/><br/>
          Album:
          <input type="text" name="album"/><br/>
          Genre:
          <input type="text" name="genre"/><br/>
          BPM:
          <BPMCalc setBPM={this.setBPM}/>
          <input type="text" name="bpm"/><br/>
          Notes:
          <input type="text" name="notes"/><br/><br/>
          <button type="submit" name="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddToLibraryView;