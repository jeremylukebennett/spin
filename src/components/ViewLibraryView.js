import React from 'react';
import BackButton from './BackButton';
import TrackItem from './TrackItem';


class ViewLibraryView extends React.Component {
    
    constructor(props) {
        super(props);

        this.state={
            searchTerm: "",
            libraryRendered: this.props.trackInfo,
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props){
            // this.setState({
            //     title: this.props.title,
            //     artist: this.props.artist,
            //     album: this.props.album,
            //     genre: this.props.genre,
            //     bpm: this.props.bpm,
            //     notes: this.props.notes,
            // })
            console.log("prevProps", prevProps);
            console.log("this.props", this.props);
        }
    }

    searchTermCapture = (e) => {
        console.log("handler!");
        // set state
        this.setState({
            searchTerm: e.target.value,
        })
    }


    filterThroughLibraryData = (searchTerm) => {

        let filteredTracks = this.props.trackInfo.filter(function(obj){

            // let position = Object.keys(obj).map(function(key){
            //     console.log("obj", obj);
            //     console.log("key", key);
            //     console.log("obj.key", obj.key);
            //     console.log("obj.album", obj.album);
            // })

            let position = obj.genre.indexOf(searchTerm);
            return position > -1;


        });

        this.setState({
            libraryRendered: filteredTracks,
        })
    }
    
// component

    render() {

        return (
        <div>
            <BackButton backToHome={this.props.backToHome}/>

            <input type="text" placeholder="Search library..." onChange={this.searchTermCapture} onKeyUp={() => { this.filterThroughLibraryData(this.state.searchTerm) }
}/>

            <ul className="track-info-list">

                {this.state.libraryRendered.map(track => 
                    <TrackItem title={track.title} artist={track.artist} album={track.album} genre={track.genre} bpm={track.bpm} notes={track.notes} fbID={track.fbID} updateUserLibraryData={this.props.updateUserLibraryData} key={track.fbID}/>
                )}

            </ul>
        </div>
        );
    }
}

export default ViewLibraryView;