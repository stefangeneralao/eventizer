import React from 'react';
import RegisterCard from './RegisterCard';

// Component that renders RegisterCard.
class RegisterForm extends React.Component {
  render() {
    if(this.props.closed) {
      return <div style={{'padding': '100px', 'textAlign': 'center'}}>Hej! Anmälan är tyvärr stängd nu. Tack för att du försökte</div>
    }

    return <RegisterCard store={this.props.store} />;
  }
}

export default RegisterForm;
