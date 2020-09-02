import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Schedule from '../components/Schedule'

class ScheduleContainer extends React.Component {

  render() {
    return (
      <div>
        {this.props.user.id ?
          <div id="schedule-container">
            <Schedule />
          </div>
        :
          <div id="schedule-container">
            <h2> Please log in to view your Schedule </h2>
            <Link to='/' >
              <button>Home</button>
            </Link>
          </div>
        }
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