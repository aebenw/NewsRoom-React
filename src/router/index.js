import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { LoginSignUp, Home, ShowSource, ShowArticle } from '../components'


const Routes = () => {
  return(
    <Fragment>
      <Route exact path='/' component={LoginSignUp}/>
      <Route exact path='/home' render={routerProps => <Home {...routerProps}/>} />
      <Route path={`/source/:_id`} render={ShowSource} />
      <Route path={`/article/:_id`} render={ShowArticle} />
    </Fragment>
  )
}

export default Routes
