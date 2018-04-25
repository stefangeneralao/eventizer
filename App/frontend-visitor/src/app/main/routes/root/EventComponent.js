import React from 'react';
//import { Link } from 'react-router-dom';

class EventComponent extends React.Component {
  getTitle() {
    return<div className="EventComponent__event-label">
      {this.props.title}
    </div>;
  }

  getLocation() {
    return<div className="EventComponent__event-location">
      {this.props.location}
    </div>;
  }

  getTime() {
    return<div className="EventComponent__event-time">
      {this.props.time}
    </div>;
  }

  getDescription() {
    return<div className="EventComponent__event-description">
      {this.props.description}
    </div>;
  }

  render () {
		const title = this.getTitle();
    const location = this.getLocation();
    const time = this.getTime();
    const description = this.getDescription();
		return<div className="EventComponent__event-wrapper">{location}{title}{time}{description}</div>
	};
}
export default EventComponent;
