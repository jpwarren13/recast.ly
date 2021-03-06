import searchYouTube from '../lib/searchYouTube.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'teahupoo',
    };
    this.updateText = this.updateText.bind(this);
  }

  updateText(e) {
    console.log(e);
    this.setState({value: e.target.value});
  }


  }




  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.value} onChange={ this.updateText}/>
        <button className="btn hidden-sm-down" onClick={() => this.props.handleChange(this.state.value)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }

{ /* {this.state.inputValue} onChange={val => this.updateInputValue} */ }




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
