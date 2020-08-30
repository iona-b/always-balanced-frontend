import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/addTask'
import { addSchedule } from '../actions/addSchedule'
import { addTaskToSIP } from '../actions/addTaskToSIP';
import { addTaskToPostedSchedule } from '../actions/addTaskToPostedSchedule';
import { finaliseSchedule } from '../actions/finaliseSchedule';
 
class CreateSchedule extends Component {
  state = {
    taskDescription: '',
    taskNotes: '',
    relaxationCategory1: this.props.relaxationCategories[0].category_name,
    relaxationCategory2: this.props.relaxationCategories[0].category_name
  };
  
  componentDidUpdate() {
    if (this.props.readyToPost === true && this.props.postedSchedule.tasks.length === this.props.scheduleInProgress.length) {
      this.handleFinaliseSchedule()
    }
  }
 
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
    this.setState({
      taskDescription: '',
      taskNotes: ''
    })
  };

  handleCreateSchedule = () => {
    let relaxationCategory1Id = this.props.relaxationCategories.filter(category => category.category_name === this.state.relaxationCategory1)[0].id
    let relaxationCategory2Id = this.props.relaxationCategories.filter(category => category.category_name === this.state.relaxationCategory2)[0].id
    this.props.addSchedule(this.props.user.id)
    this.props.scheduleInProgress.forEach (task => this.props.addTaskToPostedSchedule(task))
  }

  handleFinaliseSchedule = () => {this.props.postedSchedule.tasks.forEach (task => {this.props.finaliseSchedule(this.props.postedSchedule.schedule.schedule.id, task.id)})}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Schedule Creator</label><br></br>
              <input name="taskDescription" onChange={this.handleChange} value={this.state.taskDescription}/>
              <input name="taskNotes" onChange={this.handleChange} value={this.state.taskNotes}/><br></br>
          <input type="submit" />
        </form>
        <select name="relaxationCategory1" onChange={this.handleChange}>{this.props.relaxationCategories.map(relaxationCategory => <option key={relaxationCategory.id}>{relaxationCategory.category_name}</option>)}</select>
        <select name="relaxationCategory2" onChange={this.handleChange}>{this.props.relaxationCategories.map(relaxationCategory => <option key={relaxationCategory.id}>{relaxationCategory.category_name}</option>)}</select><br></br>
        <button onClick={this.handleCreateSchedule}>Create Schedule</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    scheduleInProgress: state.scheduleInProgress,
    postedSchedule: state.postedSchedule,
    readyToPost: state.postedSchedule.readyToPost,
    relaxationCategories: state.relaxationCategories
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    addSchedule: (schedule) => dispatch(addSchedule(schedule)),
    addTaskToSIP: (task) => dispatch(addTaskToSIP(task)),
    addTaskToPostedSchedule: (task) => dispatch(addTaskToPostedSchedule(task)),
    finaliseSchedule: (scheduleId, taskId) => dispatch(finaliseSchedule(scheduleId, taskId))
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateSchedule);