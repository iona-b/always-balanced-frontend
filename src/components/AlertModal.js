import React from "react";

export default class AlertModal extends React.Component {

    state = {
        minutes: this.props.breakLength,
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
                        ? <img src={require("../images/next-task.png")} alt='' />
                        : 
                        <div>
                            <img src={require("../images/take-a-breath.png")} alt='' />
                            <p className="countdown-timer"> {minutes}:{seconds < 10 ? `0${seconds}` : seconds} </p>
                        </div>
                    }
                </div>
            </div>
        )
    }

}