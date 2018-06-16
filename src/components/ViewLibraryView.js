import React from 'react';
import BackButton from './BackButton';
import TrackItem from './TrackItem';


class ViewLibraryView extends React.Component {
    
    render() {

        console.log('this.props.updateUserLibraryData',this.props.updateUserLibraryData);
        let updateUserLibraryData = this.props.updateUserLibraryData;

        let libraryRendered = this.props.trackInfo.map(function(i, index){

            return(
                <TrackItem title={i.title} artist={i.artist} album={i.album} genre={i.genre} bpm={i.bpm} notes={i.notes} fbID={i.fbID} updateUserLibraryData={updateUserLibraryData} key={index}/>
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