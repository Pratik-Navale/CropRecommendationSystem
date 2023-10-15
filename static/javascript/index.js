import { createApi } from 'unsplash-js';
// const { createApi } = require('unsplash-js');
const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: '2MMsC-wCX6LksXMWHDh3tRmgsHNLyL-NmBguNVun9Cs',
  });

  api.search
      .getPhotos({ query: 'cat', orientation: 'landscape' })
      .then((result) => {
        // setPhotosResponse(result);
        console.log(result)
      })
      .catch(() => {
        console.log('something went wrong!');
      });