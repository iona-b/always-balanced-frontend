import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import CreateScheduleFormContainer from '../containers/CreateScheduleFormContainer'
import ShowExistingTasks from '../components/ShowExistingTasks';

class CreateScheduleContainer extends React.Component {

  render() {
    return (
      <div className="form-containers">
        {this.props.user.id ?
          <div id="CreateScheduleContainer">
              <CreateScheduleFormContainer />
              <ShowExistingTasks />
        </div>
        :
          <div>
            <h2> Please log in to create your schedule </h2>
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
    user: state.user,
    loading: state.loading
  }
}

export default connect(mapStateToProps, null)(CreateScheduleContainer);