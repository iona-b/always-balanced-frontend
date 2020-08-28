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
            <form onSubmit={(event) => this.handleSignUp(event)}>
                <label>UserName</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <br/>
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <br/>
                <label>Start Work Time</label>
                <input type="number" name="startWorkTime" value={this.state.startWorkTime} onChange={this.handleChange}/>
                <br/>
                <label>Minimum Number of Hours</label>
                <input type="number" name="minNumHours" value={this.state.minNumHours} onChange={this.handleChange}/>
                <br/>
                <label>Maximum Number of Hours</label>
                <input type="number" name="maxNumHours" value={this.state.maxNumHours} onChange={this.handleChange}/>
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