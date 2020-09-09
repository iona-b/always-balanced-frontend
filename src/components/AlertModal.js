import React from "react";
import UIFx from 'uifx';
import alarmAudio from '../images/alarm.m4a';

export default class AlertModal extends React.Component {

    state = {
        minutes: this.props.breakLength,
        seconds: 0,
    }

    alarm = new UIFx(alarmAudio);

    componentDidMount() {
        this.alarm.setVolume(0.1).play()
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    handleClick = () => {
        this.props.handleClick()
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div id="alert-modal">
                <button className="buttons back-buttons" onClick={this.handleClick}>⬅</button>
                <div>
                    { minutes === 0 && seconds === 0
                        ? <h2 className="countdown-header">When you're ready, begin you're next task</h2>
                        : 
                        <div>
                            <h2 className="countdown-header">Take a breath and enjoy your break</h2>
                            <p className="countdown-timer"> {minutes}:{seconds < 10 ? `0${seconds}` : seconds} </p>
                        </div>
                    }
                </div>
            </div>
        )
    }

}