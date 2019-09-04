import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) =>{
    // to prevent reload when hit enter
    event.preventDefault();
    // look at props object & we call a function that
    // was passed into onSubmit props & we invoke with
    // this.state.term
    this.props.onSubmit(this.state.term)
  };

  render(){
    return(
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form"> 
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })} 
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;