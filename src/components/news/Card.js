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



const NewsCard = async ({source:{category, country, description, name, url}}) => {
    let linkdata =  await getPreview(url);
    console.log(linkdata)
    debugger
  return(
    // <Card>
    //   <CardHeader tag="h3">{name}</CardHeader>
    //   <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
    //   <CardBody>
    //     <CardTitle>Card title</CardTitle>
    //     <CardText>{description}</CardText>
    //   </CardBody>
    // </Card>
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

async function getPreview(url){
  return  fetch(LINK_PREVIEW + url, {
    method: "GET"
  }).then(res => res.json())
  .then(res => {
    return res;
  });
}



export default NewsCard


// category: "technology"
// country: "us"
// description: "The PC enthusiast's resource. Power users and the tools they love, without computing religion."
// id: "ars-technica"
// language: "en"
// name: "Ars Technica"
// url: "http://arstechnica.com"
