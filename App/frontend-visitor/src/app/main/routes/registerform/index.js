import React from 'react';
import RegisterCard from './RegisterCard';

// Component that renders RegisterCard.
class RegisterForm extends React.Component {
  render() {
    return <RegisterCard store={this.props.store} />;
  }
}

export default RegisterForm;
