import React from 'react';
import {Route, Switch, Link, NavLink, withRouter} from 'react-router-dom'
import './App.css';
import CreateScheduleContainer from './containers/CreateScheduleContainer'
import Home from './containers/Home'
import LoginContainer from './containers/LoginContainer'
import NotFound from './containers/NotFound'
import ProfileContainer from './containers/ProfileContainer'
import ScheduleContainer from './containers/ScheduleContainer'
import SignUpContainer from './containers/SignUpContainer'

function App() {
  return (
    <div className="App">
      <div id="nav-bar">
        <NavLink to='/' exact >Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
        <NavLink to='/createschedule'>Create Schedule</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to='/schedule'>Schedule</NavLink>
        <NavLink to='/logout'>Log Out</NavLink>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={LoginContainer}/>
        <Route path='/signup' component={SignUpContainer}/>
        <Route path='/createschedule' component={CreateScheduleContainer}/>
        <Route path='/profile' component={ProfileContainer}/>
        <Route path='/schedule' component={ScheduleContainer}/>
        <Route path='/logout' exact component={null}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
