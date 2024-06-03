import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="grid-container">
        <h3> Technologies used:</h3>
        <div>  React, Redux, Node, & Express</div>
        <h3> Greatest Challange: </h3>
        <div> Building LitterCRUSH was far more compleax than orginally anticipated. The amount of time I guessed things would take was wildly inaccurate. It was much closer to the same skewed timescale as homerenovations  </div>
        <h3> Crushing soon: </h3>
        <div> Photo API, Like & comment functionality</div>
        <h3> Alexis Roberts </h3>
        <div> https://www.linkedin.com/in/alexis-roberts-mlps </div>
        <h2> THANK YOU!</h2>
    </div>

  );
}

export default AboutPage;