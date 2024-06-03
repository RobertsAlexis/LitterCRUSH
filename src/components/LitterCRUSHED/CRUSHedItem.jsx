function CRUSHedItem({ post }) {

  return (
    <div className="grid-container">
      <div>
        🗑️ { post.username } earned { post.star_count } stars🌟 
        <p>  { post.crush_text}  </p>
        <p> at { post.where_crushed }📍</p>
      </div>
    </div>
  );
}

export default CRUSHedItem;
// {post.post_id}