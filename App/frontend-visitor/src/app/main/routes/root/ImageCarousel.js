import React from 'react';
import Slider from "react-slick";
import "../../../../index.css";
import ia from '../../../../images/ia.jpg';
import kåren from '../../../../images/kåren.jpg';
import sopplunch from '../../../../images/sopplunch.jpg';

//Component that returns images for ImageCarousel
class ImageCarousel extends React.Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="ImageCarousel">
  <Slider {...settings}>
    <div>
    <img src={ia} className="EventImage" alt="ia"/>
    </div>
    <div>
    <img src={kåren} className="EventImage" alt="kåren"/>
    </div>
    <div>
    <img src={sopplunch} className="EventImage" alt="sopplunch"/>
    </div>
    <div>
      <img src="http://placekitten.com/g/400/200" />
    </div>
  </Slider>
</div>
    )
  }
}
export default ImageCarousel;
