import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "../../../index.css"
import "../../../../index.css";

//Component that returns images by imgID for ImageCarousel
class ImageCarousel extends React.Component {
  getLink() {
    return<div>{this.props.title}</div>;
  }
  render() {
    const onClickLink = this.getLink();
    console.log(this.props.title)
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
          <Link to={onClickLink}>
            <div key={i}>
              <img src={require("../../../../images/" + imgID)} className="EventImage" alt=" "/>
            </div>
            </Link>
      );
    })}
      </Slider>
      </div>
    )
  };
}
export default ImageCarousel;
