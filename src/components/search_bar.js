import React,{Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={ term: '' };
  }
  render(){
    return (
      // <div className="search-bar">
      //     <input
      //     value={this.state.term}
      //     onChange={event=>this.onInputChange(event.target.value)} />
      //   <i className="fa fa-search" aria-hidden="true"></i>
      // </div>
      <div className="search-container">
        <div className="search-icon-btn">
          <i className="fa fa-search"></i>
        </div>
        <div className="search-input">
          <input
          value={this.state.term}


          // onChange={event=> this.onInputChange(event.target.value)}
          onChange={ e => this.searchTerm(e.target.value) }
          onKeyPress={ e => this.searchQuery(e)}
          type="search" className="search-bar" placeholder="Search..." />
        </div>
      </div>
    );
  }
  // onInputChange(term){
  //     this.setState({term});
  //     this.props.onSearchTermChange(term);
  // }
  searchTerm(term) {
    this.setState({ term });
  }
  searchQuery(e) {
    if (e.which === 13 && this.state.term) {
      this.props.onSearchTermChange(this.state.term);
    }
  }
}



export default SearchBar;
