import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Profile extends React.Component {

  render() {
       
    return (
      <div id="profile-div">
          <div className="menus centred-divs" >
            <Link to='/updateprofile'>
              <button className="menu-buttons">Update Profile</button>
            </Link>
            <Link to='/updaterelaxationpreferences'>
              <button className="menu-buttons">Update Relaxation Preferences</button>
            </Link>
            <Link to='/updatetasks'>
              <button className="menu-buttons" >Update Tasks</button>
            </Link>
            <Link to='/deleteprofile'>
              <button className="menu-buttons">Delete Profile</button>
            </Link>
          </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
    return {
      user: state.userReducer.user
    }
}

export default connect(mapStateToProps, null)(Profile);