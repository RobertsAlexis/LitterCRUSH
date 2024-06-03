import React, { useEffect } from 'react';
import {  useDispatch, useSelector} from 'react-redux';
import CRUSHedItem from './CRUSHedItem';
import './LitterCRUSH.css';

function LitterCRUSHED() {
  const dispatch = useDispatch();
  const posts = useSelector(store => store.posts);

  console.log('post 1 output', posts)

  const getPosts = () => {
    dispatch({ type: 'FETCH_POSTS' });
  };

  useEffect(() => {
    getPosts();
  }, []);
  
  console.log('post 2 output', posts)
  // className="posts"
  return (
    <main>
        <h2 className="profile-container">Everyone is CRUSHing!!!!!</h2>
        <section  >            
            <div >
                {posts.map((post) => {
                    return (
                        <CRUSHedItem key={post.post_id} post={post}  />
                    );
                })}
            </div>
        </section>
    </main>
    )
}

export default LitterCRUSHED;