import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardImg,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Spinner } from 'reactstrap';
import { newsIcons } from '../../constants'
import { showSource, showArticle } from '../../store'
import '../../stylesheets/newsCarousel.css'


const CaroCard = ({source:{_id, category, country, description, name, url}, showSource}) => {
  const randomIcon = newsIcons[Math.floor(Math.random() * newsIcons.length)];
  return(
    <div onClick={() => showSource(_id)}>
      <img src={randomIcon} alt=""  />
    </div>
  )
}

export const NewsCard = ({article:{ author, title, category, urlToImage, description, url}}) => {
  return(
    <Card>
      <CardHeader tag="h3">{author}</CardHeader>
      <CardImg top width="100%" src={urlToImage} alt="Card image cap" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  )
}

const mapDispatchToCarousel = (dispatch) => {
  return {
    showSource: (id) => {
      return dispatch(showSource(id))
    }
  }
}
const mapDispatchToFeed = (dispatch) => {
  return {
    showArticle: (id) => {
      return dispatch(showArticle(id))
    }
  }
}


export const CarouselCard = connect (null, mapDispatchToCarousel)(CaroCard)
export const NewsFeedCard = connect(null, mapDispatchToFeed)(NewsCard)
