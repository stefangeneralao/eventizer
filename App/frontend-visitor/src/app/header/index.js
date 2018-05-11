import React from 'react';
import home from './icons/home.svg';
import { withRouter } from "react-router-dom";

// Header component
class Header extends React.Component {
  constructor() {
		super();

		this.state = {descriptionOpen: false};
	}
  
  // Handler function for home button
  onHomeBtnClick() {
    this.props.history.push("/");
  }
  // Creates home button
  getHomeBtn() {
    let className = 'HomeBtn';
    if(this.state.descriptionOpen === true) {
      className = className + ' open';
    } else {
      className = className + ' closed';
    }

    return (
        <img
          src={home}
          alt="home"
          className={className}
          onClick={() => {this.onHomeBtnClick()}}
        />
    );
  }

  render() {
    return(
      <header className="App-header">
        {this.getHomeBtn()}
        <h1 className="App-title">
          <a href="/">
            Eventizer
          </a>
        </h1>
      </header>
    );
  }
}

export default withRouter(Header);
