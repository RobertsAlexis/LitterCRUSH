import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="grid-container">
        <div> Technologies used: I used React, Redux, Node, & Express</div>
        <div> The toughest challange I enountered while building LitterCRUSH was the size and complexity. The amount of time I guessed things would take was apparently on the same skewed timescale as homerenovations  </div>
        <div> Crushing soon: Photo API and Like / comment buttons </div>
        <div> https://www.linkedin.com/in/alexis-roberts-mlps </div>
    </div>
  );
}

export default AboutPage;