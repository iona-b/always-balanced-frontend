import React from 'react';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux'

class LoginContainer extends React.Component {

  componentDidUpdate() {
    if (this.props.userId) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className="LoginContainer">
          <LoginForm />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    userId: state.userId
  }
}

export default connect(mapStateToProps, null)(LoginContainer);