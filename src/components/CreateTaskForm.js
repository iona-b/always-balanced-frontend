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
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add task</label>
              <input type="text" name="taskDescription" value={this.state.taskDescription} onChange={this.handleChange} key={uuidv4()}/>
              <input type="text" name="taskNotes" value={this.state.taskNotes} onChange={this.handleChange} key={uuidv4()}/>
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