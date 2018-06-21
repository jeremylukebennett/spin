import React from 'react';
import './HomeNav.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class HomeNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }






  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <h1 id="spin-title">Spin</h1>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink ><div onClick={this.props.viewAbout}>About</div></NavLink>
              </NavItem>
              <NavItem>
                <NavLink >Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}





















// import React from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';

// export default class HomeNav extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="light" light expand="md">
//           <h1 id="spin-title">Spin</h1>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Menu
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem>
//                     About
//                   </DropdownItem>
//                   <DropdownItem>
//                     Logout
//                   </DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// import React from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// export default class HomeNav extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       dropdownOpen: false
//     };
//   }

//   toggle() {
//     this.setState(prevState => ({
//       dropdownOpen: !prevState.dropdownOpen
//     }));
//   }

//   render() {
//     return (

//       <div>
//         <h1 id="spin-title">Spin</h1>
//         <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//             <DropdownToggle caret>
//                 This dropdown's menu is right-aligned
//             </DropdownToggle>
//             <DropdownMenu right>
//                 <DropdownItem header>Header</DropdownItem>
//                 <DropdownItem disabled>Action</DropdownItem>
//                 <DropdownItem>Another Action</DropdownItem>
//                 <DropdownItem divider/>
//                 <DropdownItem>Another Action</DropdownItem>
//             </DropdownMenu>
//         </Dropdown>
//       </div>
//     );
//   }
// }