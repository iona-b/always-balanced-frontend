import React from 'react';
import { connect } from 'react-redux';
import { fetchSchedule } from '../actions/fetchSchedule'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'
import AlertModal from "./AlertModal";

class Schedule extends React.Component {

    state = {
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
    };

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
        return this.props.currentSchedule.id !== "" ? this.props.fetchSchedule(this.props.currentSchedule.id) : null
    }

    componentDidUpdate() {
        return this.props.currentSchedule.id !== "" && this.props.currentSchedule.activities.length === 0 ? this.props.fetchSchedule(this.props.currentSchedule.id) : null
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
      this.setState({
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      });
    }

    weekDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    newDate = new Date()
    day = this.weekDayNames[this.newDate.getDay()]
    date = this.newDate.getDate()
    month = this.monthNames[this.newDate.getMonth()]
    year = this.newDate.getFullYear()

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
        if (this.props.currentSchedule.activities.length > 0) {
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
                        <div key={uuidv4()}>
                            <p key={uuidv4()} > {hours}:{minutes}{minutes === 0 ? 0 : null }: {tasks[i].task_description}: {tasks[i].task_notes} </p>
                            <p key={uuidv4()} > {hours = this.beginBreakHour(hours, minutes)}:{minutes = this.beginBreakMinutes(minutes)}{minutes === 0 ? 0 : null } Enjoy a healthy, nutritious lunch before you {activities[0].activity_description} </p>
                        </div>
                    )
                } else if (i === 2) {
                    schedule.push(
                        <div key={uuidv4()}>
                            <p key={uuidv4()} > {hours = this.beginAfterLunchTaskHours(hours, minutes)}{minutes === 0 ? 0 : null }:{minutes = this.beginAfterLunchTaskMinutes(minutes)}: {tasks[i].task_description}: {tasks[i].task_notes} </p>
                            <p key={uuidv4()} > {hours = this.beginBreakHour(hours, minutes)}{minutes === 0 ? 0 : null }:{minutes = this.beginBreakMinutes(minutes)} {activities[0].activity_description} </p>
                        </div>
                    )
                } else {
                    schedule.push(
                        <div key={uuidv4()}>
                            <p key={uuidv4()} > {hours}:{minutes}{minutes === 0 ? 0 : null }: {tasks[i].task_description}: {tasks[i].task_notes} </p>
                            <p key={uuidv4()} > {hours = this.beginBreakHour(hours, minutes)}:{minutes = this.beginBreakMinutes(minutes)}{minutes === 0 ? 0 : null }: {activities[0].activity_description} </p>
                        </div>
                    )
                }       
            }
        return schedule
        } else {
            return this.props.fetchSchedule(this.props.currentSchedule.id)
        }
    }
    
    render() {
        return (
            <div>
                <div className="schedule">
                    {
                        this.props.currentSchedule.id !== ""
                        ?
                            <div>
                                <h2 className="form-headers">Schedule for {this.day}, {this.month} {this.date}, {this.year}</h2>
                                {this.getTasks()}
                            </div>
                        :
                            <div>
                                <h2> You haven't created a schedule yet </h2>
                                <Link to='/createschedule' >
                                    <button>Create a Schedule</button>
                                </Link>
                            </div>
                    }
                </div>
                <div>
                    {/* {
                        this.state.minutes === 57
                        ? */}
                            <AlertModal />
                        {/* :
                        null
                    } */}
                </div>
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
      fetchSchedule: (schedule) => dispatch(fetchSchedule(schedule))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);