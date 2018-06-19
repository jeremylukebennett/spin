import React, { Component }from 'react';


class BPMCalc extends Component {
    constructor(props){
        super(props)

        // this.state={
        //     bpmPassingFunction: this.props.setBPM,
        // }
    }
    
    // Try writing a function that will be called below and in that function definition you can update bpm state
    
    
    render() {
        

        let beatTime = [];
        let startTime = 0;
        // let diff = [];
        let beatsPer = 0;
        // console.log('beatsPer',beatsPer);
        let bpm = () => {
            let bpmArray = [];
            console.log("BPM running")
            
            let date = new Date();
            
            let timestamp = date.getTime();
            beatTime.push(timestamp);
            
            console.log(beatTime)
            for(let i = 0; i < beatTime.length; i++){
                beatTime.length === 1 
                ? bpmArray.push(beatTime[i] - startTime)
                : bpmArray.push(beatTime[i] - beatTime[i-1]);
            }
            beatsPer = 60000/bpmArray[bpmArray.length-1]
            // document.querySelector("#output").innerHTML = Math.floor(60000/bpmArray[bpmArray.length-1])
            // console.log("result: ", Math.floor(60000/bpmArray[bpmArray.length-1]))
            this.props.setBPM(Math.floor(60000/bpmArray[bpmArray.length-1]))
        }


        return(
            <div>
                <button type="button" className="btn btn-primary" onClick={bpm}>Tap</button>
            </div>
        )
    }
}

export default BPMCalc;