import React, { Fragment } from 'react';
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { Login, SignUp } from '../';


const LoginSignUp = () => {
  return (
    <Fragment>
      <Login/>
      <SignUp/>
    </Fragment>
  )
}

export default LoginSignUp
