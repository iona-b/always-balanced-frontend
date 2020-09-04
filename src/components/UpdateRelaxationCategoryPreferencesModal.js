import React from "react";

export default class UpdateRelaxationPreferencesModal extends React.Component {

    render() {
        return (
            <div className="modal">
                <button className="buttons" id="back-button" name="showUpdateRelaxationCategoryPreferences" onClick={this.props.handleClick}>Go Back</button>
                <h2> Update Your Relaxation Preferences </h2>
            </div>
        )
    }

}