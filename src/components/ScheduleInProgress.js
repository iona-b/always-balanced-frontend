import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

class ScheduleInProgress extends React.Component {

    listScheduleTasks = () => {
        return this.props.scheduleInProgress.map(task => <p key={uuidv4()}>{task.task_description}: {task.task_notes}</p>)
    }

    render() {
        return (
            <div id="schedule-in-progress">
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
   
   
export default connect(mapStateToProps, null)(ScheduleInProgress);