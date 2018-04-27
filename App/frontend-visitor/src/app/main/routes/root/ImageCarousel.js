import React from 'react';
import ia from '../../../../images/ia.jpg';
import kåren from '../../../../images/kåren.jpg';
import sopplunch from '../../../../images/sopplunch.jpg';

//Component that returns images for ImageCarousel
class ImageCarousel extends React.Component {
  render() {
    return (
      <div className="ImageCarousel">
      <img src={ia} className="EventImage" alt="ia"/>
      <img src={kåren} className="EventImage" alt="kåren"/>
      <img src={sopplunch} className="EventImage" alt="sopplunch"/>
      </div>
    )
  }
}
export default ImageCarousel;
