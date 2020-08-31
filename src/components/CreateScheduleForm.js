import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/addTask'
import { addSchedule } from '../actions/addSchedule'
import { addTaskToSIP } from '../actions/addTaskToSIP';
import { addTaskToPostedSchedule } from '../actions/addTaskToPostedSchedule';
import { finaliseScheduleTasks } from '../actions/finaliseScheduleTasks';
import { finaliseScheduleActivities } from '../actions/finaliseScheduleActivities';
import { v4 as uuidv4 } from 'uuid';

 
class CreateSchedule extends Component {

  state = {
    taskDescription: '',
    taskNotes: '',
    relaxationCategory1: '',
    relaxationCategory2: ''
  };

  componentDidMount() {
    if (this.props.relaxationCategories.length>0 && this.state.relaxationCategory1 === '' && this.state.relaxationCategory2 === '') {
      this.setState({
        relaxationCategory1: this.props.relaxationCategories[0].category_name,
        relaxationCategory2: this.props.relaxationCategories[0].category_name
      })
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
    this.props.addSchedule(this.props.user.id)
    this.props.scheduleInProgress.forEach (task => this.props.addTaskToPostedSchedule(task))
    setTimeout(this.handleFinaliseScheduleTasks, 2000)
    setTimeout(this.handleFinaliseScheduleActivities, 2000)
  }

  handleFinaliseScheduleTasks = () => {this.props.postedSchedule.tasks.forEach (task => {this.props.finaliseScheduleTasks(this.props.postedSchedule.schedule.schedule.id, task.id)})}

  handleFinaliseScheduleActivities = () => {
    console.log("HERE")
    let relaxationCategory1Id = this.props.relaxationCategories.filter(category => category.category_name === this.state.relaxationCategory1)[0].id
    let relaxationCategory2Id = this.props.relaxationCategories.filter(category => category.category_name === this.state.relaxationCategory2)[0].id
    this.props.finaliseScheduleActivities(this.props.postedSchedule.schedule.schedule.id, relaxationCategory1Id)
    this.props.finaliseScheduleActivities(this.props.postedSchedule.schedule.schedule.id, relaxationCategory2Id)
  }

  render() {
    return (
      <div>
      {this.props.user.id ?
        <div>
          <h2>Select 2 Relaxation Categories</h2>
          <select name="relaxationCategory1" onChange={this.handleChange}>{this.props.relaxationCategories.map(relaxationCategory => <option key={uuidv4()}>{relaxationCategory.category_name}</option>)}</select>
          <select name="relaxationCategory2" onChange={this.handleChange}>{this.props.relaxationCategories.map(relaxationCategory => <option key={uuidv4()}>{relaxationCategory.category_name}</option>)}</select><br></br>
          { this.props.scheduleInProgress.length < 6 ?
            <div>
              <h2>Add Up to 6 Tasks</h2>
              <form onSubmit={this.handleSubmit}>
                  <h3>Task Description</h3>
                  <input name="taskDescription" onChange={this.handleChange} value={this.state.taskDescription}/>
                  <h3>Task Notes</h3>
                  <input name="taskNotes" onChange={this.handleChange} value={this.state.taskNotes}/>
                <input type="submit" value="Add Task"/>
              </form>
            </div>
          :
            null
          }
          <br></br>
          <button onClick={this.handleCreateSchedule}>Create Schedule</button>
        </div>
      :
      "You are not logged in"
    }
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
    finaliseScheduleTasks: (scheduleId, taskId) => dispatch(finaliseScheduleTasks(scheduleId, taskId)),
    finaliseScheduleActivities: (scheduleId, activityId) => dispatch(finaliseScheduleActivities(scheduleId, activityId))
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateSchedule);