import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

// TODO:
// X Create form
// X Add local state
// _ Dispatch redux actions or display a part of redux state 
// _ Starcount logic
// _ Enable maps API
// _ Upload photos!
// _ Center to screen

function CreateCrush() {

  const dispatch = useDispatch();
  const history = useHistory();

  //Defining a local state to store the user's new crush
  const [newCrush , setNewCrush] = useState('');
  const [newLocation , setNewLocation] = useState('');
  const [newPhoto , setNewPhoto] = useState('');
  const [newBag , setNewBag] = useState('');

  //Back button
  const back = () => {
    history.push('/')
  }

  function addingCrush () {
        // Tell redux that we want to add the new element
        dispatch({
          type:'ADD_CRUSH',
          // Pass in the element name, that we're tracking in state
          payload: newCrush,
        })
        dispatch({
          type:'ADD_LOCATION',
          // Pass in the element name, that we're tracking in state
          payload: newLocation,
        })
        dispatch({
          type:'ADD_PHOTO',
          // Pass in the element name, that we're tracking in state
          payload: newPhoto,
        })
        dispatch({
          type:'ADD_BAG',
          // Pass in the element name, that we're tracking in state
          payload: newBag,
        })
        // ADD LOGIC TO TURN BAG COUNT 1:1 TO STAR COUNT
        // clear
        setNewCrush ('');
        history.push('/home');
  };


  return (
    <div className="container">
      <h3>ADD NEW CRUSH!</h3>
      <p>What did you CRUSH?</p>
      <input
        type="text"
        value={newCrush}
        onChange={event => setNewCrush (event.target.value)}
       />
       <p>Where were you CRUSHING?</p>
      <input
        type="number"
        value={newLocation}
        onChange={event => setNewLocation(event.target.value)}
      />
      <p>Add a photo of everything you collected!</p>
        <input
        type="number"
        value={newLocation}
        onChange={event => setNewPhoto(event.target.value)}
      />
      <p>How many bags did you collect?</p>
        <input
        type="number"
        value={newLocation}
        onChange={event => setNewBag(event.target.value)}
      />
      <p> {} you earned points 🌟 </p>
      <p></p>      
      <button 
        variant='contained'
        onClick={addingCrush}
        >ADD CRUSH</button>
      <p></p>
      <button 
        onClick={back
        }>Back</button>
    </div>
  );
}

export default CreateCrush;
