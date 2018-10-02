import YOUTUBE_API_KEY from "../config/youtube";

// Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
// Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
// Accept an options object with the following properties:
// query - the string to search for
// max - the maximum number of videos to get, which should default to 5
// key - an authorized YouTube Browser API key
// Only GET embeddable videos
// Make sure all the tests for searchYouTube are passing. You can open the tests with npm test
// After the API loads, call a function to enable the search box.
// function handleAPILoaded() {
//   $('#search-button').attr('disabled', false);
// }

// // Search for a specified string.
// function search() {
//   var q = $('#query').val();
//   var request = gapi.client.youtube.search.list({
//     q: q,
//     part: 'snippet'
//   });

//   request.execute(function(response) {
//     var str = JSON.stringify(response.result);
//     $('#search-container').html('<pre>' + str + '</pre>');
//   });
// }
var searchYouTube = (options = {query: '', max: 5, key: YOUTUBE_API_KEY}, callback) => {
  

};

export default searchYouTube;
