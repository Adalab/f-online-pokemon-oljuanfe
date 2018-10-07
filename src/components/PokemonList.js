import React, { Component } from 'react';
import PokemonCard from './PokemonCard';

class PokemonList extends Component {
  render() {
    const {data} = this.props;
    console.log('props pokemonList',data);
    return (
      <div className="pokemon-wrapper">
        <ul className="pokemon-list">
          {
            data.map(pokemonInfo =>{
              console.log('pokeinfo',pokemonInfo);
              return (
                <li key = {pokemonInfo.id} className="pokemon-item-list">
                  <PokemonCard pokemonInfo = {pokemonInfo} />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default PokemonList;
