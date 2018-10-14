import React, { Component } from 'react';

class PokemonCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pokemonSpecies: undefined,
    }
    this.askForEvolution = this.askForEvolution.bind(this);
  }

  componentDidMount () {
    this.askForEvolution ();
  }

  askForEvolution() {
    const {species} = this.props.pokemonInfo;
    fetch(species.url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return this.setState({pokemonSpecies: json });
    })
  }

  render() {
    const {pokemonInfo} = this.props;
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
          <div className={
            (this.state.pokemonSpecies!==undefined)
                ?(this.state.pokemonSpecies.evolves_from_species!==null?"pokemon-evolution":"hidden")
                :"hidden"
              }
          >
            <p className="evolution-first-paragraph">Evoluciona de:</p>
            <p className="evolution-second-paragraph">
            {
              (this.state.pokemonSpecies!==undefined)
                ?(this.state.pokemonSpecies.evolves_from_species!==null?this.state.pokemonSpecies.evolves_from_species.name:'Este pokemon no tiene evolución')
                :'Este pokemon no evoluciona de nadie'
            }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
