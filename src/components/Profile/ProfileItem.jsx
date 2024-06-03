import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function ProfileItem({ post }) {
  // const edit = useSelector(store => store.edit);
  const history = useHistory();

  const goToEditForm = () => {
    console.log('need to edit post with id of:', post.post_id)
    history.push(`/EditCrush/api/edit/:post_id${post.post_id}`)
  }

  return (
    <tr>
      <td>{post.post_id} {post.username}</td>
      <td>{post.crush_text}</td>
      <td>at {post.where_crushed}</td>
      <td>{post.username} earned {post.star_count} stars!</td>
      <td>
        <button onClick={goToEditForm}>
          Edit
        </button>
      </td>
    </tr>
  );
};
  export default ProfileItem; 

  ///:post.post_id ${edit.post_id}    