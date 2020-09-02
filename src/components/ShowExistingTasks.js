import React from 'react';
import { connect } from 'react-redux'
import { addTaskToSIP } from '../actions/addTaskToSIP';

class ShowExisitingTasks extends React.Component {

    listTasks = () => {
        if (this.props.tasks) {
            return this.props.tasks.map((task) => {
                return (
                    <div>
                        <p key={task.id}>{task.task_description}</p>
                        <button name={task.id} onClick={this.handleAddTask}>Add To Schedule</button>
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
            <div id="show-existing-tasks">
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