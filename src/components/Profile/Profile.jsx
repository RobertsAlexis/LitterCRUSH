import React, { useEffect }  from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector} from 'react-redux';
import ProfileItem from './ProfileItem';
import './Profile.css';

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
    <main>
      <div className="profile-container">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <p>🌟 You have earned 6 stars, keep on CRUSHIN! 🌟</p>
        <p>🌟🌟🌟🌟🌟🌟</p>
        <LogOutButton className="btn" /> 
        <p></p>
        <p></p>
      </div>
      <section className="container">
        {posts.map((post) => {
          return (
            <ProfileItem key={post.post_id} post={post}/>
          );
        })}
      </section>
    </main>
  );
}

export default Profile;