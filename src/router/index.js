import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  LoginSignUp,
  Home,
  ShowSource,
  ShowArticle,
  SearchSources,
  SavedArticles
} from '../components'



const Routes = () => {
  return(
    <Fragment>
      <Switch>
        <Route exact path='/' component={LoginSignUp}/>
        <Route exact path='/home' render={routerProps => <Home {...routerProps}/>} />
        <Route exact path='/source/search' component={SearchSources} />
        <Route exact path='/article/saved' render={routerProps => <SavedArticles {...routerProps}/>} />
        <Route path={`/source/:_id`} component={ShowSource} />
        <Route path={`/article/:_id`} render={ShowArticle} />
      </Switch>
    </Fragment>
  )
}

export default Routes
