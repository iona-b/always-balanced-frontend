import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class CreateSchedule extends Component {
  state = {
    task1: '',
    task2: '',
    task3: '',
    task4: '',
    task5: '',
    task6: '',
  };
 
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
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
            <label>Schedule Creator</label>
              <input name="task1" onChange={event => this.handleChange(event)} value={this.state.task1}/>
              <input name="task2" onChange={event => this.handleChange(event)} value={this.state.task2}/>
              <input name="task3" onChange={event => this.handleChange(event)} value={this.state.task3}/>
              <input name="task4" onChange={event => this.handleChange(event)} value={this.state.task4}/>
              <input name="task5" onChange={event => this.handleChange(event)} value={this.state.task5}/>
              <input name="task6" onChange={event => this.handleChange(event)} value={this.state.task6}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    addSchedule: formData => dispatch({ type: 'ADD_SCHEDULE', payload: formData })
  };
};
 
export default connect(null, mapDispatchToProps)(CreateSchedule);