import React from 'react';
import { connect } from 'react-redux';

class Clock extends React.Component {

    weekDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    state = {
        day: this.weekDayNames[new Date().getDay()],
        date: new Date().getDate(),
        month: this.monthNames[new Date().getMonth()],
        year: new Date().getFullYear(),
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
    };

    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        day: this.weekDayNames[new Date().getDay()],
        date: new Date().getDate(),
        month: this.monthNames[new Date().getMonth()],
        year: new Date().getFullYear(),
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      });
    }
    render() {
      
      return (
        <p id="clock" className={this.props.user.id ? "landing-page-elements" : "pre-login"} >
          {this.state.day}, {this.state.month} {this.state.date}, {this.state.year}<br></br>
          {this.state.hour}:{this.state.minutes < 10 ? 0 : null}{this.state.minutes}:{this.state.seconds < 10 ? 0 : null}{this.state.seconds}
        </p>
      );

    }

}

const mapStateToProps = state => {
  return {
      user: state.userReducer.user
  }
}

export default connect(mapStateToProps, null)(Clock);