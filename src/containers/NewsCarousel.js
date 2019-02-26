import React, { Fragment } from 'react'
import {CarouselCard}  from '../components'
import{ Row, Col, Badge } from 'reactstrap'
import InfiniteCarousel from 'react-leaf-carousel';


const NewsCarousel = ({sources}) => {
  return(
    <Fragment>
      <Row>
        <Col sm="12" md={{ size: 7, offset: .8 }}>
          <h2><Badge>News Sources</Badge></h2>
        </Col>
      </Row>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        lazyLoad={false}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={true}
      >
        {renderNews(sources)}
      </InfiniteCarousel>
    </Fragment>
  )
}

const renderNews = (sources) => {
  return(
    sources.map(source => {
      return <CarouselCard key={source.id} source={source}/>
    })
  )
}

export default (NewsCarousel)
