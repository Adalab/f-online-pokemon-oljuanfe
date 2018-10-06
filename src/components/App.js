import React, { Component } from 'react';
import SearchBox from './SearchBox';
import PokemonList from './PokemonList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBox/>
        <PokemonList/>
      </div>
    );
  }
}

export default App;
