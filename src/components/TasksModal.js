import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTask } from '../actions/deleteTask';

class TasksModal extends React.Component {

    listTasks = () => {
        if (this.props.tasks) {
            return this.props.tasks.map((task) => {
                return (
                    <div>
                        <p key={task.id}>{task.task_description}: {task.task_notes}</p>
                        <button name={task.id} onClick={this.handleRemoveTask}>Remove</button>
                    </div>
                ) 
            })
        } else {
            return <h2> You don't have any tasks yet </h2>
        }
    }

    handleRemoveTask = event => {
        this.props.deleteTask(event.target.name)
    }

    render() {

        return (
            <div className="modal">
                <button className="buttons" id="back-button" name="showTasks" onClick={this.props.handleClick}>Go Back</button>
                <div>
                    <h2> Your Tasks </h2>
                    {this.listTasks()}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      tasks: state.userTasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
      deleteTask: (taskId) => dispatch(deleteTask(taskId))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TasksModal);