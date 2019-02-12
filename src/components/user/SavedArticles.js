import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { NewsFeed } from '../../containers'

import { getFavArticles, showArticle } from '../../store'


class FavArticles extends Component {
  // debugger

  componentDidMount(){
    const { articles } = this.props

  }

  return (
    <Fragment>
      {showSource ?
      <Fragment>
        <h1>{showSource.name}</h1>
        <h1>{showSource.description}</h1>
        { showSource.articles.length ?
          <NewsFeed articles={showSource.articles} />
          : null
        }
      </Fragment>
      : null
    }
    </Fragment>
  )
}


const mapState = ({user: {currentUser: {articles}}}) => {

  return{
    articles
  }
}

export default withRouter(connect(mapState)(ShowSource))
