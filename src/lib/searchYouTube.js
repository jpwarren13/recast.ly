import YOUTUBE_API_KEY from '../config/youtube';
import {YouTube, SearchRequest} from 'youtube-search-google-api';
const youtube = new YouTube();

var searchYouTube = (options = {query: 'teahupoo', max: 5, key: YOUTUBE_API_KEY}, callback) => {
  var query = {
    key: YOUTUBE_API_KEY,
    maxResults: option.max,
    order: 'viewCount',
    type: 'video',
    q: options.query,
    part: 'snippet'
  };
  //     + '?videoEmbeddable=true',
  var videoObject = $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search' + '?videoEmbeddable=true',
    type: 'GET',
    data: query,

    success: function() {
      console.log('it works!');
    }, 
    error: function() {
      console.log('call failed');
    }
  });

  return videoObject;
  //   $.get('https://www.googleapis.com/youtube/v3/search', JSON.stringify(obj), youtubeCallBack);

};

export default searchYouTube;
