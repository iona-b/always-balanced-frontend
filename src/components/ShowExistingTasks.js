import React from 'react';
import { connect } from 'react-redux'
import { addTaskToSIP } from '../actions/addTaskToSIP';

class ShowExisitingTasks extends React.Component {

    listTasks = () => {
        if (this.props.tasks) {
            return this.props.tasks.map((task) => {
                return (
                    <div className="tasks-items">
                        <p className="task" key={task.id}>{task.task_description}: {task.task_notes} </p>
                        <button className="task-button" name={task.id} onClick={this.handleAddTask}>+</button>
                        <br></br>
                    </div>
                ) 
            })
        } else {
            return <h2> You don't have any tasks yet </h2>
        }
    }

    handleAddTask = event => {
        let task = this.props.tasks.filter(task => task.id === parseInt(event.target.name))
        this.props.addTaskToSIP(task)
    }

    render() {
        return (
            <div className="form-headers" className="show-tasks" id="existing-tasks-div">
                <h2> Existing Tasks </h2>
                {this.listTasks()}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
      tasks: state.userTasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
      addTaskToSIP: (task) => dispatch(addTaskToSIP(task))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ShowExisitingTasks);