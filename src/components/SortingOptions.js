import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './SortingOptions.css';

export default class SortingOptions extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }
    
    sortSelectionBPM = () => {
        console.log("BPM Sort Selected")
        this.props.setSortSelection("BPM")
    }
    
    sortSelectionGenre = () => {
        this.props.setSortSelection("genre")
    }

    sortSelectionArtist = () => {
        this.props.setSortSelection("artist")
    }
    sortSelectionAlbum = () => {
        this.props.setSortSelection("album")
    }
    sortSelectionTrack = () => {
        this.props.setSortSelection("title")
    }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="link">
            <span>
                Sort By...
            </span>
        </DropdownToggle>
        <DropdownMenu>

            <DropdownItem>
                <div onClick={this.sortSelectionBPM}>BPM</div>
            </DropdownItem>

            <DropdownItem>            
                <div onClick={this.sortSelectionGenre}>Genre</div>
            </DropdownItem>

            <DropdownItem>
                <div onClick={this.sortSelectionArtist}>Artist</div>
            </DropdownItem>

            <DropdownItem>
                <div onClick={this.sortSelectionAlbum}>Album</div>
            </DropdownItem>

            <DropdownItem>
                <div onClick={this.sortSelectionTrack}>Track</div>
            </DropdownItem>

        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}