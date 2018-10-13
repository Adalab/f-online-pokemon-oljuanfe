import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import { Link } from 'react-router-dom';

class PokemonList extends Component {
  render() {
    const {data} = this.props;
    // console.log('props pokemonList',data);
    return (
      <div className="pokemon-wrapper">
        <ul className="pokemon-list">
          {
            data.map(pokemonInfo =>{
              console.log('pokeinfo',pokemonInfo);
              const {id} = pokemonInfo;
              return (
                <li key = {id} className="pokemon-item-list">
                <Link to={`/pokemon/${id}`} className="link-router">
                  <PokemonCard pokemonInfo = {pokemonInfo} />
                </Link>
                  
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
