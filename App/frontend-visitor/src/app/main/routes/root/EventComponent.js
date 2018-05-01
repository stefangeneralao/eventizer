import React from 'react';
import { Link } from 'react-router-dom';

//Component that renders EventCards with links to events
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

  getLink() {
    if (this.props.exhibitors && this.props.exhibitors.length === 1){
      return "/exhibitor/" + this.props.exhibitors[0].label;
    }
    else {
      return "/event/" + this.props.title;
    }
  }

  render () {
		const title = this.getTitle();
    const location = this.getLocation();
    const time = this.getTime();
    const description = this.getDescription();
    const onClickLink = this.getLink();
		return<div className="EventComponent__event-wrapper">
    <div>
      {location}
      <Link to={onClickLink}>
      {title}
      </Link>
    </div>

    <div>
      {time}
    </div>

    <div>
      {description}
    </div>
  </div>
	};
}
export default EventComponent;
