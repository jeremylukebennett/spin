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
        let startTime = new Date();
        // let diff = [];
        let beatsPer = 0;
        // console.log('beatsPer',beatsPer);
        let bpm = () => {
            let bpmArray = [];
            console.log("BPM running")
            
            let date = new Date();
            
            let timestamp = date.getTime();
            beatTime.push(timestamp);
            
            console.log("array?", beatTime)
            for(let i = 0; i < beatTime.length; i++){
                console.log('beatTime[i]',beatTime[i]);
                beatTime.length === 1 
                ? bpmArray.push(beatTime[i] - startTime)
                : bpmArray.push(beatTime[i] - beatTime[i-1]);
            }
            console.log('bpmArray',bpmArray[bpmArray.length-1]);
            beatsPer = Math.floor(60000/bpmArray[bpmArray.length-1])

            console.log('beatsPer',beatsPer.toString());

            this.props.setBPM(bpmArray[bpmArray.length-1])



            // document.querySelector("#output").innerHTML = Math.floor(60000/bpmArray[bpmArray.length-1])
            // console.log("result: ", Math.floor(60000/bpmArray[bpmArray.length-1]))
            // console.log('beatsPer',beatsPer);
            // this.props.setBPM(Math.floor(beatsPer))
            // this.props.setBPM(beatsPer)
        }


        return(
            <div>
                <button type="button" className="btn btn-primary" onClick={bpm}>Tap</button>
            </div>
        )
    }
}

export default BPMCalc;