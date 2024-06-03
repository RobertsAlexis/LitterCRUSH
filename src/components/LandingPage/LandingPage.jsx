import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome! 🌎');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          LitterCRUSH is not just another mobile game; it's a revolutionary
          concept that merges the addictive nature of gaming with the 
          real-world impact of environmental activism. Imagine embarking on a
          thrilling adventure where every piece of litter you pick up 
          translates into points, achievements, and social media recognition.
          It's like Pokémon GO meets eco-warrior, and it's poised to 
          revolutionize how we engage with both our smartphones and our planet.
          </p>

          <p>
            In LitterCRUSH, players become eco-champions as they scour their
            neighborhoods, parks, and beaches for discarded trash. Armed with
            nothing but their smartphones and a passion for a cleaner world, 
            they snap photos of the litter they collect and upload them to the
            game's interface. Each bag of trash earns them a shiny gold star.

            
            LitterCRUSH is designed to be inherently social, allowing players 
            to share their victories, challenges, and progress on various 
            social media platforms. Picture your friends cheering you on as you
            reach new milestones, or engaging in friendly competitions to see 
            who can amass the most gold stars. It's not just about cleaning up 
            the planet; it's about building a community of like-minded 
            individual united by a common goal.
          </p>

          <p>
            And the best part? LitterCRUSH isn't just about virtual rewards;
            it's about making a tangible difference in the world around us. 
            With each bag of trash collected, players contribute to a cleaner,
            healthier environment for themselves and future generations. It's
            environmental activism disguised as entertainment, and it's bound
            to capture the imagination of millions.
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
