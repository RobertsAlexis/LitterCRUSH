function CRUSHedItem({ post }) {

  return (
    <tr>
      <td>{post.post_id} {post.username}</td>
      <td>{post.crush_text}</td>
      <td>at {post.where_crushed}</td> 
      <td>{post.username} earned {post.star_count} stars!</td>
    </tr>
  );
}

export default CRUSHedItem;
