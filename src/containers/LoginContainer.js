import React from 'react';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux'

class LoginContainer extends React.Component {

  render() {
    return (
      <div className="LoginContainer">
          <LoginForm />
      </div>
    );
  }

}

export default connect(null, null)(LoginContainer);