import React, { Component }from 'react';


class BPMCalc extends Component {
    constructor(props){
        super(props)
        
        this.state={
        }
        
        this.totalBPMs= [];
        this.average=0;
        this.counter=0;
    }
    
    // Try writing a function that will be called below and in that function definition you can update bpm state
    
    
    render() {
        
        let beatTime = [];
        let beatsPer = 0;
        let startTime = new Date();
        
        
        let bpm = () => {
            this.counter++;
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

            beatsPer = Math.floor(60000/bpmArray[bpmArray.length-1])
            console.log('beatsPer',beatsPer);
            

            // Only adds to the totalBPMs array if its *not* the first click
            if(this.counter === 1){
                return
            }else{
                this.totalBPMs.push(beatsPer);
                console.log('this.totalBPMs',this.totalBPMs);
            }

            this.sum = 0;
            for (let i = 0; i < this.totalBPMs.length; i++){
                if(this.counter === 0) { console.log("dont do anything") 
                }else{ 
                    this.sum += this.totalBPMs[i];
                    this.average = Math.floor(this.sum/this.totalBPMs.length);
                    this.props.setBPM(this.average);
                }
            }
        }



        return(
            <div>
                <button type="button" className="btn btn-primary" onClick={bpm}>Tap</button>
            </div>
        )
    }
}

export default BPMCalc;