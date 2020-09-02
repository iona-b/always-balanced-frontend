import React from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/signUpUser'

class SignUpForm extends React.Component{

    state = {
        username:'',
        password:'',
        startWorkTime:'',
        minNumHours:'',
        maxNumHours:''
    }

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSignUp = (event) => {
        event.preventDefault()
        let user = {
            username: event.target.username.value,
            password: event.target.password.value,
            start_work_time: event.target.startWorkTime.value,
            min_num_hours: event.target.minNumHours.value,
            max_num_hours: event.target.maxNumHours.value
        }
        this.props.signUpUser(user)
    }

    render(){
        return (
            <div id="SignUpForm">
            <h2 className="form-headers">Create Your Profile</h2>
            <form onSubmit={(event) => this.handleSignUp(event)}>
                <h4 className="form-labels">User Name</h4>
                <input type="text" name="username" value={this.state.username} className="input-fields" onChange={this.handleChange}/>
                <br/>
                <h4 className="form-labels">Password</h4>
                <input type="password" name="password" value={this.state.password} className="input-fields" onChange={this.handleChange}/>
                <br/>
                <h4 className="form-labels">At what time do you like to begin work? </h4>
                <input type="time" name="startWorkTime" value={this.state.startWorkTime} className="input-fields" onChange={this.handleChange}/>
                <br/>
                <h4 className="form-labels">What is the minimum number of hours you need to work per day? </h4>
                <input type="number" name="minNumHours" value={this.state.minNumHours} className="input-fields" onChange={this.handleChange}/>
                <br/>
                <h4 className="form-labels">And what's the maximum number of hours you like to work? </h4>
                <input type="number" name="maxNumHours" value={this.state.maxNumHours} className="input-fields" onChange={this.handleChange}/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      user: state.user,
      userTasks: state.userTasks,
      loading: state.loading
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        signUpUser: (user) => dispatch(signUpUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);