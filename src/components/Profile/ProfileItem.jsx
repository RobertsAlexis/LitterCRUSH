import { useDispatch, useSelector} from 'react-redux';
function ProfileItem() {
    const post = useSelector(store => store.profile)
        return (
          <tr>
            <td>{post.user_id}</td>
            <td>{post.crush_text}</td>
            <td>at {post.where_crushed}</td> 
            <td>{post.user_id} earned {post.star_count} stars!</td>
          </tr>
        );
      }


  export default ProfileItem;  
  
  
  
  // const userId = useSelector(store => store.user.id); // Get the user ID from the Redux store
    // const posts = useSelector(store => store.posts); // Get the list of posts from the Redux store
    // const dispatch = useDispatch(); // Initialize the dispatch function to send actions to the Redux store

    // const [userPost, setUserPost] = useState([]); // Initialize state to hold the user's books

    // useEffect(() => {
    //     if (userId) { // Check if userId is available
          
    //       dispatch({ type: 'FETCH_POSTS', payload: userId }); // Dispatch action to fetch books for the current user
    //     }
    //   }, [userId, dispatch]);
    
    //  //  to filter and set userBooks when books or userId changes
    //  useEffect(() => {
    //     setUserPost(posts.filter(post => post.user_id === userId)); // Filter books that belong to the user and set them in state
    //   }, [posts, userId]); // Dependency array: runs the effect when books or userId changes

    // return (
    //   <tr>
    //     <td>{post.user_id}</td>
    //     <td>{post.crush_text}</td>
    //     <td>at {post.where_crushed}</td> 
    //     <td>{post.user_id} earned {post.star_count} stars!</td>
    //   </tr>
    // );
  