import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

class ScheduleInProgress extends React.Component {

    listScheduleTasks = () => {
        if (this.props.scheduleInProgress.length > 0) {
            return this.props.scheduleInProgress.map(task => <p key={uuidv4()}>{task.task_description}</p>)
        } else if (this.props.user.id) {
            return <p> You haven't added any tasks yet </p>
        }
    }

    render() {
        return (
        <div>
            {this.listScheduleTasks()}  
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