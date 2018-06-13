import React from 'react';
import ReactDOM from 'react-dom';
import BPMCalc from './BPMCalc';
import BackButton from './BackButton';
import { pushTrackInfo, pullTrackInfo } from '../firebaseFunctionality';



class AddToLibraryView extends React.Component {

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
    let stringifiedData = this.stringifyFormData(data);
    let parsedData = JSON.parse(stringifiedData);

    // pullTrackInfo();
    pushTrackInfo(parsedData, this.props.userID);
  }

  render() {
    
    return (
      <div>
        <BackButton backToHome={this.props.backToHome}/>
        {/* <p>Is this back to home: {this.props.backToHome}</p> */}
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
          <BPMCalc />
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