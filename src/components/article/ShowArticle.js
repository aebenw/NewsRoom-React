import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { favArticle } from '../../store'

const ShowArticle = ({showArticle, currentUserId, favArticle}) => {
  return (
    <Fragment>
      {showArticle ?
      <Fragment>
        <button onClick={() => favArticle(currentUserId,showArticle._id)}>
          Save Article
        </button>
        <a href={showArticle.url}>
          <img height="200" width="200" src={showArticle.urlToImage} alt="article"/>
        </a>
        <h1>{showArticle.title}</h1>
        <h1>{showArticle.author}</h1>
        <h1>{showArticle.description}</h1>
        <h1>{showArticle.content}</h1>
      </Fragment>
      : null
    }
    </Fragment>
  )
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
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(ShowArticle))
