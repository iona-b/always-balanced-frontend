import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/loginUser'

class Login extends React.Component{

    state = {
        username:'',
        password:'',
        loggedIn: false
    }

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleLogin = (event) => {
        event.preventDefault()
        let user = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        this.props.loginUser(user)
    }

    render(){
        return (
            <div className="Login">
            <form onSubmit={this.handleLogin}>
                <label>UserName</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <br/>
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
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
        loginUser: (user) => dispatch(loginUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);