import React, { Component, Fragment } from 'react';

class SearchBox extends Component {
  render() {
    const {
      handleFilterPokemon,
      valueOnSearchBox
    } = this.props;
    console.log('value', valueOnSearchBox);
    return (
      <Fragment>
        <label htmlFor="searchPokemon"></label>
        <input 
          type="text" 
          name="searchPokemon" 
          id="searchPokemon" 
          placeholder="Filtra pokemons por nombre..."
          value={valueOnSearchBox}
          onChange={handleFilterPokemon}
        />
      </Fragment>
      
    );
  }
}

export default SearchBox;
