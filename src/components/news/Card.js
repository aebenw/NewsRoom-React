import React, {Fragment} from 'react';
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
import { showSource } from '../../store'
import '../../stylesheets/newsCarousel.css'




export const CarouselCard = ({source:{_id, category, country, description, name, url}}) => {
  const randomIcon = newsIcons[Math.floor(Math.random() * newsIcons.length)];
  return(
    <div  onClick={() => showSource(_id)}>
      <img src={randomIcon} alt=""  />
    </div>
  )
}

export const NewsFeedCard = ({article:{ author, title, category, urlToImage, description, url}}) => {
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
