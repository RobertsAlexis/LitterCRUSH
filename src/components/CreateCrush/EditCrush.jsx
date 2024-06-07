import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

// Fetch the data for the post to edit - NEED TO KNOW: Id of the post.
function EditCrush() {
    const params = useParams()
    //params is route paramaters (whatever was defined in App.jsx)
    console.log('params is', params)
    const dispatch = useDispatch();
    // use this id to make a GET request to obtain the data for the single post to edit. 
    const post_id = params.post_id
    console.log('HAAAAVVVVVEEE WE MADE IT INTO THE EDIT CRUSH COMPONENT', post_id)
    const history = useHistory()
    const back = () => { history.push('/user') }

    useEffect(() => {
      console.log("CAN WE POST THE ID", post_id)
      dispatch({
        type: 'FETCH_POST_TO_EDIT',
        payload: {post_id:post_id}
      });
    }, []);

// step 2
  const postToEdit = useSelector(store => store.postToEdit)

  console.log('DID WE MAKE IT TO THE END OF THE EDIT COMPONENT? ', params)
// sends a dispatch to edit reducer 
  const handlePostChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: 'EDIT_POST_ID_INPUT',
      payload: { name, value }, // Include both name and value
    });
  };

// update post calls step 4 saga edit function
  const updatePost = (event) => {
    event.preventDefault()
    // Call the Saga function that will actually update the
    // post in our database table:
    dispatch({
      type: 'UPDATE_POST',
      payload: postToEdit
    })
      // Route the user back to the home view so they can see
      // all the student data:
      history.push('/user')
  }

  return (
      <div className="profile-container">
        <h2>Edit Post: </h2>
        <form onSubmit={updatePost} className="grid-container">
        <p>What did you CRUSH?</p>
          { // to prevent value from being undefined, using pretzles
            postToEdit.crush_text &&
              <input
              name="crush_text"
              value={postToEdit.crush_text}
              onChange={handlePostChange}
              />
          }
          <p>Where were you CRUSHING?</p>
          {
            postToEdit.where_crushed &&
              <input 
                name="where_crushed"
                value={postToEdit.where_crushed}
                onChange={handlePostChange}
              />
          }
          <p>How many bags did you collect?</p>
          {
            postToEdit.star_count &&
              <input
                name="star_count"
                value={postToEdit.star_count}
                onChange={handlePostChange}
              />
          }
          <p></p>
          <button variant='contained'
          type="submit">Submit Edits</button>
      </form>
          <p></p>
          <button onClick={back}>Back</button>
    </div>
  );
};

export default EditCrush;