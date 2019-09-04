import React from 'react';

class SearchBar extends React.Component {
  // to pick what type of input
  onInputChange(event){
    console.log(event.target.value);
  }

  render(){
    return(
      <div className="ui segment">
        <form className="ui form"> 
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />
            {/* we do not set parathesis() on onInputChange
            by leaving the () we are passing a reference to 
            this function to input element to that the input
            can call that function at some point in time in
            future */}
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;