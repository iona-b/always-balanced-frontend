import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/addTask'
import { v4 as uuidv4 } from 'uuid';
 
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
    this.props.addTask(task);
  };
 
  render() {
    return (
      <div>
        <form className="forms" onSubmit={this.handleSubmit}>
          <p>
            <h2 className="form-headers">Add Tasks</h2>
            <p>Add some tasks that you work on regularly, for instance a certain project that you dedicate time to every day. Each task should be something that takes between an hour and an hour-and-a-half to complete.</p>
              <h4 className="form-labels">Task Description</h4>
              <p>Enter a general description of your task here.</p>
              <input type="text" name="taskDescription" value={this.state.taskDescription} onChange={this.handleChange} />
              <h4 className="form-labels">Task Notes</h4>
              <p>Add any information you think is relevant. This is a good place to make a note of any sub-tasks.</p>
              <input type="text" name="taskNotes" value={this.state.taskNotes} onChange={this.handleChange} />
          </p>
          <input type="submit" />
        </form>
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
    addTask: (task) => dispatch(addTask(task))
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);