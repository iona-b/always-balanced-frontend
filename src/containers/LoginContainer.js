import React from 'react';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux'
import { logOutUser } from '../actions/logOutUser'

class LoginContainer extends React.Component {

  handleLogOut = () => {
    console.log(this.props.user)
    this.props.logOutUser()
    console.log("logout")
  }

  render() {
    
    return (
      <div className="LoginContainer">
          <LoginForm />
          <button onClick={this.handleLogOut}>LOGOUT</button>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    logOutUser: () => dispatch(logOutUser())
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer);