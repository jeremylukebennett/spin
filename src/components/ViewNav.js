import React from 'react';
import BackButton from './BackButton';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import backArrow from '../images/back-btn.png'
import './ViewNav.css';


// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';


class ViewNav extends React.Component {

  render() {
    return (
      <div className="container-fluid mt-2">
        <div className="row">
            <div className="col">
                <h3 className="text-center">{this.props.title}</h3>
                <input type="image" src={backArrow} className="back-btn" onClick={this.props.backToHome}/>
            </div>
        </div>    
      </div>
    );
  }
}

export default ViewNav;