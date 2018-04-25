import React from 'react';
import EventComponent from './EventComponent';

class EventContainer extends React.Component {
  getEvents() {
    const events = this.props.events.map((event, i) => {
      return (
        <EventComponent title={event.label} description={event.description} time={event.time} location={event.location} key={i}/>
      )
    });
    return events;

  }

  render () {
    return (
      <div>
        {this.getEvents()}
      </div>
    );
  }
}

export default EventContainer;
