import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/addTask'
 
class CreateTask extends Component {

  state = {
    text: ''
  };
 
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
 
  handleSubmit = event => {
    event.preventDefault();
    let task = {
      task_description: this.state.taskDescription,
      task_notes: this.state.taskNotes,
      user_id: this.props.user.id
    }
    this.props.addTask(task)
    this.props.handleToggleAddTaskForm()
  };
 
  render() {

    return (

      <div>
        <form className="forms" onSubmit={this.handleSubmit}>
            <h2 className="form-headers">Add Tasks</h2>
            <p>Add any tasks that you work on regularly. Each task should take between forty-five minutes and an hour to complete.</p>
            <p>You can always add any subtasks in the Task Notes.</p>
            <h4 className="form-labels">Task Description</h4>
            <input type="text" className="input-fields" name="taskDescription" value={this.state.taskDescription} onChange={this.handleChange} />
            <h4 className="form-labels">Task Notes</h4>
            <input type="text" className="input-fields" name="taskNotes" value={this.state.taskNotes} onChange={this.handleChange} /><br></br>
          <input type="submit" className="buttons" />
        </form>
      </div>
    );

  }

}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    addTask: (task) => dispatch(addTask(task))
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);