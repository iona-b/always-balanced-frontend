import React from 'react';
import { connect } from 'react-redux'
import Profile from '../components/Profile';

class ProfileContainer extends React.Component {

  componentDidUpdate() {
    if (!this.props.userId) {
      debugger
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div>
        {this.props.user.id ?
          <div className="ProfileContainer">
            <Profile />
          </div>
        :
          <h2> You are not logged in + add button to log in </h2>
        }
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(ProfileContainer);