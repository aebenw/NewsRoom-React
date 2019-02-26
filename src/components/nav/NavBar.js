import React,{Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  } from 'reactstrap';
import { NavLink as RouterLink} from 'react-router-dom'
import '../../stylesheets/nav.css'

import {logOutUser} from '../../store/actions/user'

// Logged Out NavBar

const LogedOutNav = () => {
  return(
    <Navbar>
      <NavbarBrand>
        <RouterLink exact to='/'>NewsRoom</RouterLink>
      </NavbarBrand>
    </Navbar>
  )
}

class NavBar extends Component {

 delteJWT = () => {
    const {logOutUser, history} = this.props
    localStorage.removeItem("token")
    logOutUser()
    history.push('/')
}

  render(){
    return(
      <Fragment>
        <Navbar>
          <NavbarBrand>
            <RouterLink exact to='/home'>NewsRoom</RouterLink>
          </NavbarBrand>
          <Nav>
            <NavItem>
              <RouterLink exact to="/home">Home |</RouterLink>
            </NavItem>
             <NavItem>
              <RouterLink exact to="/article/saved">Saved Articles |</RouterLink>
            </NavItem>
            <NavItem>
              <RouterLink to='/source/search'>Search Sources</RouterLink>
            </NavItem>
            <NavItem>
              <p onClick={() => this.delteJWT()}>| Log Out</p>
            </NavItem>
          </Nav>
        </Navbar>
      </Fragment>
    )
  }

}

const mapDispatch = (dispatch) => {
  return {
    logOutUser: () => {
      return dispatch(logOutUser())
    }
  }
}

export const LoggedInNav = withRouter(connect(null, mapDispatch)(NavBar))
export const LoggedOutNav = withRouter(LogedOutNav)
