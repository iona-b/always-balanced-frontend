import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class CreateTask extends Component {
  state = {
    text: ''
  };
 
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };
 
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTask(this.state);
  };
 
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add task</label>
              <input
                type="text"
                onChange={event => this.handleChange(event)}
                value={this.state.text}
              />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    addTask: formData => dispatch({ type: 'ADD_TASK', payload: formData })
  };
};
 
export default connect(null, mapDispatchToProps)(CreateTask);