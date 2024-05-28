import React from 'react';
import { useSelector} from 'react-redux';
// import CRUSHedItem from './CRUSHedItem';


function LitterCRUSHED() {

  const posts = useSelector(store => store.posts);

  return (
    <div className="container">
            <table>
                <thead>
                    <tr>
                        <p>This will be the newsfeed!</p>
                    </tr>
                </thead>
                {/* <tbody>
                    {posts.map(post => {
                        return <CRUSHedItem key={post.post_id} post={post} />
                    })}
                </tbody> */}
            </table>
        </div>
  );
}

export default LitterCRUSHED;
