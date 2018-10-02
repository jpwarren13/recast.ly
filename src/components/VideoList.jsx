// Initialize the state of App to keep track of all the videos in the video list and the current video in the player. Pass this state down as props to its children components. Continue to use the example data.
// Make it so that when the title of a VideoListEntry is clicked, that video is displayed in the player. Do not add state to any of the functional components.
// Make sure all the active tests for App are passing. You can open the tests with npm test
//import exampleVideoData from "../data/exampleVideoData.js";
import VideoListEntry from './VideoListEntry.js';

//import exampleVideoData from 'exampleVideoData.js';
//import VideoListEntry from './VideoListEntry.js';
var VideoList = (props) => (
  <div className="videos">
    {props.videos.map((video) => (<VideoListEntry video={video} clickVideo={props.clickVideo}/>))}
  </div>
);
// class VideoList extends React.Component {
//   constuctor(props){
//     super(props);
//     //this.videos = this.props.videos;
//   }

//   render(){
//  //this.props.videoList = exampleVideoData;

//  return ( <div className="video-list">
    
//     {this.props.videos.map((video) => (<VideoListEntry video={video} />))}
  
//   </div>)
//   }
// }




// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
