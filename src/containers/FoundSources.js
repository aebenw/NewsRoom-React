import React from 'react'
import { SearchCard }  from '../components'
import{Row, Col} from 'reactstrap'
import '../stylesheets/newsfeed.css'

const FoundSourceFeed = ({sources}) => {
  return(
    <Row className="search">
        {renderNews(sources)}
    </Row>
  )
}

const renderNews = (sources) => {
  return(
    sources.map(source => <SearchCard source={source}/>)
  )
}

export default FoundSourceFeed
