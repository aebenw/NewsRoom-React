import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavBar } from '../components'
import { Container } from 'reactstrap'
import Routes from '../router'



class App extends Component {

  render() {
    return (
      <Container>
        <NavBar />
        <Routes />
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    currentUser: state.user.currentUser._id
  }
}

export default withRouter(connect(mapState)(App));
