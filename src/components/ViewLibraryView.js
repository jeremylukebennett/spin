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





    
    displayUserLibrary = () => {
        if(!this.state.search && this.state.sort === "BPM"){

            return(
                this.state.libraryRendered.sort(function(a, b){

                    return a.bpm - b.bpm;
        
                }).map(track => 
                    <TrackItem setBPM={this.setBPM} title={track.title} artist={track.artist} album={track.album} genre={track.genre} bpm={track.bpm} notes={track.notes} fbID={track.fbID} updateUserLibraryData={this.props.updateUserLibraryData} key={track.fbID}/>
                )
            )
        }

        else {
            
            let sortParameter = this.state.sort;
            return(
                this.state.libraryRendered.sort(function(a, b){
                    
                    var nameA = a[sortParameter].toUpperCase(); // ignore upper and lowercase
                    var nameB = b[sortParameter].toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
        
                }).map(track => 
                    <TrackItem setBPM={this.setBPM} title={track.title} artist={track.artist} album={track.album} genre={track.genre} bpm={track.bpm} notes={track.notes} fbID={track.fbID} updateUserLibraryData={this.props.updateUserLibraryData} key={track.fbID}/>
                )            
            )
        }


    }




    setSortSelection = (sortSelection) => {
        console.log('sortSelection',sortSelection);
        this.setState({
            sort: sortSelection,
        })
        


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





    render() {

        return (
        <div>
            <div className="fixed-top header-bar">
                <ViewNav title="Your Library" backToHome={this.props.backToHome}/>

                <input id="search-field" type="text" placeholder="Search library..." onChange={this.searchTermCapture} onKeyUp={() => { this.filterThroughLibraryData(this.state.searchTerm)}}/>


                <SortingOptions setSortSelection={this.setSortSelection} sort={this.state.sort}/>
            </div>

            <ul className="track-info-list">

                {this.displayUserLibrary()}

            </ul>
        </div>
        );
    }
}

export default ViewLibraryView;