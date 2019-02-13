import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import {fetchSources, fetchArtilces} from '../store'
import { NewsCarousel, NewsFeed } from '../containers'
import { Spinner } from 'reactstrap'

class Home extends Component {

  componentDidMount(){
    const {fetchSources, fetchArtilces} = this.props;
    fetchSources()
    fetchArtilces()
  }

  render(){
    console.log(document.cookie)
    const {sources, articles} = this.props
    return(
      <Fragment>
        {sources.length && articles.length ?
          <Fragment>
            <NewsCarousel sources={sources} />
            <NewsFeed articles={articles} />
          </Fragment>
          :
          <Spinner color="info" />
        }
      </Fragment>
    )
  }
}


const mapState = ({user: {currentUser}, news: {sources, articles}}) => {
  return {
    currentUser,
    sources,
    articles
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchSources: () => {return dispatch(fetchSources())},
    fetchArtilces: () => {return dispatch(fetchArtilces())}
  }
}

export default withRouter(connect(mapState, mapDispatch)(Home))
