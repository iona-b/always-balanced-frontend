import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';
import CreateScheduleContainer from './containers/CreateScheduleContainer'
import Home from './containers/Home'
import LoginContainer from './containers/LoginContainer'
import NotFound from './containers/NotFound'
import ProfileContainer from './containers/ProfileContainer'
import ScheduleContainer from './containers/ScheduleContainer'
import SignUpContainer from './containers/SignUpContainer'
import { logOutUser } from './actions/logOutUser'
import { fetchUser } from './actions/fetchUser';

class App extends React.Component {

  componentDidMount() {
    if(localStorage.token) {
      fetch('http://localhost:3000/persist',{
        headers:{
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(response => response.json())
      .then(json =>{
        this.handleAuthResponse(json)
      })
    }
  }
  
  handleAuthResponse = (json) => {
    if (json.user){
      localStorage.token = json.token
    } 
  }

  componentDidUpdate() {
    if (this.props.token && !this.props.user.id) {
      this.props.fetchUser(this.props.userId)
    }
  }

  handleLogOut = () => {
    this.props.logOutUser()
    localStorage.clear();
  }

  render(){
    return (
      <div className="App">
        {this.props.token ?
        <div id="nav-bar">
          <NavLink to='/' exact >Home</NavLink>
          <NavLink to='/createschedule'>Create Schedule</NavLink>
          <NavLink to='/profile'>Profile</NavLink>
          <NavLink to='/schedule'>Schedule</NavLink>
          <NavLink to='/' onClick={this.handleLogOut}>Log Out</NavLink>
        </div>
        :
        <div id="nav-bar">
          <NavLink to='/' exact >Home</NavLink>
        </div>
        }
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={LoginContainer}/>
          <Route path='/signup' component={SignUpContainer}/>
          <Route path='/createschedule' component={CreateScheduleContainer}/>
          <Route path='/profile' component={ProfileContainer}/>
          <Route path='/schedule' component={ScheduleContainer}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      userId: state.userId,
      user: state.user,
      token: state.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    logOutUser: () => dispatch(logOutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);