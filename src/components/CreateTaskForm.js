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
    this.props.addTask(task);
  };
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add task</label>
              <input type="text" name="taskDescription" value={this.state.taskDescription} onChange={this.handleChange}/>
              <input type="text" name="taskNotes" value={this.state.taskNotes} onChange={this.handleChange}/>
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