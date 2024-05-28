import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const userId = useSelector((store) => store.user.id);

  // Defining a local state to store the user's new crush
  const [crushed_text , setCrushed_text] = useState('');
  const [where_crushed , setWhere_crushed] = useState('');
  // const [date_time , setDate_time] = useState(''); 
  // const [photo_url , setPhoto_url] = useState('');
  const [star_count , setStar_count] = useState('');


  // Back button
  const back = () => {
    history.push('/')
  }

 // const createWhen = () => {
    // const createdDate = new DateTime(now);
    //  const currentDateTime = new Date();
    //  setDate_time(currentDateTime.toString());

  const newCrush = {
    // post_id,
    user_id: userId,
    crushed_text,
    where_crushed,
    // date_time: createdDate,
    // photo_url,
    star_count
  }

  dispatch({
    type: 'ADD_POST',
    payload: newCrush,
  });

  return (
    <div className="container">
      <h3>ADD NEW CRUSH!</h3>
      <p>What did you CRUSH?</p>
      <input
        type="text"
        placeholder="" 
        value={crushed_text}
        onChange={event => setCrushed_text (event.target.value)}
       />
       <p>Where were you CRUSHING?</p>
      <input
        type="number"
        placeholder="" 
        value={where_crushed}
        onChange={event => setWhere_crushed(event.target.value)}
      />
        {/* <input
        type="number"
        value={date_time}
        onChange={event => setDate_time(event.target.value)}
      /> */}
      {/* <p>Add a photo of everything you collected!</p>
        <input
        type="number"
        value={photo_url}
        onChange={event => setPhoto_url(event.target.value)}
      /> */}
      <p>How many bags did you collect?</p>
        <input
        type="number"
        placeholder="" 
        value={star_count}
        onChange={event => setStar_count (event.target.value)}
      />
      {/* <p>star_count {} you earned points 🌟 </p> */}
      <p></p>      
      <button 
        variant='contained'
        onSubmit={newCrush}
        >ADD CRUSH</button>
      <p></p>
      <button 
        onClick={back}
        >Back</button>
    </div>
  );
};

export default CreateCrush;