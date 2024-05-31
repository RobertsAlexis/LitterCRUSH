function CRUSHedItem({ post }) {

  return (
    <tr>
      <td>{post.user_id}</td>
      <td>{post.crush_text}</td>
      <td>at {post.where_crushed}</td> 
      <td>{post.user_id} earned {post.star_count} stars!</td>
    </tr>
  );
}

export default CRUSHedItem;
