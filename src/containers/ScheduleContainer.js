import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Schedule from '../components/Schedule'

class ScheduleContainer extends React.Component {

  render() {
    return (
      <div>
        {this.props.user.id ?
          <div>
            <Link to='/' >
              <button className="buttons back-buttons">⬅</button>
            </Link>
            <img src={require("../images/background-bottom-left.png")} alt='' id="background-bottom-left"/>
            <img src={require("../images/background-top-right.png")} alt='' id="background-top-right"/>
            <div className="form-containers">
              <Schedule />
            </div>
          </div>
        :
          <div>
            <img src={require("../images/background-bottom-left.png")} alt='' id="background-bottom-left"/>
            <img src={require("../images/background-top-right.png")} alt='' id="background-top-right"/>
            <div className="info-divs">
              <h2> Please log in to view your Schedule </h2>
              <Link to='/' >
                <button className="buttons">Home</button>
              </Link>
            </div>
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