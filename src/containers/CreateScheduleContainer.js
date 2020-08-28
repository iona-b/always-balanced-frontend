import React from 'react';
import { connect } from 'react-redux'
import Tasks from '../components/Tasks'
import CreateScheduleForm from '../components/CreateScheduleForm'
import CreateTaskForm from '../components/CreateTaskForm'
import { fetchUser } from '../actions/fetchUser'

class CreateScheduleContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUser()
  }
 
  handleLoading = () => {
    if(this.props.loading === true) {
      return <div>Loading...</div>
    } else {
      return <Tasks tasks={this.props.userTasks} />
    }
  }

  render() {
    return (
      <div id="CreateScheduleContainer">
        <CreateScheduleForm id="create-schedule-form" />
        <CreateTaskForm id="create-task-form" />
        <div id="task-list">{this.handleLoading()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    userTasks: state.userTasks,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateScheduleContainer);