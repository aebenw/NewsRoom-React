import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { LoginSignUp, Home, ShowSource } from '../components'


const Routes = () => {
  return(
    <Fragment>
      <Route exact path='/' component={LoginSignUp}/>
      <Route exact path='/home' render={routerProps => <Home {...routerProps}/>} />
      <Route path={`/source/:_id`} render={ShowSource} />
    </Fragment>
  )
}

export default Routes
