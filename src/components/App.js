import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term){
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID c59e14f9eb75a1ccba65ac8c6c564af19299c8cd474cae34566789061532f5a5'
      }
    })
  }

  render (){
    return(
      <div className="ui container" style={{ marginTop: "10px"}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* onSubmit is not handle its props */}
      </div>
    )
  }
}

export default App;