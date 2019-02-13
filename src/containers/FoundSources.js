import React from 'react'
import { CarouselCard }  from '../components'
import{Row, Col} from 'reactstrap'
import '../stylesheets/newsfeed.css'

const FoundSourceFeed = ({sources}) => {
  return(
    <Row>
      <Col sm="12" md={{ size: 7, offset: 3 }}>
        {renderNews(sources)}
      </Col>
    </Row>
  )
}

const renderNews = (sources) => {
  return(
    sources.map(source => <CarouselCard source={source}/>)
  )
}

export default FoundSourceFeed
