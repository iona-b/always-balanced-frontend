import React from 'react';
import { connect } from 'react-redux'
import Tasks from '../components/Tasks'

class CreateScheduleContainer extends React.Component {

  renderTasks = () => this.props.tasks.map((todo) => <Tasks text={todo} />)

  render() {
    debugger
    return (
      <div className="CreateScheduleContainer">
        {this.renderTasks()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  debugger
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(CreateScheduleContainer);