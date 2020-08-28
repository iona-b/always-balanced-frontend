import React from 'react';

class Tasks extends React.Component {

  listTasks = () => {
    if (this.props.tasks) {
      return this.props.tasks.map(task => <p key={task.id}>{task.task_description}</p>)
    } else {
      return <h2> You don't have any tasks yet </h2>
    }
  }

  render() {
    return (
      <div id="tasks">
        {this.listTasks()}
      </div>
    );
  }

}

export default Tasks;