import React, { Component }from 'react';
import ReactDOM from 'react-dom';


class BPMCalc extends Component {
    
    render() {
        
        let BPM = require('bpm'),
            b = new BPM();
        
        function bpm(){
                console.log("click");
                
                setTimeout(function() {
                console.log(b.tap());
                }, 1000);
        }

        return(
            <div>
                <button type="button" className="btn btn-primary" onClick={bpm}>Tap</button>
            </div>
        )
    }
}

export default BPMCalc;