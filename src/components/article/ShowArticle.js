import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { Row } from 'reactstrap'

import { favArticle, showArticle } from '../../store'

class ShowArticle extends Component {

  componentDidMount(){
    const { pathname } = this.props.history.location
    const { showArticle, showArticleAction } = this.props
    if (!showArticle){
      let id = pathname.substr(pathname.lastIndexOf('/') + 1);
      showArticleAction(id)
    }
  }

  render(){
    const { showArticle, currentUserId, favArticle } = this.props
    return (
      <Fragment>
        {showArticle ?
        <Fragment>
          <Row>
            <h1>{showArticle.title}</h1>
            <a href={showArticle.url}>
              <img  src={showArticle.urlToImage} alt="article"/>
            </a>
          </Row>
          <button onClick={() => favArticle(currentUserId,showArticle._id)}>
            Save Article
          </button>
          <article>
            <h1>{showArticle.author}</h1>
            <h1>{showArticle.description}</h1>
            <p>{showArticle.content}</p>
          </article>
        </Fragment>
        : null
      }
      </Fragment>
    )
  }
}


const mapState = ({news: {showArticle}, user: {currentUser}}) => {
  return{
    currentUserId: currentUser._id,
    showArticle
  }
}

const mapDispatch = (dispatch) => {
  return{
    favArticle: (id, user) => {
      return dispatch(favArticle(id, user))
    },
    showArticleAction: (id) =>
    dispatch(showArticle(id))
  }
}

export default withRouter(connect(mapState, mapDispatch)(ShowArticle))
