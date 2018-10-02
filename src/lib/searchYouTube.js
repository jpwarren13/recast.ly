import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options = {query: 'teahupoo'}, callback) => {
  var query = {
    key: YOUTUBE_API_KEY,
    maxResults: 5,
    order: 'viewCount',
    type: 'video',
    q: options.query,
    part: 'snippet'
  };
  //     + '?videoEmbeddable=true',

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search' + '?videoEmbeddable=true',
    type: 'GET',
    data: query,

    success: function(data) {
      callback(data);
    }, 
    error: function() {
      console.log('call failed');
    }
  });

  
  //   $.get('https://www.googleapis.com/youtube/v3/search', JSON.stringify(obj), youtubeCallBack);

};

export default searchYouTube;
