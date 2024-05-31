import React, { useState, useEffect }  from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import ProfileItem from './ProfileItem';

function Profile() {
   const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const posts = useSelector(store => store.profile);

  useEffect(() => {
    dispatch({ type: 'FETCH_PROFILE_POSTS' });
  }, []);
console.log('are we in the profile', posts)
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <table>            
            <tbody>
                {posts.map((post) => {
                    return (
                        <ProfileItem key={post.post_id} post={post}/>
                    );
                })}
            </tbody>
        </table>
      
        {/* <ul>
          {userPosts.map(post => (
            <li key={post.post_id}>{post.crush_text}</li>
          ))}
        </ul> */}
      
         <LogOutButton className="btn" /> 
    </div>
  );
}

export default Profile;

  // // this component doesn't do much to start, just renders some user reducer info to the DOM
  // const user = useSelector((store) => store.user);
  // const posts = useSelector(store => store.posts);
  // const dispatch = useDispatch();
  // console.log('post 1 output', posts)

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_POSTS' });
  // }, []);

  // return (
  //   <div className="container">
  //     <h2>Welcome, {user.username}!</h2>
  //     <p>Your ID is: {user.id}</p>

  //     <div>
  //       <>
  //           Everyone is CRUSHing!!!!!
  //           </>
  //       <table>            
  //           <tbody>
  //               {posts.map((post) => {
  //                   return (
  //                       <ProfileItem key={post.post_id} post={post}/>
  //                   );
  //               })}
  //           </tbody>
  //       </table>
  //   </div>
  //        <LogOutButton className="btn" /> 
  //   </div>
  // );