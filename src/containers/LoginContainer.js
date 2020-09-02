import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class LoginContainer extends React.Component {

  componentDidUpdate() {
    if (this.props.userId) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div>
        <Link to='/' >
          <button className="back-button">Go Back</button>
        </Link>
        <div className="form-containers">
            <LoginForm />
            <br></br>
        </div>
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