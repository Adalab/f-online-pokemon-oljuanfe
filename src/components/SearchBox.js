import React, { Component, Fragment } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <Fragment>
        <label htmlFor="searchPokemon"></label>
        <input type="text" name="searchPokemon" id="searchPokemon" placeholder="Filtra pokemons por nombre..."/>
      </Fragment>
      
    );
  }
}

export default SearchBox;
