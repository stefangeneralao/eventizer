import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './routes/root';
import Event from './routes/event';
import Exhibitor from './routes/exhibitor';
import RegisterForm from './routes/registerform';

// Component that returns not found.
const getNotFoundComponent = () => {
  return (
    <div>
      Sorry. Vi jobbar på det. Kom tillbaka lite senare!
    </div>
  );
}

// Wrapper for all routes.
class Main extends React.Component {
  constructor() {
    super();
    this.getRoot = this.getRoot.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.getExhibitor = this.getExhibitor.bind(this);
    this.getRegisterForm = this.getRegisterForm.bind(this);
  }

  getRoot() {
    return (
      <Root store={this.props.store} />
    );
  }

  getEvent() {
    return (
      <Event store={this.props.store} />
    );
  }

  getExhibitor() {
    return (
      <Exhibitor store={this.props.store} />
    );
  }

  getRegisterForm() {
    return (
      <RegisterForm store={this.props.store} closed={false} />
    );
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={this.getRoot} />
          <Route path="/event" component={this.getEvent} />
          <Route path="/exhibitor" component={this.getExhibitor} />
          <Route path="/registerform" component={this.getRegisterForm} />
          <Route component={getNotFoundComponent} />
        </Switch>
      </main>
    );
  }
}

export default Main;
