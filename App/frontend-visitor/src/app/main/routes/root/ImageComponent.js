import React from 'react';
import ImageCarousel from './ImageCarousel';

//Component that renders a ImageCarousel
class ImageComponent extends React.Component {
  getImageID() {
    let imageID = this.props.imageID;

    // for (let i in imageID) {
    //   let imageList = imageID[i]['imageID'];
    //   //console.log(this.props.imageID)
    //   for (let j in imageList) {
    //     let imageItem = imageList[j];
    //     delete imageItem["description"];
    //   }
    // }

    //console.log(this.props.imageID)
    return imageID;

  }
  render() {
  return <ImageCarousel imageID={this.getImageID()} />
};
}
export default ImageComponent;
