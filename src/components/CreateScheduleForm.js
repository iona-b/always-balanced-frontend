import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/addTask'
import { addSchedule } from '../actions/addSchedule'
 
class CreateSchedule extends Component {
  state = {
    task1Description: '',
    task1Notes: '',
    task2Description: '',
    task2Notes: '',
    task3Description: '',
    task3Notes: '',
    task4Description: '',
    task4Notes: '',
    task5Description: '',
    task5Notes: '',
    task6Description: '',
    task6Notes: '',
  };
 
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
 
  handleSubmit = event => {
    event.preventDefault();
    let tasks = [
      [this.state.task1Description, this.state.task1Notes, this.props.user.id], [this.state.task2Description, this.state.task2Notes, this.props.user.id], [this.state.task3Description, this.state.task3Notes, this.props.user.id], [this.state.task4Description, this.state.task4Notes, this.props.user.id], [this.state.task5Description, this.state.task5Notes, this.props.user.id], [this.state.task6Description, this.state.task6Notes, this.props.user.id]
    ]
    tasks.forEach((task) => {
      if (task[0] !== '' && task[0] !== '') {
        let taskToPost = {
          task_description: task[0],
          task_notes: task[1],
          user_id: task[2],
        }
        this.props.addTask(taskToPost)
      }
    })
  };

  handleCreateSchedule = () => {
    this.props.addSchedule(this.props.user.id)
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Schedule Creator</label><br></br>
            Task 1
              <input name="task1Description" onChange={this.handleChange} value={this.state.task1Description}/>
              <input name="task1Notes" onChange={this.handleChange} value={this.state.task1Notes}/><br></br>
            Task 2
              <input name="task2Description" onChange={this.handleChange} value={this.state.task2Description}/>
              <input name="task2Notes" onChange={this.handleChange} value={this.state.task2Notes}/><br></br>
            Task 3
              <input name="task3Description" onChange={this.handleChange} value={this.state.task3Description}/>
              <input name="task3Notes" onChange={this.handleChange} value={this.state.task3Notes}/><br></br>
            Task 4
              <input name="task4Description" onChange={this.handleChange} value={this.state.task4Description}/>
              <input name="task4Notes" onChange={this.handleChange} value={this.state.task4Notes}/><br></br>
            Task 5
              <input name="task5Description" onChange={this.handleChange} value={this.state.task5Description}/>
              <input name="task5Notes" onChange={this.handleChange} value={this.state.task5Notes}/><br></br>
            Task 6
              <input name="task6Description" onChange={this.handleChange} value={this.state.task6Description}/>
              <input name="task6Notes" onChange={this.handleChange} value={this.state.task6Notes}/><br></br>
          </p>
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
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    addSchedule: (schedule) => dispatch(addSchedule(schedule))
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateSchedule);