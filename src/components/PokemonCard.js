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
      <div className="PokemonCard">
        <div>
          <img src={sprites.front_default} alt={name}/>
          <p>id/{id}</p>
        </div>
        <div>
          <p>{name}</p>
          <ul>
            {
              types.map(eachType => {
                return(
                  <li key={eachType.slot}>
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
