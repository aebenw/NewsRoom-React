import React,{Fragment} from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

const NavBar = () => {
  return(
    <Fragment>
      <Navbar>
        <NavbarBrand>NewsRoom</NavbarBrand>
        <Nav>
          {/* <NavItem>
            <NavLink>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Contact</NavLink>
          </NavItem> */}
        </Nav>
      </Navbar>
    </Fragment>
  )

}

export default NavBar
