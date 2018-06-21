import React, { Component }from 'react';
import './TrackItem.css';
import EditModal from './EditModal';
import arrowDropDown from '../images/arrow.png'
import trashIcon from '../images/delete-icon.png'
import { deleteTrackInfo } from '../firebaseFunctionality';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';




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


    handleDelete = () => {
        console.log('this.props.fbID',this.props.fbID);
        deleteTrackInfo(this.props.fbID).then((data) => {
            console.log('data',data);
            this.props.updateUserLibraryData()
        });
    }

    // This essentially forces the page to remount with any newly updated props (since the props up in state at the top of the page are )
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
    
        return(
            <li className="track-info-list-item">



                <div className="container-fluid">

                    {/* <div className="row"> */}

                        <div className="track-info-container">
                            <div className="artist first-line">
                                {this.state.artist} - 
                            </div>
                            <div className="title first-line">
                                "{this.state.title}"
                            </div><br/>
                            <div className="bpm second-line">
                                {this.state.bpm} - 
                            </div>
                            <div className="album second-line">
                                {this.state.album} -
                            </div>
                            <div className="genre second-line">
                                {this.state.genre}
                            </div>



                        </div>
                            <input type="image" src={arrowDropDown} name="saveForm" id="saveForm" className="collapse-button btTxt test" id={this.props.fbID} style={{ marginBottom: '1rem' }} />
                    {/* </div> */}



                    <UncontrolledCollapse toggler={this.props.fbID}>
                    <Card className="card-container">
                        <CardBody>

                            <div className="notes">
                                <p className="edit-modal-label">Notes:</p><br/>
                                {this.state.notes}
                            </div>

                            <EditModal setBPM={this.props.setBPM} title={this.state.title} artist={this.state.artist} album={this.state.album} genre={this.state.genre} bpm={this.state.bpm} notes={this.state.notes} fbID={this.props.fbID} submitEditWithStateChange={this.submitEditWithStateChange}updateUserLibraryData={this.props.updateUserLibraryData}/>
                            <input type="image" src={trashIcon} className="btTxt trash-icon" onClick={this.handleDelete}/>
                        </CardBody>
                    </Card>
                    </UncontrolledCollapse>
                </div>
                {/* This edit and trash buttons need to go into a dropdown below the item listing */}



            </li>
        )
    }
}

export default TrackItem;