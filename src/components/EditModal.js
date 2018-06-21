import React from 'react';
import { updateTrackInfo } from '../firebaseFunctionality';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import BPMCalc from './BPMCalc';
import './EditModal.css';
import editIcon from '../images/edit-icon.svg'



class EditModal extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            modal: false,
            title: this.props.title,
            artist: this.props.artist,
            album: this.props.album,
            genre: this.props.genre,
            bpm: this.props.bpm,
            notes: this.props.notes,
        }
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }

    stringifyFormData = (fd) => {
        const data = {};
          for (let key of fd.keys()) {
            data[key] = fd.get(key);
          }
          return JSON.stringify(data, null, 2);
    }

    editTrackInfo = (e) => {
        e.preventDefault();
        // this.toggle = !this.toggle;

        // Send updates to Firebase

        const data = new FormData(e.target);
        console.log('data',data);
    
        let stringifiedData = this.stringifyFormData(data);
        console.log('Stringified data edited: ',stringifiedData);
        
        let parsedData = JSON.parse(stringifiedData);
        console.log('Parsed data edited: ',parsedData);
      
        updateTrackInfo(parsedData);

        this.props.submitEditWithStateChange(parsedData);
        this.props.updateUserLibraryData();
    }


    handleChangeTrack = (e) => {
        this.setState({
            title: e.target.value,
        })
    }
    handleChangeArtist = (e) => {
        this.setState({
            artist: e.target.value,
        })
    }
    handleChangeAlbum = (e) => {
        this.setState({
            album: e.target.value,
        })
    }
    handleChangeGenre = (e) => {
        this.setState({
            genre: e.target.value,
        })
    }
    handleChangeBPM = (e) => {
        this.setState({
            bpm: e.target.value,
        })
    }
    handleChangeNotes = (e) => {
        this.setState({
            notes: e.target.value,
        })
    }


  render() {
    
    return (
      <div className="edit-modal-container">
          <input type="image" src={editIcon} className="btTxt edit-icon" onClick={this.toggle}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <form onSubmit={this.editTrackInfo}>
                <ModalHeader toggle={this.toggle}>Edit Track</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        Track:
                        <input className="form-control" type="text" name="track" value={this.state.title} onChange={this.handleChangeTrack}/><br/>
                        Artist:
                        <input className="form-control" type="text" name="artist" value={this.state.artist} onChange={this.handleChangeArtist}/><br/>
                        Album:
                        <input className="form-control" type="text" name="album" value={this.state.album} onChange={this.handleChangeAlbum}/><br/>
                        Genre:
                        <input className="form-control" type="text" name="genre" value={this.state.genre} onChange={this.handleChangeGenre}/><br/>
                        BPM:
                        <BPMCalc setBPM={this.props.setBPM} />
                        <input className="form-control" type="text" name="bpm" value={this.state.bpm} onChange={this.handleChangeBPM}/><br/>
                        Notes:
                        <input className="form-control notes-displayed" type="text" name="notes" value={this.state.notes} onChange={this.handleChangeNotes}/><br/>

                        <input id="hidden-fbID" type="text" name="fbID" value={this.props.fbID} readOnly="true"/><br/><br/>
                    </div>    
                </ModalBody>
                <ModalFooter>
                    <button className="submit-btn" type="submit" name="submit" onClick={this.toggle}>Submit</button>
                    <button className="cancel-btn" onClick={this.toggle}>Cancel</button>
                </ModalFooter>
                        </form>
                </Modal>
      </div>
    );
  }
}

export default EditModal;