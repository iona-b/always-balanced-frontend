import React from 'react';
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Demo from "../images/demo-part-1.mp4"


class About extends React.Component {

  state = {
    showDemo: false
  }

  handleToggleShowDemo = () => {
    this.setState({
      showDemo: !this.state.showDemo
    })

    
  }

  render() {
    return (

      <div>
          <Link to='/' >
            <button className="buttons back-buttons">⬅</button>
          </Link>
          <img src={require("../images/background-bottom-left.png")} alt='' id="background-bottom-left" />
          <img src={require("../images/background-top-right.png")} alt='' id="background-top-right" />
          {this.state.showDemo === false ?
            <div className="info-divs">
              <h2>Always Balanced</h2>
              <p>Always Balanced is designed to improve your work-life balance while working from home. By simply adding a few details about yourself, you can create a personalised schedule which reflects how you like to work as well as how you like to relax. In today's world, it is vital that you take the time to delineate between work life and personal life, and Always Balanced aims to help you do just that.</p>
              <p>By letting us know what types of activities really help you relax, you gain access to hundreds of suggestions. We also take into account how many hours you like to work. </p>
              <button className="buttons" onClick={this.handleToggleShowDemo}>Demo</button>
            </div>
          :
            <div>
              <ReactPlayer className="react-player"
                playing
                controls={true}
                url={[
                  {src: Demo, type: 'video/mp4'},
                ]}
              />
              <button className="buttons" id="on-demo-page" onClick={this.handleToggleShowDemo}>About</button>
            </div>
          }
      </div>
  
    );
  }

  
}

export default About;