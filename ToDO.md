// Edit form reuse same component populate the form with the data from the post - key is don't create a new id update the id already holding. 
// make a crush object in my component before I call my dispatch 
// type script - create avarible called crush - properties in my input field - create a new const = {object with all the things I want} call it current crush create object, 
// go to SAGA axios call in saga - then to database 
// feed - fetch crushes - get - that compont for the crush on the feed 
// 
//

//Post 
// 	post_id 
// 	user_id 
// 	webLink text
// 	when_crushed timestamp with time zone

// const uploadImage = (e) => {
//   const selectedFile = e.target.files[0];
//   // uploading asset to sanity
//   if (selectedFile.type === 'image/png' || selectedFile.type === 'image/svg' || selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/gif' || selectedFile.type === 'image/tiff') {
//     setWrongImageType(false);
//     setLoading(true);
//     client.assets
//       .upload('image', selectedFile, { contentType: selectedFile.type, filename: selectedFile.name })
//       .then((document) => {
//         setImageAsset(document);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log('Upload failed:', error.message);
//       });
//   } else {
//     setLoading(false);
//     setWrongImageType(true);
//   }
// };


// uuid generator  

DANE

1 - add new post 
_X_ui _x_saga _x_router _x_sql

2 - Get all post litter crushed 
__ui __saga __router __sql + __reducer 

3 - get 1 post by id 
_saga _route _sql

4 - edit 1 post by id 
_ui _saga _route _sql 

5 - delete ` post by id

6 - CSS

7 - PHOTO api 

8 - Maps api 