import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { Row } from 'reactstrap'

import { favArticle, showArticle } from '../../store'

import '../../stylesheets/showArticle.css'

class ShowArticle extends Component {

  componentDidMount(){
    const { pathname } = this.props.history.location
    const { showArticle, showArticleAction } = this.props
    if (!showArticle){
      let id = pathname.substr(pathname.lastIndexOf('/') + 1);
      showArticleAction(id)
    }
  }

  componentWillUnmount(){
    this.props.unmountArticle()
  }

  render(){
    const { showArticle, currentUserId, favArticle } = this.props
    return (
      <Fragment>
        {showArticle ?
        <Fragment>
          <Row>
            <div className="article-header">
              <h1>{showArticle.title}</h1>
              <h4>BY: {showArticle.author || "Suzie McGee"}</h4>
              <a href={showArticle.url}>
                <img className="article" src={showArticle.urlToImage} alt="article"/>
              </a>
            </div>
          </Row>
          <button onClick={() => favArticle(currentUserId,showArticle._id)}>
            Save Article
          </button>
          <article>
            <h3 className="desc">{showArticle.description}</h3>
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
    dispatch(showArticle(id)),
    unmountArticle: () => dispatch({type: 'UNMOUNT_ARTICLE'})
  }
}

export default withRouter(connect(mapState, mapDispatch)(ShowArticle))
