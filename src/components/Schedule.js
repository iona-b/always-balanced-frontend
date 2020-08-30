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
        })
        let todaysSchedule = schedule[schedule.length-1]
        return todaysSchedule
    }

    getTasks = () => {
        let hours = parseInt(this.props.user.start_work_time.slice(11, 13))-1
        let minutes = parseInt(this.props.user.start_work_time.slice(14, 16))
        minutes === 0 ? minutes = 3 : minutes = 0
        return this.props.tasks.map ((task) => {
            hours += 1
            minutes === 0 ? minutes = 3 : minutes = 0
            return <p key={uuidv4()} > {hours}:{minutes}0 {task.task_description}: {task.task_notes} </p>
        })
    }
    
    render() {
        console.log(this.props.currentSchedule)
        return (
            <div className="schedule">
                <p>Schedule for {this.day}, {this.month} {this.date}, {this.year}</p>
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
        tasks: state.currentSchedule.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchSchedule: (schedule) => dispatch(fetchSchedule(schedule)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);