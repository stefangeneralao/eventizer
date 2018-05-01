import React from 'react';
import Slider from "react-slick";
import "../../../../index.css";
// import ia from '../../../../images/ia.jpg';
//import kåren from '../../../../images/kåren.jpg';
//import sopplunch from '../../../../images/sopplunch.jpg';

//Component that returns images for ImageCarousel
class ImageCarousel extends React.Component {
  getImageByID () {
    return this.props.imageID.map((imgID, i) => {
			console.log(imgID);
      return (
        <div key={i}>
        	<img src={require("../../../../images/" + imgID)} alt=" "/>
        </div>
      );
    })
  }

  render() {
    var settings = {
      dots: true,
      autoplay: true,
      fade: true,
      speed: 200
    };

    return (
      <div className="ImageCarousel">
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
