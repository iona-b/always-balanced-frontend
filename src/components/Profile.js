import React from 'react';
import { connect } from 'react-redux'

class Profile extends React.Component {

  render() {
    return (
      <div id="profile">
          <h2>Hi there, {this.props.user.username}!</h2>
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