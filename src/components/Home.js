import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import {fetchSources} from '../store'
import {NewsContainer} from '../containers'
import { Spinner } from 'reactstrap'

class Home extends Component {

  componentDidMount(){
    const {fetch} = this.props;
    fetch()
  }


  render(){
    const {sources} = this.props
    console.log(sources, "Render of home")
    return(
      <Fragment>
        {sources.length ?
          <NewsContainer sources={sources} />
          :
          <Spinner color="info" />
        }
      </Fragment>
    )
  }
}


const mapState = ({user: {currentUser}, news: {sources}}) => {
  return {
    currentUser,
    sources
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetch: () => {return dispatch(fetchSources())}
  }
}

export default connect(mapState, mapDispatch)(Home)
