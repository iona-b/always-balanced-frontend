import React from 'react';
import { connect } from 'react-redux';
import { fetchSchedule } from '../actions/fetchSchedule'

class Schedule extends React.Component {

    weekDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    getCurrentSchedule = () => {
            let schedule = this.props.schedules.filter((schedule) => {
                if (schedule.date) {
                    let splitDate = schedule.date.split("-")
                    return parseInt(splitDate[0]) === this.newDate.getFullYear() && parseInt(splitDate[1]) === this.newDate.getMonth()+1 && parseInt(splitDate[2]) === this.newDate.getDate()
                }
            })
            // Can probably remove this check after I've added validations
            let todaysSchedule = schedule[schedule.length-1]
            return todaysSchedule
    }

    componentDidMount() {
        if (this.props.schedules) {
            let currentSchedule = this.getCurrentSchedule()
            this.props.fetchSchedule(currentSchedule)
        }
    }

    newDate = new Date()
    day = this.weekDayNames[this.newDate.getDay()]
    date = this.newDate.getDate()
    month = this.monthNames[this.newDate.getMonth()]
    year = this.newDate.getFullYear()

    render() {
        debugger
        return (
            <div className="schedule">
                <p>Schedule for {this.day}, {this.month} {this.date}, {this.year}</p>
                {
                    this.props.currentSchedule.date ? this.props.currentSchedule.date : "No Schedule"
                }
            </div>
        );
    }
}
  
const mapStateToProps = state => {
    return {
      user: state.user,
      schedules: state.user.schedules,
      currentSchedule: state.currentSchedule
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchSchedule: (schedule) => dispatch(fetchSchedule(schedule)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);