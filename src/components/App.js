import React, { Component } from 'react';
import SearchBox from './SearchBox';
import PokemonList from './PokemonList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    };
    this.askForPokemons = this.askForPokemons.bind(this);
  }

  componentDidMount () {
    for(let i = 0; i < 25; i++ ){
      this.askForPokemons(i);
    }
    
  }

  askForPokemons (i) {
    console.log('pidiendooo');
    let pokemonNumber = i + 1;
      console.log('pokemonNumber', pokemonNumber);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log('json',json);

      return this.setState({...this.state.data,data: json});
    })
  }


  render() {
    console.log('state', this.state);
    return (
      <div>
        <SearchBox/>
        <PokemonList/>
      </div>
    );
  }
}

export default App;
