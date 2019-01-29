import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Home, Login, SignUp } from '../components'
import { Container } from 'reactstrap'
// import Signup from '../components'



class App extends Component {
  render() {
    const { currentUser } = this.props
    return (
      <Container>
        <h1> news app </h1>
        {currentUser ?
          <Home />
          :
          <Fragment>
            <Login/>
            <SignUp/>
          </Fragment>
        }
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    currentUser: state.user.currentUser._id
  }
}

export default connect(mapState)(App);
