import React from 'react';
import { connect } from 'react-redux'
import CreateScheduleFormContainer from '../containers/CreateScheduleFormContainer'
import ShowExistingTasks from '../components/ShowExistingTasks';

class CreateScheduleContainer extends React.Component {

  render() {
    return (
      <div>
        {this.props.user.id ?
          <div id="CreateScheduleContainer">
              <CreateScheduleFormContainer />
              <ShowExistingTasks />
        </div>
        :
          <h2> You are not logged in + add button to log in </h2>
        }
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

export default connect(mapStateToProps, null)(CreateScheduleContainer);