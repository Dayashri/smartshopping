import React, { Component } from 'react';
import {Navbar,NavbarBrand,Container} from 'reactstrap';

class AppNavbar extends Component {

  render() {
    return (
      <div>
        <Navbar expand="sm" className="mb-3" style={{'background':'#3f51b5'}}>
            <NavbarBrand className="brand" style={{'color':'#fff',fontSize:"28px"}}>iSmart InstoreShopping</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
