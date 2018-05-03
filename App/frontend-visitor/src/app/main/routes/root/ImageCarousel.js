import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "../../../index.css"
import "../../../../index.css";

//Component that returns images by imgID for ImageCarousel
class ImageCarousel extends React.Component {
  getLink() {
    return<div>{this.props.eventLabel}</div>;
  }
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      fade: true,
      speed: 200,
    };

    return (
      <div>
      <Slider {...settings}>
        {this.props.imageID.map((imgID,i) => {
        return (
          <div key={i}>
            <Link to={"event/" + imgID.eventLabel}>
              <img src={require("../../../../images/" + imgID.imageID)} className="EventImage" alt=" "/>
            </Link>
          </div>
          );
        })}
      </Slider>
      </div>
    )
  };
}
export default ImageCarousel;
