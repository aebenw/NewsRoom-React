import React, { Component } from 'react';
import { connect } from 'react-redux'
import SignIn from './components/auth/SignIn'

class App extends Component {
  render() {
    const { currentUser } = this.props
    return (
      <div>
        <h1> news app </h1>
        {currentUser ?
          <h4>hello {currentUser.name}</h4>
          : <SignIn/>
        }
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapState)(App);
