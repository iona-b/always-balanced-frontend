import React from 'react';
import { connect } from 'react-redux'
import CreateScheduleForm from '../components/CreateScheduleForm'
import { fetchUser } from '../actions/fetchUser'
import ScheduleInProgress from '../components/ScheduleInProgress';

class CreateScheduleContainer extends React.Component {

  render() {
    return (
      <div id="CreateScheduleContainer">
        <CreateScheduleForm id="create-schedule-form" />
        <ScheduleInProgress id="schedule-in-progress" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (user) => dispatch(fetchUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateScheduleContainer);