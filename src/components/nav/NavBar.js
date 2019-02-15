import React,{Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';
import { NavLink as RouterLink} from 'react-router-dom'
import '../../stylesheets/nav.css'

import {logOutUser} from '../../store/actions/user'

class NavBar extends Component {

 delteJWT = () => {
    const {logOutUser, history} = this.props
    localStorage.removeItem("token")
    logOutUser()
    history.push('/')
}

  render(){
    const { currentUser } = this.props
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
            { currentUser.email ?
            <NavItem>
              {/* <RouterLink exact to='/home' onClick={() => delteJWT()}>| Log Out</RouterLink> */}
              <p onClick={() => this.delteJWT()}>| Log Out</p>
            </NavItem>
            : null
          }
          </Nav>
        </Navbar>
      </Fragment>
    )
  }

}


const mapState = ({user: {currentUser}}) => {
  return {
    currentUser
  }
}

const mapDispatch = (dispatch) => {
  return {
    logOutUser: () => {
      return dispatch(logOutUser())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(NavBar))
