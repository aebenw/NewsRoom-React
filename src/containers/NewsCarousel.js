import React from 'react'
import {CarouselCard}  from '../components'
import{Row} from 'reactstrap'
// import '../stylesheets/newsCarousel.css'
import InfiniteCarousel from 'react-leaf-carousel';


const NewsCarousel = ({sources}) => {
  return(
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
  )
}

const renderNews = (sources) => {
  return(
    sources.map(source => <CarouselCard source={source}/>)
  )
}

export default (NewsCarousel)
