import React, { Component }from 'react';
import ReactDOM from 'react-dom';


class TrackItem extends Component {
    




    
    render() {
        
console.log("are we in the TrackItem??");

        return(
            <li>
                Title: 
                {this.props.title}
                Artist: 
                {this.props.artist}
                Album: 
                {this.props.album}
                genre: 
                {this.props.genre}
                BPM: 
                {this.props.bpm}
                Notes: 
                {this.props.notes}
            </li>
        )
    }
}

export default TrackItem;