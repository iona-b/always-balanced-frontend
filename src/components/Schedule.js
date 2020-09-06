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
        seconds: new Date().getSeconds(),
        breakTime: false,
        breakLength: 0
    };

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
        return this.props.currentSchedule.id !== "" ? this.props.fetchSchedule(this.props.currentSchedule.id) : null
    }

    componentDidUpdate() {
        this.getBreaks()
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
    currentTimeInMinutes = (this.state.hour * 60) + this.state.minutes

    convertToHoursAndMinutes = (totalMinutes) => {
        let hours = Math.floor(totalMinutes/60)
        let minutes = totalMinutes%60
        return `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""}${minutes}`
    }

    getBreaks = () => {
        let schedule = this.getScheduleSlots()
        if (this.state.breakTime === false) {
            return schedule.forEach (slot => (this.state.hour * 60 + this.state.minutes) === 1151 && this.state.seconds === 0 ? this.setState({breakTime: true, breakLength: (slot[5].nextStartTime - slot[3].break)}) : null)
        }
    }

    handleClick = () => {
        this.setState({breakTime: false, breakLength: 0})
    }
    
    getScheduleSlots = () => {
        let startTime = (parseInt(this.props.user.start_work_time.slice(11, 13)) * 60) + parseInt(this.props.user.start_work_time.slice(14, 16))
        let tasks = this.props.currentSchedule.tasks
        let activities = this.props.currentSchedule.activities
        let schedule = []
        let timePeriod = ""
        let j = 0
        for (let i = 0; i < tasks.length; i++) {
            let scheduleSlot = []
            if (i % 2 === 0) {
                scheduleSlot.push({task: startTime}, tasks[i], {nextStartTime: startTime += 55})
            } else {
                scheduleSlot.push({task: startTime}, tasks[i], {nextStartTime: startTime += 45})
            }
            if (i === tasks.length - 1) {
                if (startTime >= 720 && startTime < 1020) {
                    timePeriod = "afternoon"
                } else if (startTime >= 1020) {
                    timePeriod = "evening"
                }
                else {
                    timePeriod = "morning"
                }
                scheduleSlot.push({break: startTime}, {activity_description: `Time to wind down and enjoy the rest of your ${timePeriod}. Suggested ${timePeriod} activity: ${activities[activities.length - 1].activity_description}`}, {nextStartTime: startTime += 500})
            } else if (startTime >= 700 &&  startTime < 760){
                scheduleSlot.push({break: startTime}, {activity_description: "Enjoy a healthy, nutritious lunch"}, {nextStartTime: startTime += 45})
            } else if (i % 2 === 0) {
                // Create array of short break instructions? e.g. get a coffee, etc.
                scheduleSlot.push({break: startTime}, {activity_description: "Take a short break"}, {nextStartTime: startTime += 5})
            } else {
                scheduleSlot.push({break: startTime}, activities[j], {nextStartTime: startTime += 15})
                j++
            }
            schedule.push(scheduleSlot)
        }
        return schedule
    }


    returnSchedule = () => {
        if (this.props.currentSchedule.activities.length > 0) {
            let schedule = this.getScheduleSlots()
            let completeSchedule = []
            return completeSchedule = schedule.map ((scheduleSlot) => {
                return (
                    <div>
                        <p className={this.currentTimeInMinutes > scheduleSlot[0].task &&  this.currentTimeInMinutes < scheduleSlot[3].break ? "slotActive" : "slotNotActive"} key={uuidv4()} > {this.convertToHoursAndMinutes(scheduleSlot[0].task)}: {scheduleSlot[1].task_description}: {scheduleSlot[1].task_notes} </p>
                        <p className={this.currentTimeInMinutes > scheduleSlot[3].break && this.currentTimeInMinutes < scheduleSlot[5].nextStartTime ? "slotActive" : "slotNotActive"} key={uuidv4()} > {this.convertToHoursAndMinutes(scheduleSlot[3].break)}: {scheduleSlot[4].activity_description} </p>
                    </div>
                )
            })
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
                                {this.returnSchedule()}
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
                    {
                        this.state.breakTime === true
                        ?
                            <AlertModal breakLength={this.state.breakLength} handleClick={this.handleClick}/>
                        :
                        null
                    }
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
      fetchSchedule: (scheduleId) => dispatch(fetchSchedule(scheduleId))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);