import React from 'react';
import TrackItem from './TrackItem';
import './ViewLibraryView.css';
import ViewNav from './ViewNav';
import SortingOptions from './SortingOptions';


class ViewLibraryView extends React.Component {
    
        state={
            searchTerm: "",
            libraryRendered: this.props.trackInfo,
            search: false,
            sort: "BPM",
        }

    componentDidUpdate(prevProps) {

        console.log("prevProps", prevProps);
        console.log("this.props", this.props);

        if(prevProps !== this.props){
 
            this.setState({
                libraryRendered: this.props.trackInfo,
            })
        }
    }


    setBPM = (bpmAverage) => {

            this.setState({
              value: bpmAverage,
            })
    }





    
    listStuff = () => {
        if(!this.state.search){

            return(
                this.state.libraryRendered.sort(function(a, b){

                    return a.bpm - b.bpm;
        
                }).map(track => 
                    <TrackItem setBPM={this.setBPM} title={track.title} artist={track.artist} album={track.album} genre={track.genre} bpm={track.bpm} notes={track.notes} fbID={track.fbID} updateUserLibraryData={this.props.updateUserLibraryData} key={track.fbID}/>
                )
            )
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
        console.log("filtering search?");
        let filteredTracks = this.props.trackInfo.filter(function(obj){
            if(searchTerm === ""){
                console.log("nothing");
            }

            for(let key in obj) {
                let search = obj[key].toLowerCase();
                let position = search.indexOf(searchTerm.toLowerCase());

                if(position > -1){
                    return true;
                }
            }
        });

        this.setState({
            libraryRendered: filteredTracks,
        })
    }


    setSortSelection = (sortSelection) => {
        console.log('sortSelection',sortSelection);
    }


    render() {

        return (
        <div>
            <div className="fixed-top header-bar">
                <ViewNav title="Your Library" backToHome={this.props.backToHome}/>

                <input id="search-field" type="text" placeholder="Search library..." onChange={this.searchTermCapture} onKeyUp={() => { this.filterThroughLibraryData(this.state.searchTerm)}}/>


                <SortingOptions setSortSelection={this.setSortSelection}/>
            </div>

            <ul className="track-info-list">

                {this.listStuff()}

            </ul>
        </div>
        );
    }
}

export default ViewLibraryView;