import React from "react";

export default class UpdateProfileModal extends React.Component {

    render() {
        return (
            <div className="modal">
                <button className="buttons" id="back-button" name="showUpdateProfile" onClick={this.props.handleClick}>Go Back</button>
                <h2> Update Your Profile </h2>
            </div>
        )
    }

}