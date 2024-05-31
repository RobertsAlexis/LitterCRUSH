import React, { useEffect } from 'react';
import {  useDispatch, useSelector} from 'react-redux';
import CRUSHedItem from './CRUSHedItem';

function LitterCRUSHED() {
  const dispatch = useDispatch();
  const posts = useSelector(store => store.posts);

  console.log('post 1 output', posts)

  useEffect(() => {
    dispatch({ type: 'FETCH_POSTS' });
  }, []);

  console.log('post 2 output', posts)
  
  return (
    <div>
        <h2>Everyone is CRUSHing!!!!!</h2>
        <table>            
            <tbody>
                {posts.map((post) => {
                    return (
                        <CRUSHedItem key={post.post_id} post={post}/>
                    );
                })}
            </tbody>
        </table>
    </div>
    )
}

export default LitterCRUSHED;