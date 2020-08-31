import React from 'react';
import { connect } from 'react-redux';
import { fetchSchedule } from '../actions/fetchSchedule'
import { v4 as uuidv4 } from 'uuid';

class Schedule extends React.Component {

    weekDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    componentDidMount() {
        if (this.props.schedules.length > 0) {
            let currentSchedule = this.getCurrentSchedule()
            this.props.fetchSchedule(currentSchedule)
        }
    }

    newDate = new Date()
    day = this.weekDayNames[this.newDate.getDay()]
    date = this.newDate.getDate()
    month = this.monthNames[this.newDate.getMonth()]
    year = this.newDate.getFullYear()
    
    getCurrentSchedule = () => {
        let schedule = this.props.schedules.filter((schedule) => {
            if (schedule.date) {
                let splitDate = schedule.date.split("-")
                return parseInt(splitDate[0]) === this.newDate.getFullYear() && parseInt(splitDate[1]) === this.newDate.getMonth()+1 && parseInt(splitDate[2]) === this.newDate.getDate()
            }
            return schedule
            // If there's something wrong with schedule, it could be this
        })
        let todaysSchedule = schedule[schedule.length-1]
        return todaysSchedule
    }

    // HERE
    beginBreakMinutes = (minutes) => {
        if (minutes === 0) {
            return minutes = 30
        } else if (minutes === 30) {
            return minutes = 0
        } else if (minutes === 45) {
            return minutes = 15
        } else if (minutes === 15) {
            return minutes = 45
        }
    }

    beginTaskMinutes = (minutes) => {
        if (minutes === 0) {
            return minutes = 15
        } else if (minutes === 45) {
            return minutes = 0
        } else {
            return minutes = (minutes/60+0.25)*60
        }
    }

    beginAfterLunchTaskMinutes = (minutes) => {
        if (minutes === 0) {
            return minutes = 45
        } else if (minutes === 15) {
            return minutes = 0
        } else if (minutes === 30) {
            return minutes = 15
        } else if (minutes === 45) {
            return minutes = 30
        }
    }

    beginAfterLunchTaskHours = (hours, minutes) => {
        if (minutes > 15) {
            return hours += 2
        } else {
            return hours += 1
        }
    }

    beginBreakHour = (hours, minutes) => {
        if (minutes > 30) {
            return hours += 2
        } else {
            return hours += 1
        }
    }

    getTasks = () => {
        let hours = parseInt(this.props.user.start_work_time.slice(11, 13))
        let minutes = parseInt(this.props.user.start_work_time.slice(14, 16))
        let tasks = this.props.currentSchedule.tasks
        let activities = this.props.currentSchedule.activities
        let schedule = []

        for (let i=0; i< tasks.length; i ++) {
            if (i>0 && i !==2 ) {
                minutes = this.beginTaskMinutes(minutes)
            }
            if (i === 1) {
                schedule.push(
                    <div>
                        <p key={uuidv4()} > {hours}:{minutes} {tasks[i].task_description}: {tasks[i].task_notes} </p>
                        <p key={uuidv4()} > {hours = this.beginBreakHour(hours, minutes)}:{minutes = this.beginBreakMinutes(minutes)} Lunch:{activities[0].activity_description} </p>
                    </div>
                )
            } else if (i === 2) {
                schedule.push(
                    <div>
                        <p key={uuidv4()} > {hours = this.beginAfterLunchTaskHours(hours, minutes)}:{minutes = this.beginAfterLunchTaskMinutes(minutes)} {tasks[i].task_description}: {tasks[i].task_notes} </p>
                        <p key={uuidv4()} > {hours = this.beginBreakHour(hours, minutes)}:{minutes = this.beginBreakMinutes(minutes)} {activities[0].activity_description} </p>
                    </div>
                )
            } else {
                schedule.push(
                    <div>
                        <p key={uuidv4()} > {hours}:{minutes} {tasks[i].task_description}: {tasks[i].task_notes} </p>
                        <p key={uuidv4()} > {hours = this.beginBreakHour(hours, minutes)}:{minutes = this.beginBreakMinutes(minutes)} {activities[0].activity_description} </p>
                    </div>
                )
            }       
        }
        return schedule
    }

    // HERE
    
    render() {
        return (
            <div className="schedule">
                <h2>Schedule for {this.day}, {this.month} {this.date}, {this.year}</h2>
                {
                    this.props.currentSchedule.date ? this.getTasks() : "No Schedule"
                }
            </div>
        );
    }
}
  
const mapStateToProps = state => {
    return {
        user: state.user,
        schedules: state.userSchedules,
        currentSchedule: state.currentSchedule,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchSchedule: (schedule) => dispatch(fetchSchedule(schedule)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);