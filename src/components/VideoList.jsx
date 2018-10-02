//import exampleVideoData from "../data/exampleVideoData.js";
import VideoListEntry from "./VideoListEntry.js";

//import exampleVideoData from 'exampleVideoData.js';
//import VideoListEntry from './VideoListEntry.js';
var VideoList = (props) => (
  <div className="videos">
    {props.videos.map((video) => (<VideoListEntry video={video} />))}
  </div>
)
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
