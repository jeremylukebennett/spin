import React from 'react';
import TrackItem from './TrackItem';
import './ViewLibraryView.css';
import ViewNav from './ViewNav';


class ViewLibraryView extends React.Component {
    
        state={
            searchTerm: "",
            libraryRendered: this.props.trackInfo,
            search: false,
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

    listStuff = () =>{
        if(!this.state.search){
            return(
                this.state.libraryRendered.sort(function(a, b){
                    return a.bpm - b.bpm;
        
                }).map(track => 
                    <TrackItem title={track.title} artist={track.artist} album={track.album} genre={track.genre} bpm={track.bpm} notes={track.notes} fbID={track.fbID} updateUserLibraryData={this.props.updateUserLibraryData} key={track.fbID}/>
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

    // setSearchState = () =>{
    //     this.setState({
    //         search: false,
    //     })
    // }

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

    // this.viewLibraryView()
    

        // componentDidUpdate(prevProps) {
        //     if(prevProps !== this.props){
        //         this.setState({
        //             title: this.props.title,
        //             artist: this.props.artist,
        //             album: this.props.album,
        //             genre: this.props.genre,
        //             bpm: this.props.bpm,
        //             notes: this.props.notes,
        //         })
        //     }
        // }



    render() {

        return (
        <div>
            <div className="fixed-top header-bar">
                <ViewNav title="Your Library" backToHome={this.props.backToHome}/>

                <input id="search-field" type="text" placeholder="Search library..." onChange={this.searchTermCapture} onKeyUp={() => { this.filterThroughLibraryData(this.state.searchTerm)}

    }/>
            </div>

            <ul className="track-info-list">

                {this.listStuff()}

            </ul>
        </div>
        );
    }
}

export default ViewLibraryView;