import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { NewsFeed } from '../../containers'

import { getSavedArticles } from '../../store'


class SavedArticles extends Component {

  componentDidMount(){
    const { articles, getSavedArticles } = this.props
    getSavedArticles(articles)
  }

  render(){
    const {savedArticles} = this.props
    return (
      <Fragment>
        <h1>Your saved articles</h1>
        {savedArticles ?
        <Fragment>
            <NewsFeed articles={savedArticles} />

        </Fragment>
        : null
      }
      </Fragment>
    )
  }
}


const mapState = ({user: {currentUser: {articles, savedArticles}}}) => {
  return{
    articles,
    savedArticles
  }
}

const mapDispatch = (dispatch) => {
  return{
    getSavedArticles: (articles) => {
      return dispatch(getSavedArticles(articles))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(SavedArticles))
