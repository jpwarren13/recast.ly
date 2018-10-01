// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import Search from './components/Search.js';
import VideoList from './components/VideoList.js';
//import VideoListEntry from './components/VideoListEntry.js';
import VideoPlayer from './components/VideoPlayer.js';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<VideoPlayer />, document.getElementById('videoPlayer'));
ReactDOM.render(<VideoList />, document.getElementById('videoList'));
ReactDOM.render(<Search />, document.getElementById('search'));


