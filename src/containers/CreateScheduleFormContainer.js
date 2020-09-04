import React from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../actions/fetchUser'
import CreateScheduleForm from '../components/CreateScheduleForm'

class CreateScheduleContainer extends React.Component {

  render() {
    return (
        <div id="create-schedule-form-container">
              <CreateScheduleForm updateCurrentSchedule={this.props.updateCurrentSchedule}/>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (user) => dispatch(fetchUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateScheduleContainer);