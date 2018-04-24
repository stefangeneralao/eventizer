import React from 'react';
import DateCard from './DateCard';

//Component that prints datecards
class DateContainer extends React.Component {
  printcards() {
    return this.props.cardsData.map((cardData, i) => {
        return <DateCard date={cardData.eventdate} events={cardData.events} key={i} />;
    });
  };

  render() {
    return (
      <div className="DateContainer">
        {this.printcards()}
      </div>
    );
  }
}

export default DateContainer;
