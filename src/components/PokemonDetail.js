import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class PokemonDetail extends Component {
  render() {
    console.log('PokemonDetails',this.props);
    const{
      match,
      pokemonData,
    } = this.props;
    const {params} = match;
    
    const pokemonId = parseInt(params.id);
    // console.log('id number?',characterId);
    let pokemonChosen = pokemonData.filter((pokemon) => {
      return pokemon.id === pokemonId;
    });
    console.log('pokemonchosen',pokemonChosen);
    let pokemonInfo = pokemonChosen[0];
    console.log('pokemonInfo', pokemonInfo);
    
    return (
      <div >
        <div>
          <img src="" alt=""/>
          <p>{pokemonInfo!==undefined?pokemonInfo.name:'No data'}</p>
          <ul>
            <li>
              Altura: {pokemonInfo!==undefined?pokemonInfo.height:'No data'}
            </li>
            <li>
              Peso: {pokemonInfo!==undefined?pokemonInfo.weight:'No data'}
            </li>
            <li>
              Habilidades: 
            </li>
          </ul>
        </div>
        <Link 
          to="/" 
          className="btn-back" 
        >
          Volver al listado
        </Link>
      </div>
    );
  }
}

export default PokemonDetail;
