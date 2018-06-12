import React, { Component }from 'react';
import ReactDOM from 'react-dom';


class TrackItem extends Component {
    




    
    render() {
        

        return(
            <li className="track-info-list-item">
                <div>
                    Title: 
                    {this.props.title}
                </div>
                <div>
                    Artist: 
                    {this.props.artist}
                </div>
                <div>
                    Album: 
                    {this.props.album}
                </div>
                <div>
                    Genre: 
                    {this.props.genre}
                </div>
                <div>
                    BPM: 
                    {this.props.bpm}
                </div>
                <div>
                    Notes: 
                    {this.props.notes}
                </div>
            </li>
        )
    }
}

export default TrackItem;