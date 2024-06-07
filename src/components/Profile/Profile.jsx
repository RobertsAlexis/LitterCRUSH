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
   console.log(posts);

  // console.log('starcount', post.star_count)


// // Example usage:
// let starCount = [1, 2, 3, 4, 5];
// console.log(starScore(starCount)); // Output: 30

  // const starScore = () => {
  //   let total = 0;
  //   {
  //     star_count?.map((post) => total + post.star_count);
  //   }
  // };

//   for let (i = 0; i < star_count; i++) {
//     let total = star_count[i] + star_count[i];
//     return total; 
// }

const starScore = posts.reduce((acc, curr) => acc += +curr.star_count, 0);
// console.log("Total star count:", starScore);

  return (
    <main>
      <div className="profile-container">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <p>🌟 You have earned {starScore} stars, keep on CRUSHIN! 🌟</p>
        <p>{[...Array(starScore)].map(() => 
        {
          return (<>🌟</>)
        })}</p>
        <LogOutButton className="btn" /> 
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