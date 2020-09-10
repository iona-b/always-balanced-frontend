import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

class Home extends React.Component {

  render() {

    return (

      <div>
        {this.props.token ?
          <div id="home-div">
            <img src={require("../images/background-bottom-left.png")} alt='' id="background-bottom-left"/>
            <img src={require("../images/background-top-right.png")} alt='' id="background-top-right"/>
            <div id="home-menu" className="landing-page-elements">
              <NavLink to='/createschedule'>
                <button className="menu-buttons">Create Schedule</button>
              </NavLink>
              <NavLink to='/schedule'>
                <button className="menu-buttons">View Schedule</button>
              </NavLink>
              <NavLink to='/profile'>
                <button className="menu-buttons">Profile</button>
              </NavLink>
              <NavLink to='/about'>
                <button className="menu-buttons">About</button>
              </NavLink>
            </div>
          </div>
        :
          <div id="home-div">
            <img className="landing-page-background" src={require("../images/background-bottom-left.png")} alt='' id="background-bottom-left"/>
            <img className="landing-page-background" src={require("../images/background-top-right.png")} alt='' id="background-top-right"/>
            <img id="always-balanced-welcome" src={require("../images/always-balanced-welcome.png")} alt='' />
            <div id="home-menu" className="pre-login">
              <h2>Welcome to Always Balanced</h2>
              <NavLink to='/login'>
                <button className="menu-buttons">Login</button>
              </NavLink>
              <NavLink to='/signup'>
                <button className="menu-buttons">Sign Up</button>
              </NavLink>
              <NavLink to='/about'>
                <button className="menu-buttons">About</button>
              </NavLink>
            </div>
          </div>
        }
    </div>

    );
    
  }
}

const mapStateToProps = state => {
  return {
      user: state.userReducer.user,
      token: state.userReducer.token
  }
}

export default connect(mapStateToProps, null)(Home);