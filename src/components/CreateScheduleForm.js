import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/addTask'
import { addSchedule } from '../actions/addSchedule'
import { addTaskToSIP } from '../actions/addTaskToSIP';
 
class CreateSchedule extends Component {
  state = {
    taskDescription: '',
    taskNotes: '',
  };
 
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
 
  handleSubmit = event => {
    event.preventDefault();
    let task = {
      task_description: event.target.taskDescription.value,
      task_notes: event.target.taskNotes.value,
      user_id: this.props.user.id,
    }
    this.props.addTaskToSIP(task)
  };

  handleCreateSchedule = () => {
    this.props.addSchedule(this.props.user.id)
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Schedule Creator</label><br></br>
              <input name="taskDescription" onChange={this.handleChange} value={this.state.taskDescription}/>
              <input name="taskNotes" onChange={this.handleChange} value={this.state.taskNotes}/><br></br>
          <input type="submit" />
        </form>
        <button onClick={this.handleCreateSchedule}>Create Schedule</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    scheduleInProgress: state.scheduleInProgress
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    addSchedule: (schedule) => dispatch(addSchedule(schedule)),
    addTaskToSIP: (task) => dispatch(addTaskToSIP(task))
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateSchedule);