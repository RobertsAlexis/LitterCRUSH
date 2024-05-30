import { useHistory } from 'react-router-dom';

function CRUSHedItem({ post }) {

  const history = useHistory();

//   const goToEditForm = () => {
//     console.log('need to editpost with id of:', post.post_id)
//     history.push(`/edit_post/${post.post_id}`)
//   }

  return (
    <tr>
      <td>{post.user_id} {post.crush_text}at {post.where_crushed} and earned {post.star_count} stars!</td>
      <td>
        {/* <button onClick={goToEditForm}>
          Edit!
        </button> */}
      </td>
    </tr>
  );
}

export default CRUSHedItem;
