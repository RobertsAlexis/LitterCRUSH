import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


// TODO:
// X Create form
// X Add local state
//  Dispatch redux actions or display a part of redux state 
// _ Starcount logic
// _ Enable maps API
// _ Upload photos!

// _ Center to screen

function CreateCrush() {

  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((store) => store.user.id);
  const username = useSelector((store) => store.user.username);

  console.log("where is the username?", username)

  // Defining a local state to store the user's new crush
  const [crush_text , setCrush_text] = useState('');
  const [where_crushed , setWhere_crushed] = useState('');
  // const [date_time , setDate_time] = useState(''); 
  // const [photo_url , setPhoto_url] = useState('');
  const [star_count , setStar_count] = useState('');


  // Back button
  const back = () => {
    history.push('/')
  }
  // Back button
  const SubmitGoToFeed = () => {
    history.push('/LitterCRUSHED')
  }
 const newCrush = () => {
    // const createdDate = new DateTime(now);
    //  const currentDateTime = new Date();
    //  setDate_time(currentDateTime.toString());

  const crush = {
    // post_id,
    user_id: userId,
    username,
    crush_text,
    where_crushed,
    // date_time: createdDate,
    // photo_url,
    star_count
  }

  console.log('are we crushing?', crush)

  dispatch({
    type: 'ADD_POST',
    payload: crush,
  });

 }

  return (
    <div className="container">
      <h3>ADD NEW CRUSH!</h3>
      <p>What did you CRUSH?</p>
      <form onSubmit={(event) => {
        event.preventDefault();
        newCrush();
        SubmitGoToFeed();
      }}>
      <input
        type="text"
        placeholder="" 
        value={crush_text}
        onChange={event => setCrush_text (event.target.value)}
       />
       <p>Where were you CRUSHING?</p>
      <input
        type="text"
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
        type="submit"
        >ADD CRUSH</button>
        </form>
      <p></p>
      <button 
        onClick={back}
        >Back</button>
    </div>
  );
};

export default CreateCrush;