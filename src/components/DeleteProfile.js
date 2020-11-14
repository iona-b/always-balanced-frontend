import React from "react";
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteUser } from '../actions/deleteUser'
import { logOutUser } from '../actions/logOutUser'

class DeleteProfile extends React.Component {

    handleClick = () => {
        this.props.deleteUser(this.props.user.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="home-div">
                <div className="form-containers centred-divs">
                    <h2> Are you sure you'd like to delete your profile?</h2>
                    <button className="buttons" onClick={this.handleClick}>Yes</button>
                    <Link to='/profile'>
                        <button className="buttons" >No</button>
                    </Link>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      user: state.userReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteUser: (userId) => dispatch(deleteUser(userId)),
        logOutUser: () => dispatch(logOutUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProfile);