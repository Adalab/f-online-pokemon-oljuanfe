import React, { Component } from 'react';

class PokemonCard extends Component {
  render() {
    const {pokemonInfo} = this.props;
    console.log('props pokemoncard', pokemonInfo);
    const {
      id,
      types,
      name,
      sprites
    } = pokemonInfo;
    return (
      <div className="pokemon-card">
        <div className="pokemon-image-id">
          <img src={sprites.front_default} alt={name} className="pokemon-picture"/>
          <p className="pokemon-id">id / {id}</p>
        </div>
        <div className="pokemon-info">
          <p className="pokemon-name">{name}</p>
          <ul className="type-list">
            {
              types.map(eachType => {
                return(
                  <li key={eachType.slot} className="pokemon-type">
                    {eachType.type.name}
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
