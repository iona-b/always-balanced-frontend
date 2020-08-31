import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom'

class Home extends React.Component {

  render() {
    return (
      <div>
        {this.props.token ?
          <div className="Home">
            <NavLink to='/createschedule'>Create Schedule</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/schedule'>Schedule</NavLink>
          </div>
        :
          <div className="Home">
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
          </div>
        }
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      user: state.user,
      token: state.token
  }
}

export default connect(mapStateToProps, null)(Home);