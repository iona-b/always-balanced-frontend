import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'

class Home extends React.Component {

  render() {
    return (
      <div>
        {this.props.token ?
          <div id="home-div">
            <NavLink to='/createschedule'>Create Schedule</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/schedule'>Schedule</NavLink>
          </div>
        :
          <div id="home-div">
            <div className="signup-and-login-divs">
              <Link to='/login' >
                <img src={require("../images/login-button.png")} alt='' className="signup-and-login-divs" />
              </Link>
            </div>
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