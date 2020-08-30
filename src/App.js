import React from 'react';
import {Route, Switch, NavLink, withRouter} from 'react-router-dom'
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

class App extends React.Component {

  handleLogOut = () => {
    this.props.logOutUser()
  }

  render(){
    return (
      <div className="App">
        {this.props.user.id ?
        <div id="nav-bar">
          <NavLink to='/' exact >Home</NavLink>
          <NavLink to='/createschedule'>Create Schedule</NavLink>
          <NavLink to='/profile'>Profile</NavLink>
          <NavLink to='/schedule'>Schedule</NavLink>
          <NavLink to='/' onClick={this.handleLogOut}>Log Out</NavLink>
        </div>
        :
        <div id="nav-bar">
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
      user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOutUser: () => dispatch(logOutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);