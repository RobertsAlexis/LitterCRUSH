import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

// Want to fetch the data for the post I want to edit!
// NEED TO KNOW: The id of the post.
function EditCreateCrush() {
    const params = useParams()
    console.log('params is', params)
    const dispatch = useDispatch();

    // const idOfPostToEdit = params.post_id

    const history = useHistory()
    const back = () => {
      history.push('/')
    }

    // useEffect(() => {
    //   dispatch({
    //     type: 'FETCH_STUDENT_TO_EDIT',
    //     payload: idOfStudentToEdit
    //   })
    // }, [])
 
    return (
      <div className="container">
        <h2>Edit Post: </h2>
        <form>
          <input />
          <button 
          variant='contained'
          type="submit"  
          >Submit Edits
          </button>
        </form>
          <button 
            onClick={back}
            >Back
          </button>
      </div>
    );
};
export default EditCreateCrush;