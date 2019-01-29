import React from 'react'
import {Card}  from '../components'
import '../stylesheets/newsCarousel.css'

const NewsContainer = ({sources}) => {
  return(
    <div class="contain">
      <div class="row">
        <div class="row__inner">
          {renderNews(sources)}
        </div>
      </div>
    </div>
  )
}

const renderNews = (sources) => {
  return(
    sources.map(source => <Card source={source}/>)
  )
}

export default (NewsContainer)
