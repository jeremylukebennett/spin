import React from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';


class MainButton extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>{this.props.label}</button>
      </div>
    );
  }
}

export default MainButton;