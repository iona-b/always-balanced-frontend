import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { deleteCurrentSchedule } from '../actions/deleteCurrentSchedule'
import { fetchSchedule } from '../actions/fetchSchedule'
import CreateScheduleFormContainer from '../containers/CreateScheduleFormContainer'
import ShowExistingTasks from '../components/ShowExistingTasks';

class CreateScheduleContainer extends React.Component {

  handleClick = () => {
    this.props.deleteCurrentSchedule(this.props.currentSchedule.id)
  }

  fetchSchedule = () => {
    this.props.fetchSchedule(this.props.currentSchedule.id)
  }

  render() {
    return (
      <div> 
        <div id="create-schedule-container">
          {this.props.user.id && this.props.currentSchedule.id === ""?
            <div id="CreateScheduleContainer">
                <CreateScheduleFormContainer updateCurrentSchedule={this.handleChangeInState}/>
                <ShowExistingTasks />
            </div>
          :
            null
          }
        </div>
        <div className="form-containers">
          {this.props.user.id && this.props.currentSchedule.id !== "" ?
            <div>
              <h2>You've already created a schedule for today.</h2>
              <p>You can either view today's schedule or delete your current schedule and create a new one</p>
              <Link to='/schedule' >
                <button>View Current Schedule</button>
              </Link>
              <button onClick={this.handleClick}>Delete Current Schedule</button>
            </div>
          :
            null
          }  
        </div>
        <div> 
          {!this.props.user.id ?   
          <div className="form-containers">
            <h2> Please log in to create your schedule </h2>
            <Link to='/' >
              <button onClick={this.fetchSchedule}>Home</button>
            </Link>
          </div>
          :
            null
          } 
        </div>
      </div> 
    );
  }

}

const mapStateToProps = state => {
  return {
    user: state.user,
    currentSchedule: state.currentSchedule,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
      deleteCurrentSchedule: (scheduleId) => dispatch(deleteCurrentSchedule(scheduleId)),
      fetchSchedule: (schedule) => dispatch(fetchSchedule(schedule))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateScheduleContainer);