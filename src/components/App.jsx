import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      query: 'teahupoo',

    };
    this.setVideos = this.setVideos.bind(this);
    this.clickVideo = this.clickVideo.bind(this);
  }
  setVideos(videos) {
    this.setState({videos: videos.items});
  }

  
  componentDidMount() {
    const options = {q: this.state.query};
    searchYouTube(options, this.setVideos);

  }

  clickVideo(newVideo) {
    // console.log('clicked');
    this.setState({currentVideo: newVideo});
  }

  handleChange(query) {
    const options = {q: this.state.query};

    this.setState({query}, searchYouTube(options, this.setVideos.bind(this)));

  }


  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div id="search"></div><em>search</em><Search handleChange={this.handleChange.bind(this)} /></div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div id ="videoPlayer"><em>videoPlayer</em> <VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div id="videoList"><em>videoList</em> <VideoList videos={this.state.videos} clickVideo={this.clickVideo}/></div>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
