import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function ProfileItem({ post }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const goToEditForm = () => {
    console.log('need to edit post with id of:', post.post_id)
    history.push(`/EditCrush/api/edit/${post.post_id}`)
  };
  console.log('starcount', post.star_count)
  const deleteMe = (post_id) => {
    dispatch({ 
      type: 'DELETE_POST', 
      payload: post_id 
    });
  };
  return (
  <div className="grid-container">
    <div>
    🌟 { post.username } earned { post.star_count } stars🌟 
      <p>  { post.crush_text} 🗑️ </p>
      <p> 📍 { post.where_crushed }</p>
      <button className="btn" onClick={goToEditForm}>Edit</button>
      <p></p>
      <button className="btn" onClick={() => deleteMe(post.post_id)}>Delete</button>
    </div>
  </div>
  );
};
  export default ProfileItem;  