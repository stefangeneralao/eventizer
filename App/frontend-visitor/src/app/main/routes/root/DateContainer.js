import React from 'react';
import DateCard from './DateCard';

//Component that prints datecards
class DateContainer extends React.Component {

  printcards() {
    try {
      return this.props.cardsData.map((cardData, i) => {
          return <DateCard date={cardData.date} events={cardData.events} key={i} />;
      });
    } catch (error) {
      // something
    }
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
