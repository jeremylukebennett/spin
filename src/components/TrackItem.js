import React, { Component }from 'react';
import './TrackItem.css';
import ReactDOM from 'react-dom';


class TrackItem extends Component {
    
    render() {
        
        return(
            <li className="track-info-list-item">
                <div>
                    <div className="track-info-container">

                        <div className="artist">
                            {this.props.artist}
                        </div>
                        <div className="album">
                            {this.props.album}
                        </div>
                        <div className="bpm">
                            {this.props.bpm}
                        </div>
                        <div className="title">
                            {this.props.title}
                        </div>
                        <div className="genre">
                            {this.props.genre}
                        </div>
                        <div>
                            {this.props.notes}
                        </div>

                    </div>

                    <button  type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Edit</button>
                </div>

                {/* // <!-- Modal --> */}
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </li>














        )
    }
}

export default TrackItem;




