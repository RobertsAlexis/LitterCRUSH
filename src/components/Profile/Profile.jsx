import React, { useEffect }  from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector} from 'react-redux';
import ProfileItem from './ProfileItem';

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const posts = useSelector(store => store.profile);

  useEffect(() => {
    dispatch({ type: 'FETCH_PROFILE_POSTS',
   });
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
        <LogOutButton className="btn" /> 
    </div>
  );
}

export default Profile;