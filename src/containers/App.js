import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoggedInNav, LoggedOutNav } from '../components'
import { Container } from 'reactstrap'
import { token } from '../constants'
import {retrieveWithToken} from '../store'
import Routes from '../router'



class App extends Component {

    componentDidMount(){
    const { retrieveWithToken, currentUser } = this.props;
    const { history } = this.props
    if (token && !currentUser.email) {
      retrieveWithToken(token)
      .then(() => history.push("/home"))
    } else if (currentUser.email) {
      this.props.history.push('/home')
    } else {
      this.props.history.push('/')
    }
  }


  render() {
    return (
      <Fragment>
        {this.props.currentUser.email ?
        <LoggedInNav />
        : <LoggedOutNav/>
        }
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
    retrieveWithToken: (token) => {
      return dispatch(retrieveWithToken(token))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(App));
