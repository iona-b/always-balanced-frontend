import React from "react";

export default class AlertModal extends React.Component {

    state = {
        minutes: 1,
        seconds: 0,
    }

    componentDidMount() {
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


    render() {
        const { minutes, seconds } = this.state
        return (
            <div id="alert-modal">
                { minutes === 0 && seconds === 0
                    ? <img src={require("../images/next-task.png")} alt='' />
                    : 
                    <div>
                        <img src={require("../images/take-a-breath.png")} alt='' />
                        <p className="countdown-timer"> {minutes}:{seconds < 10 ? `0${seconds}` : seconds} </p>
                    </div>
                }
            </div>
        )
    }

}