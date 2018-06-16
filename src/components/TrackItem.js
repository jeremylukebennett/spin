import React, { Component }from 'react';
import './TrackItem.css';
import EditModal from './EditModal';
import { deleteTrackInfo } from '../firebaseFunctionality';



class TrackItem extends Component {
    constructor(props){
        super(props);

        this.state=({
            title: this.props.title,
            artist: this.props.artist,
            album: this.props.album,
            genre: this.props.genre,
            bpm: this.props.bpm,
            notes: this.props.notes,
            propsLoaded: false,
        })
    }


    submitEditWithStateChange = (value) => {
        this.setState({
            title: value.track,
            artist: value.artist,
            album: value.album,
            genre: value.genre,
            bpm: value.bpm,
            notes: value.notes,
        })
    }


    setPropsLoadedFalse = () => {
        this.setState({
            propsLoaded: false,
        })
    }

    handleDelete = () => {
        console.log('this.props.fbID',this.props.fbID);
        deleteTrackInfo(this.props.fbID).then((data) => {
            console.log('data',data);
            this.props.updateUserLibraryData()
        });
    }

// This essentially forces the page to remount with any newly updated props (since the props up in state at the top of the page are )
componentDidUpdate(prevProps) {
    if(prevProps !== this.props){
        this.setState({
            title: this.props.title,
            artist: this.props.artist,
            album: this.props.album,
            genre: this.props.genre,
            bpm: this.props.bpm,
            notes: this.props.notes,
        })

    }
}


render() {
    // set propsLoaded to true. then when you hit edit or delete, reset it to false.
    // if(!this.state.propsLoaded){

    //         this.setPropsLoadedTrue();
    //     }

        return(
            <li className="track-info-list-item">
                <div>
                    <div className="track-info-container">
                        <div className="artist">
                            {this.state.artist}
                        </div>
                        <div className="album">
                            {this.state.album}
                        </div>
                        <div className="bpm">
                            {this.state.bpm}
                        </div>
                        <div className="title">
                            {this.state.title}
                        </div>
                        <div className="genre">
                            {this.state.genre}
                        </div>
                        <div className="notes">
                            {this.state.notes}
                        </div>
                    </div>
                </div>
                {/* This edit and trash buttons need to go into a dropdown below the item listing */}
            <EditModal title={this.state.title} artist={this.state.artist} album={this.state.album} genre={this.state.genre} bpm={this.state.bpm} notes={this.state.notes} fbID={this.props.fbID} submitEditWithStateChange={this.submitEditWithStateChange}updateUserLibraryData={this.props.updateUserLibraryData}/>
            <button onClick={this.handleDelete}>Trash</button>
            </li>
        )
    }
}

export default TrackItem;