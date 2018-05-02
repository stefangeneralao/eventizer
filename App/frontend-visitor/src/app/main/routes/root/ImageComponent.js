import React from 'react';
import ImageCarousel from './ImageCarousel';

//Component that renders a ImageCarousel
class ImageComponent extends React.Component {
  getImageID() {
    let imageID = this.props.imageID;
    return imageID;
  }

  render() {
    return <ImageCarousel imageID={this.getImageID()} />
  };
}

export default ImageComponent;
