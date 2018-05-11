import React from 'react';
import { withRouter } from "react-router-dom";

// BreadCrumb component
class BreadCrumb extends React.Component {
  render() {
    console.log(this.props.location.pathname);
    console.log("history", this.props.history);
  	return (
  		<div>{this.props.location.pathname}</div>
  	);
  }
}

export default withRouter(BreadCrumb);
