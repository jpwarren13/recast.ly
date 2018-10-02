import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0]
    }
    this.newVideoList = this.newVideoList.bind(this);
    //this.videos = exampleVideoData;
  }
newVideoList = (videoList) => {
  this.setState({videoList});
}
  render(){

    return (
  <div>

<nav className="navbar">
  <div className="col-md-6 offset-md-3">
    <div id="search"><h5><em>search</em><Search /></h5></div>
  </div>
</nav>
<div className="row">
  <div className="col-md-7">
    <div id ="videoPlayer"><h5><em>videoPlayer</em> <VideoPlayer video={this.state.video} /></h5></div>
  </div>
  <div className="col-md-5">
    <div id="videoList"><h5><em>videoList</em> <VideoList videos={this.state.videos} /></h5></div>
  </div>
</div>
</div>
    )
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
