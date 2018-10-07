import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    const {
      handleFilterPokemon,
      valueOnSearchBox
    } = this.props;
    return (
      <div className="search-box">
        <label htmlFor="searchPokemon"></label>
        <input 
          className="search-input"
          type="text" 
          name="searchPokemon" 
          id="searchPokemon" 
          placeholder="Filtra pokemons por nombre..."
          value={valueOnSearchBox}
          onChange={handleFilterPokemon}
        />
      </div>
      
    );
  }
}

export default SearchBox;
