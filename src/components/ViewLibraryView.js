import React from 'react';
import BackButton from './BackButton';
import TrackItem from './TrackItem';


class ViewLibraryView extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            trackInfo: [],
        })
    }

    componentDidMount(){

        fetch(`https://spin-f83e9.firebaseio.com/tracks.json`)
        .then(data => data.json())
        .then((data) => {
            console.log('data',data);

            // Firebase IDs in an array
            let fbID = Object.keys(data);
            console.log('fbID',fbID);
            
            // All track info in an array
            let dataArray = Object.values(data);
            console.log('dataArray',dataArray);

            // Need to get Firebase IDs into their respective track info objects
            let iterator = 0;
            fbID.map(function(firebaseID){
                dataArray[iterator].fbID=firebaseID;
                iterator++;
                return null;
            })

            this.setState({
                trackInfo: dataArray,
            })
        });
    }
    
    render() {

        let libraryRendered = this.state.trackInfo.map(function(i){


            return(
                    <TrackItem title={i.title} artist={i.artist} album={i.album} genre={i.genre} bpm={i.bpm} notes={i.notes} fbID={i.fbID}/>
            )
        });


        return (
        <div>
            <BackButton backToHome={this.props.backToHome}/>
            <ul className="track-info-list">
                {libraryRendered}
            </ul>
        </div>
        );
    }
}

export default ViewLibraryView;