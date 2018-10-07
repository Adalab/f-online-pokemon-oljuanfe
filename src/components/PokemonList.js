import React, { Component } from 'react';
import PokemonCard from './PokemonCard';

class PokemonList extends Component {
  render() {
    const {data} = this.props;
    console.log('props pokemonList',data);
    return (
      <div className="pokemonList">
        Holla
        <ul>
          {
            data.map(pokemonInfo =>{
              console.log('pokeinfo',pokemonInfo);
              return (
                <li key = {pokemonInfo.id}>
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
