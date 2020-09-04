import React from "react";
import { connect } from 'react-redux'
import { deleteUser } from '../actions/deleteUser'
import { logOutUser } from '../actions/logOutUser'

class DeleteProfileModal extends React.Component {

    handleClick = () => {
        this.props.deleteUser(this.props.user.id)
    }

    render() {
        return (
            <div className="modal">
                <h2> Are you sure you'd like to delete your profile?</h2>
                <button onClick={this.handleClick}>Yes</button>
                <button name="showDeleteProfile" onClick={this.props.handleClick}>No</button>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteUser: (userId) => dispatch(deleteUser(userId)),
        logOutUser: () => dispatch(logOutUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProfileModal);