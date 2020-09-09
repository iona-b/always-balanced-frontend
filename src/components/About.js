import React from 'react';
import { Link } from 'react-router-dom'

function About() {

  return (

    <div>

        <Link to='/' >
          <button className="buttons back-buttons">⬅</button>
        </Link>
        <img src={require("../images/background-bottom-left.png")} alt='' id="background-bottom-left" />
        <img src={require("../images/background-top-right.png")} alt='' id="background-top-right" />
        <div className="info-divs">
          <h2>Always Balanced</h2>
          <p>Always Balanced is designed to improve your work-life balance while working from home. By simply adding a few details about yourself, you can create a personalised schedule which reflects how you like to work as well as how you like to relax. In today's world, it is vital that you take the time to delineate between work life and personal life, and Always Balanced aims to help you do just that.</p>
          <p>By letting us know what types of activities really help you relax, you gain access to hundreds of suggestions. We also take into account how many hours you like to work. </p>
        </div>

    </div>

  );
}

export default About;