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
import '../../stylesheets/newsCarousel.css'
import { LINK_PREVIEW } from '../../constants'
const urlMetadata = require('url-metadata')



export const CarouselCard = ({source:{category, country, description, name, url}}) => {
  return(
    <Fragment>
      <div class="tile">
        <div class="tile__media">
          <img class="tile__img"  src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thesaleslion.com%2Fwp-content%2Fuploads%2F2013%2F03%2Fthe-new-york-times.jpg&f=1" alt=""  />
        </div>
        <div class="tile__details">
          <div class="tile__title">
            {name}
          </div>
        </div>
      </div>
      : <Spinner/>
    }
      </Fragment>

  )
}

export const NewsFeedCard = ({article:{ source: {name}, category, urlToImage, description, url}}) => {
  return(
    <Card>
      <CardHeader tag="h3">{name}</CardHeader>
      <CardImg top width="100%" src={urlToImage} alt="Card image cap" />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  )
}

// "source": {
//         "id": null,
//         "name": "Washingtonexaminer.com"
//       },
//       "author": "https://www.washingtonexaminer.com/author/eddie-scarry",
//       "title": "Howard Schultz meets the 'ratio' mob - Washington Examiner",
//
//       "description": "Potential 2020 candidate and former Starbucks CEO Howard Schultz made his debut Saturday on Twitter. He was immediately met by the mind
// -numbingly stupid “RATIO!” crowd.",
//       "url": "https://www.washingtonexaminer.com/opinion/columnists/howard-schultz-meets-the-ratio-mob",
//       "urlToImage": "https://mediadc.brightspotcdn.com/dims4/default/8201922/2147483647/strip/true/crop/2277x1196+2+0/resize/1200x630!/quality/90/?url=https%
// 3A%2F%2Fmediadc.brightspotcdn.com%2Fc1%2Ff8%2F57a3a69a4119accdbb29edb21540%2Fap19029018922807.jpg",
//       "publishedAt": "2019-01-29T19:04:00Z",
//       "content": "P otential 2020 candidate and former Starbucks CEO Howard Schultz made his debut Saturday on Twitter. He was immediately met by the mind-nu
// mbingly stupid RATIO! crowd. For the uninitiated, the ratio here is the relationship between the number of replies and t… [+1849 chars]"
//     }

// export {
//   NewsFeedCard,
//   CarouselCard
// }


// category: "technology"
// country: "us"
// description: "The PC enthusiast's resource. Power users and the tools they love, without computing religion."
// id: "ars-technica"
// language: "en"
// name: "Ars Technica"
// url: "http://arstechnica.com"
