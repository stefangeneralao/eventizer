import React from 'react';
import Slider from 'react-slick';
import '../../../index.css';
import '../../../../index.css';

// Component that returns images by imgID for ImageCarousel
class ImageCarousel extends React.Component {
  render() {
    let settings = {
      dots: true,
      autoplay: true,
      fade: true,
      speed: 200,
    };

    return (
      <div>
        <Slider {...settings}>
          {this.props.imageID.map((imgID, i) => {
            return (
              <div key={i}>
                <img
                  src={require("../../../../images/" + imgID.imageID)}
                  className="EventImage"
                  alt="Eventimage"
                />
              </div>);
            })}
        </Slider>
      </div>);
    }
  }
export default ImageCarousel;
