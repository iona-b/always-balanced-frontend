import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

class Home extends React.Component {

  render() {
    return (
      <div>
        {this.props.token ?
          <div id="home-div">
            <NavLink to='/createschedule'>Create Schedule</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/schedule'>Schedule</NavLink>
            <img src={require("../images/background-bottom-left.png")} alt='' id="background-bottom-left" onClick={this.handleClick} />
            <img src={require("../images/background-top-right.png")} alt='' id="background-top-right" onClick={this.handleClick} />
          </div>
        :
          <div id="home-div">
            <img src={require("../images/background-bottom-left.png")} alt='' id="background-bottom-left" onClick={this.handleClick} />
            <img src={require("../images/background-top-right.png")} alt='' id="background-top-right" onClick={this.handleClick} />
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