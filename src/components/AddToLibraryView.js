import React from 'react';
import ReactDOM from 'react-dom';
import BPMCalc from './BPMCalc';
import { storeTrackInfo } from '../firebaseFunctionality';



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
    console.log(stringifiedData);

    storeTrackInfo(stringifiedData);

  }

  render() {
    
    return (
      <div>
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