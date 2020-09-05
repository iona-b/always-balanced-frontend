import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { removeTaskFromSIP } from '../actions/removeTaskFromSIP';

class ScheduleInProgress extends React.Component {

    handleRemoveTask = event => {
        this.props.removeTaskFromSIP(event.target.name)
    }

    listScheduleTasks = () => {
        return this.props.scheduleInProgress.map((task) => {
            return (
                <div className="tasks-items">
                    <p className="task" key={uuidv4()}>{task.task_description}: {task.task_notes}</p>
                    <button className="task-button" name={task.id} onClick={this.handleRemoveTask}>-</button>
                    <br></br>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="show-tasks" id="schedule-in-progress-div">
                <h2> Schedule In Progress </h2>
                {this.props.scheduleInProgress.length > 0  ?
                    this.listScheduleTasks() 
                :
                <p> You haven't added any tasks yet </p>
                }
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
      removeTaskFromSIP: (taskId) => dispatch(removeTaskFromSIP(taskId)),
    };
  };
   
   
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleInProgress);