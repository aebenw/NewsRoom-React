import React from 'react'
import {CarouselCard}  from '../components'
import{Row} from 'reactstrap'
import '../stylesheets/newsCarousel.css'

const NewsCarousel = ({sources}) => {
  return(
    <Row>
      <div class="contain">
        <div class="carousel-row">
          <div class="row__inner">
            {renderNews(sources)}
          </div>
        </div>
      </div>
    </Row>
  )
}

const renderNews = (sources) => {
  return(
    sources.map(source => <CarouselCard source={source}/>)
  )
}

export default (NewsCarousel)
