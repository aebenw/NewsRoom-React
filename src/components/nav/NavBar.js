import React,{Fragment} from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  } from 'reactstrap';
import { NavLink as RouterLink} from 'react-router-dom'
import '../../stylesheets/nav.css'
const NavBar = () => {
  return(
    <Fragment>
      <Navbar>
        <NavbarBrand>NewsRoom</NavbarBrand>
        <Nav>
          <NavItem>
            <RouterLink exact to="/home">Home</RouterLink>
          </NavItem>
           <NavItem>
            <RouterLink exact to="/article/saved">Saved Articles</RouterLink>
          </NavItem>
          <NavItem>
            <RouterLink to='/source/search'>Search Sources</RouterLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Fragment>
  )

}

export default NavBar
