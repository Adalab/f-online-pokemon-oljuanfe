import React, { Component } from 'react';
import SearchBox from './SearchBox';
import PokemonList from './PokemonList';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    };
    this.askForPokemons = this.askForPokemons.bind(this);
  }

  componentDidMount () {
    let pokemonData = [];
    for(let i = 0; i < 25; i++ ){
      this.askForPokemons(i,pokemonData);
    }   
  }

  askForPokemons (i,pokemonData) {
    
    console.log('pidiendooo');
    let pokemonNumber = i + 1;
    console.log('pokemonNumber', pokemonNumber);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log('json',json);
      pokemonData.push(json);
      // this.reorderPokemons(pokemonData);
      pokemonData.sort((a,b) => a.id-b.id);
      console.log('pokedata', pokemonData);
      return this.setState({data: [...pokemonData]});
    })
  }

  render() {
    console.log('state', this.state);
    const{data} = this.state;
    return (
      <div>
        <SearchBox/>
        <PokemonList data={data}/>
      </div>
    );
  }
}

export default App;
