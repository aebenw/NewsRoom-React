import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { NewsFeed } from '../../containers'


class ShowSource extends Component{

  componentWillUnmount(){
    this.props.unmountSource()
  }

  render(){
    const {showSource} = this.props
    return (
      <Fragment>
        {showSource.articles ?
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
}


const mapState = ({news: {showSource}}) => {
  return{
    showSource,
  }
}
const mapDispatch = (dispatch) => {
  return{
    unmountSource: () => dispatch({type: "UNMOUNT_SOURCE"})
  }
}

export default withRouter(connect(mapState, mapDispatch)(ShowSource))
