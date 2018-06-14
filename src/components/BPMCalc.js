import React, { Component }from 'react';


class BPMCalc extends Component {
    // constructor(props){
    //     super(props)

    //     // this.state={
    //     //     bpmPassingFunction: this.props.setBPM,
    //     // }
    // }
    
    // Try writing a function that will be called below and in that function definition you can update bpm state


    render() {
        
        let BPM = require('bpm'),
            b = new BPM();
        
        function bpm(){
                setTimeout(function() {
                // Output

                // b.tap().avg = undefined ? console.log("bad") : console.log("good");
                // let bpmValue = b.tap().avg;
                // console.log('bpmValue',bpmValue);


                let bpmArray = [];
                bpmArray.push(b.tap().avg);

                // bpmArray[0] = !undefined ? 
                // this.props.setBPM(bpmArray[0]) :
                // console.log("First BPM count: undefined");



                // let bpmVar = 0;
                // bpmVar = b.tap().avg;
                // console.log(bpmVar)

                console.log("bpmArray: ", bpmArray);
                if(bpmArray[0] === undefined){
                    console.log("undefined");
                }else {
                    console.log("great");
                    // this.state.bpmPassingFunction(bpmArray[0]);
                    this.setState({
                        bpmPassingFunction: bpmArray[0],
                    })

                    console.log("this.state.bpmPassingFunction", this.props.setBPM(bpmArray[0]));
                    // this.props.setBPM(bpmArray[0]);
                }

                // this.props.setBPM(b.tap().avg)




                // console.log(b.tap().avg);
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