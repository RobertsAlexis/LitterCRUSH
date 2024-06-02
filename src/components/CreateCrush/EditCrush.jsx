import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

// Want to fetch the data for the post I want to edit!
// NEED TO KNOW: The id of the post.
function EditCreateCrush() {
    const params = useParams()
    //params is route paramaters (whatever was defined in App.jsx)
    console.log('params is', params)
    const dispatch = useDispatch();
    // use this id to nake a GET request to obtain the data for the single post to edit. 
    const postToEdit = params.post_id

    const history = useHistory()
    const back = () => {
      history.push('/')
    }
    
    useEffect(() => {
      dispatch({
        type: 'FETCH_POST_TO_EDIT',
        payload: postToEdit
      })
    }, [])


  console.log('DID WE MAKE IT TO THE END OF THE EDIT COMPONENT? ', params)
    return (
      <div className="container">
        <h2>Edit Post: </h2>
        <form>
          {}
          <input />
          <button variant='contained'
          type="submit">Submit Edits</button>
        </form>
          <button onClick={back}>Back</button>
      </div>
    );
};
export default EditCreateCrush;