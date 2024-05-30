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

  return (
    <div>
        <table>            <thead>
                <tr>
                    <th>Everyone is CRUSHing!</th>
                </tr>
            </thead>
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
// (post.crush_text)
export default LitterCRUSHED;






//   {JSON.stringify(posts)}
//THIS WORKS
    // function getPosts () {
    //     console.log('posts output', posts)
    //     dispatch({
    //         type: 'FETCH_POSTS',
    //         payload: posts,
    //       });
    //       history.push(`/posts`);
    //   }
//     <main>
// //     <h1>CRUSH List</h1>
// //     {JSON.stringify(posts)}
// //     <section className="crushs">
// //       {posts.map(post => {
//         return (
//           <div key={post.post_id}>
//             <h3>{post.crush_text} onClick={() => getPosts(posts)}</h3>
//           </div>
//         );
//       })}
//     </section>
//   </main>



//     <div>
//       {posts.map((post) => {
//         return (
//             <div
//             key={post.id}
//             onClick={() => getPosts(post)} >
//             <div>
//               <h4>{post.crush_text}</h4>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );


 {/* <img src={post.upload_image} alt={post.star_count} /> */}

//   useEffect(() => {
//     getPosts();
//   }, []);

//   return posts.map((post) => {
//     return (
//       <tbody className="table" key={post.id}>
//         <tr>
//           <td>{post.id}</td>
//           <td> {post.name}</td>
//         </tr>
//       </tbody>
//     );
//   });

//   return (
//     <div>
//         <table>
//             <thead>
//                 <tr>
//                     <th>Recent CRUSH's </th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {/* {posts.map(post => {
//                     return <CRUSHedItem key={post.id} post={post} />
//                 })} */}
//             </tbody>
//         </table>
//     </div>
// );