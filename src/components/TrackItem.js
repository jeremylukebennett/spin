import React, { Component }from 'react';
import './TrackItem.css';
import EditModal from './EditModal';



class TrackItem extends Component {

    render() {
        
        return(
            <li className="track-info-list-item">
                <div>
                    <div className="track-info-container">
                        <div className="artist">
                            {this.props.artist}
                        </div>
                        <div className="album">
                            {this.props.album}
                        </div>
                        <div className="bpm">
                            {this.props.bpm}
                        </div>
                        <div className="title">
                            {this.props.title}
                        </div>
                        <div className="genre">
                            {this.props.genre}
                        </div>
                        <div className="notes">
                            {this.props.notes}
                        </div>
                    </div>
                </div>
                
            <EditModal title={this.props.title} artist={this.props.artist} album={this.props.album} genre={this.props.genre} bpm={this.props.bpm} notes={this.props.notes} fbID={this.props.fbID}/>
            </li>
        )
    }
}

export default TrackItem;




