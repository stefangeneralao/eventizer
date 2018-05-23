import React from 'react';
import EventComponent from './EventComponent';

// Component that returns EventComponent.
class EventContainer extends React.Component {
  getEvents() {
    const events = this.props.events.map((event, i) => {
      return (
        <EventComponent
          title={event.label}
          description={event.description}
          time={event.time}
          location={event.location}
          exhibitors={event.exhibitors}
          imgID={event.imgID}
          key={i}
        />
      )
    });
    return events;
  }

  render () {
    return (
      <div className="EventContainer">
        {this.getEvents()}
      </div>
    );
  }
}

export default EventContainer;
