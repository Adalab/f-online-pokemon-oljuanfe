import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBox from './SearchBox';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      filteredByNameData: [],
      valueOnSearchBox: '',
    };
    this.askForPokemons = this.askForPokemons.bind(this);
    this.handleFilterPokemon = this.handleFilterPokemon.bind(this);
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
      pokemonData.sort((a,b) => a.id-b.id);
      console.log('pokedata', pokemonData);
      return this.setState({data: [...pokemonData]});
    })
  }

  handleFilterPokemon (event) {
    const {data} = this.state;
    let inputValue = event.currentTarget.value;
    let filteredByName = data.filter((pokemon) => {
      const name = pokemon.name.toLowerCase();
      return name.includes(inputValue);
    });
    console.log('filteredbyname', filteredByName);
    this.setState(
      {
        filteredByNameData: filteredByName,
        valueOnSearchBox: inputValue
      }
    );
  }

  render() {
    console.log('state', this.state);
    let dataToList ;
    const{
      data,
      filteredByNameData,
      valueOnSearchBox,
    } = this.state;
    if (filteredByNameData.length===0){
      dataToList = data;
    } else {
      dataToList = filteredByNameData;
    }
    return (
      <main>
        <Switch>
          <Route
            exact
            path='/'
            render={
              (props) => (
                <Fragment>
                  <SearchBox
                    handleFilterPokemon={this.handleFilterPokemon}
                    valueOnSearchBox={valueOnSearchBox}
                  />
                  <PokemonList
                    data={dataToList}
                    match={props.match}
                  />
                </Fragment>
              )
            }
          />
          <Route
            exact
            path='/pokemon/:id'
            render={
              (props) => <PokemonDetail
                            match={props.match}
                            pokemonData={dataToList}
                          />
            }
          />
        </Switch>
      </main>
    );
  }
}

export default App;
