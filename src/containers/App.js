import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavBar } from '../components'
import { Container } from 'reactstrap'
import { session } from '../constants'
import {retrieveSession} from '../store'
import Routes from '../router'



class App extends Component {
  // 
  //   componentDidMount(){
  //     console.log(session)
  //   const { retrieveSession, currentUser } = this.props;
  //   const { history } = this.props
  //   if (session && !currentUser.email) {
  //     retrieveSession(session)
  //     .then(() => history.push("/home"))
  //   } else if (currentUser.email) {
  //     this.props.history.push('/home')
  //   } else {
  //     this.props.history.push('/')
  //   }
  // }


  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Routes />
        </Container>
      </Fragment>
    );
  }
}

const mapState = ({user: {currentUser}}) => {
  return {
    currentUser
  }
}
const mapDispatch = (dispatch) => {
  return {
    retrieveSession: () => {
      return dispatch(retrieveSession(session))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(App));
