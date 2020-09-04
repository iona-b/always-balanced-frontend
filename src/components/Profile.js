import React from 'react';
import { connect } from 'react-redux'
import UpdateProfileModal from "./UpdateProfileModal";
import UpdateRelaxationCategoryPreferencesModal from "./UpdateRelaxationCategoryPreferencesModal";
import TasksModal from "./TasksModal";
import DeleteProfileModal from "./DeleteProfileModal";

class Profile extends React.Component {

  state = {
    showUpdateProfile: false,
    showUpdateRelaxationCategoryPreferences: false,
    showTasks: false,
    showDeleteProfile: false
  }

  handleClick = event => {
    this.setState ({
      [event.target.name]: !this.state[event.target.name]
    })
  }

  render() {
    return (
      <div id="profile">
        {this.state.showUpdateProfile === true ? <UpdateProfileModal handleClick={this.handleClick} /> : null }
        {this.state.showUpdateRelaxationCategoryPreferences === true ? <UpdateRelaxationCategoryPreferencesModal handleClick={this.handleClick} /> : null }
        {this.state.showTasks === true ? <TasksModal handleClick={this.handleClick} /> : null }
        {this.state.showDeleteProfile === true ? <DeleteProfileModal handleClick={this.handleClick} /> : null }
          <h2>Hi there, {this.props.user.username}!</h2>
          <div>
            <button name="showUpdateProfile" onClick={this.handleClick}>Update Profile</button>
            <button name="showUpdateRelaxationCategoryPreferences" onClick={this.handleClick}>Update Relaxation Preferences</button>
            <button name="showTasks" onClick={this.handleClick}>Update Tasks</button>
            <div className="profile-divs">
              <img src={require("../images/delete-profile-logo.png")} alt='' className="profile-logos" name="showDeleteProfile" onClick={this.handleClick} />
              <h2 className="profile-headers" name="showDeleteProfile" onClick={this.handleClick}>Delete Profile</h2>
            </div>
          </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
    return {
      user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);