import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import Profile from '../components/Profile';

class ProfileContainer extends React.Component {

  componentDidUpdate() {
    if (!this.props.userId) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div>
        {this.props.user.id ?
          <div className="profile-container">
            <Profile />
          </div>
        :
          <div>
            <h2> Please log in to view your profile </h2>
            <Link to='/' >
              <button>Home</button>
            </Link>
          </div>
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