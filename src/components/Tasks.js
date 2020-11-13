import React from 'react';

class Tasks extends React.Component {

  listTasks = () => {
    if (this.props.tasks.length>0) {
      return this.props.tasks.map(task => <p key={task.id}>{task.task_description}: {task.task_notes}</p>)
    } else {
      return <p> You don't have any tasks yet </p>
    }
  }

  render() {

    return (

      <div id="task-list">
        <h2 className="form-headers">Your Tasks</h2>
        {this.listTasks()}
      </div>

    );
    
  }

}

export default Tasks;