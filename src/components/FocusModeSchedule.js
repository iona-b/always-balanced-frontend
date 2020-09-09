import React from 'react';

class FocusModeSchedule extends React.Component {

    state = {
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
    };

    convertToHoursAndMinutes = (totalMinutes) => {
        let hours = Math.floor(totalMinutes/60)
        let minutes = totalMinutes%60
        return `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""}${minutes}`
    }

    slots = this.props.scheduleSlots()

    getCurrentActivity = () => {
        let schedule = this.props.scheduleSlots()
        let slot = schedule.filter (slot => (this.state.hour * 60 + this.state.minutes) > slot[0].task && (this.state.hour * 60 + this.state.minutes) < slot[5].nextStartTime ? slot : null)
        return slot[0] ?
            <div>
                <h3>{this.convertToHoursAndMinutes(slot[0][0].task)}</h3>
                <h2>{slot[0][1].task_description}: {slot[0][1].task_notes}</h2>
                <br></br>
                <h3>{this.convertToHoursAndMinutes(slot[0][3].break)}</h3>
                <h2>{slot[0][4].activity_description}</h2>
            </div>
        :
        null
    }

    render() {
        return (
            <div id="focus-mode-div">
                {this.getCurrentActivity()}
            </div>
        );
    }

}

export default FocusModeSchedule ;