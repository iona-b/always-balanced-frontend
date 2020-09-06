import React from "react";
import CreateTaskForm from '../components/CreateTaskForm'
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
            <div className="form-containers">
                <button className="buttons" id="back-button" name="showTasks" onClick={this.props.handleClick}>Go Back</button>
                <div>
                    {this.props.tasks.length > 0 ?
                        <div>
                            <div>
                                <h2> Your Tasks </h2>
                                {this.listTasks()}
                            </div>
                            <div id="create-task-form-div">
                                <CreateTaskForm id="create-task-form"/>
                            </div>
                        </div>
                    :
                        <div>
                            <h2> Your Tasks </h2>
                            <p> You haven't added any tasks yet </p>
                            <div class="form-containers" id="create-task-form-div">
                                <CreateTaskForm />
                            </div>
                        </div>
                    }
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