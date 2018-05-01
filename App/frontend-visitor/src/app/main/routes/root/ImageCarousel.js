import React from 'react';
import Slider from "react-slick";
import "../../../index.css"
import "../../../../index.css";


//Component that returns images for ImageCarousel
class ImageCarousel extends React.Component {
  getImageByID () {
    return this.props.imageID.map((imgID, i) => {
			console.log(imgID);
      return (
        <div className="EventImageSlider" key={i}>
        	<img src={require("../../../../images/" + imgID)} className="EventImage" alt=" "/>
        </div>
      );
    })
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
        <div>
        {this.getImageByID()}
        </div>
      </Slider>
      </div>
    )
  };
}
export default ImageCarousel;
