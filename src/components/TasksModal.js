import React from "react";
import { connect } from 'react-redux'
import { removeTask } from '../actions/removeTask';

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
        this.props.removeTask(event.target.name)
    }

    render() {

        return (
            <div className="modal">
                <h2> Existing Tasks </h2>
                {this.listTasks()}
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
      removeTask: (taskId) => dispatch(removeTask(taskId))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TasksModal);