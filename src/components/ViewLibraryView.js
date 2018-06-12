import React from 'react';
import ReactDOM from 'react-dom';
import BPMCalc from './BPMCalc';
import BackButton from './BackButton';
import TrackItem from './TrackItem';
import { pullTrackInfo } from '../firebaseFunctionality';


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

            // dataArray becomes an array of objects (of the track info)
            let dataArray = Object.values(data);
            console.log('dataArray',dataArray);

            this.setState({
                trackInfo: dataArray,
            })
        });

    }
    
    
    render() {

        let libraryRendered = this.state.trackInfo.map(function(i){


            return(
                    <TrackItem title={i.title} artist={i.artist} album={i.album} genre={i.genre} bpm={i.bpm} notes={i.notes} />
            )
        });


        return (
        <div>
            <BackButton onClick={this.props.backToHome}/>
            Viewing library - check console.
            <ul>
                {libraryRendered}
            </ul>
        </div>
        );
    }
}

export default ViewLibraryView;