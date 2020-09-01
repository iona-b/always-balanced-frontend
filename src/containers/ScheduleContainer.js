import React from 'react';
import { connect } from 'react-redux'
import Schedule from '../components/Schedule'

class ScheduleContainer extends React.Component {

  render() {
    return (
      <div className="ScheduleContainer">
        <Schedule />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(ScheduleContainer);