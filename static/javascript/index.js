// import { createApi } from 'unsplash-js';
// // const { createApi } = require('unsplash-js');
// const api = createApi({
//     // Don't forget to set your access token here!
//     // See https://unsplash.com/developers
//     accessKey: '2MMsC-wCX6LksXMWHDh3tRmgsHNLyL-NmBguNVun9Cs',
//   });

//   api.search
//       .getPhotos({ query: 'cat', orientation: 'landscape' })
//       .then((result) => {
//         // setPhotosResponse(result);
//         console.log(result)
//       })
//       .catch(() => {
//         console.log('something went wrong!');
//       });
// const cropName=document.getElementById('crop-output')
// let img=document.getElementById('img')
// console.log(cropName)
// cropName.addEventListener('change',(e)=>{
//     console.log(e.target.textContent)
// })
// Replace 'YOUR_ACCESS_KEY' with your actual Unsplash API access key
// const accessKey = '2MMsC-wCX6LksXMWHDh3tRmgsHNLyL-NmBguNVun9Cs';

// // Define the Unsplash API endpoint
// const unsplashEndpoint = 'https://api.unsplash.com/search/photos';

// // Define any parameters you want to include in your request
// const params = {
//   client_id: accessKey,
//   count: 1,
//   page:1,
//   per_page:2, 
//   order_by:'relevant',
//   query: 'apple crop farming', 
//   orientation: 'portrait'// Number of random photos you want to retrieve
// };

// // Construct the URL with parameters
// const url = new URL(unsplashEndpoint);
// url.search = new URLSearchParams(params).toString();
// console.log(url)
// // console.log(url.search)

// // Make the GET request using fetch
// fetch(url)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error(`Request failed with status: ${response.status}`);
//     }
//   })
//   .then((data) => {
//     // Handle the JSON response data here
//     img.setAttribute('src',data.results.urls.regular)
//     // Array.from(data.results).forEach((photo=>{
//     //     console.log(photo.urls.regular)
//     // }));
//   })
//   .catch((error) => {
//     // Handle any errors that occur during the request
//     console.error(error);
//   });
