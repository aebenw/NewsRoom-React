import React from 'react'
import {NewsFeedCard}  from '../components'
import{Row, Col} from 'reactstrap'
import '../stylesheets/newsfeed.css'

const NewsFeed = ({articles}) => {
  return(
    <Row className="newsfeed">
      <Col sm="12" md="7">
      {/* <Col sm="12" md={{ size: 7, offset: 3 }}> */}
        {renderNews(articles)}
      </Col>
    </Row>
  )
}

const renderNews = (articles) => {
  return(
    articles.map(article => <NewsFeedCard key={article.id} article={article}/>)
  )
}

export default NewsFeed
