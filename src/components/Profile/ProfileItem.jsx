import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function ProfileItem({ post }) {

  const history = useHistory();

  // const goToEditForm = () => {
  //   console.log('need to edit student with id of:', student.id)
  //   history.push(`/edit_student/${student.id}`)
  // }

  return (
    <tr>
      <td>{post.user_id}</td>
      <td>{post.crush_text}</td>
      <td>at {post.where_crushed}</td>
      <td>{post.user_id} earned {post.star_count} stars!</td>
      <td>
        {/* <button onClick={goToEditForm}>
          Edit!
        </button> */}
      </td>
    </tr>
  );


// function ProfileItem() {
    // const post = useSelector(store => store.profile)
    //     return (
    //       <tr>
    //         <td>{post.user_id}</td>
    //         <td>{post.crush_text}</td>
    //         <td>at {post.where_crushed}</td> 
    //         <td>{post.user_id} earned {post.star_count} stars!</td>
    //       </tr>
    //     );
      };
  export default ProfileItem; 