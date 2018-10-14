import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class PokemonDetail extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pokemonSpecies: undefined,
      pokemonEvolutionChain: undefined,
    };
    this.askPokemonEvolutionChain = this.askPokemonEvolutionChain.bind(this);
    this.askPokemonSpecies = this.askPokemonSpecies.bind(this);
  }

  askPokemonSpecies (urlSpecies) {
    console.log('EVOLUTION');
    console.log(urlSpecies);
    fetch(urlSpecies)
    .then((response) => {
      return response.json();
    })
    .then((json) => { 
      console.log(json);
      return (this.setState({pokemonSpecies: json }), this.askPokemonEvolutionChain());
    })
  }

  askPokemonEvolutionChain() {
    console.log('EVOLUTION2');
    if (this.state.pokemonSpecies!==undefined){
      let urlEvolutionChain = this.state.pokemonSpecies.evolution_chain.url;
      console.log('evolution url',urlEvolutionChain);
      fetch(urlEvolutionChain)
      .then((response) => {
        return response.json();
      })
      .then((json) => { 
        console.log(json);
        return (
          this.setState({pokemonEvolutionChain: json })
        );
      })
    }
  }

  render() {
    console.log('PokemonDetails',this.props);
    console.log('STATE DETAIL', this.state);
    const{
      match,
      pokemonData,
    } = this.props;
    const {pokemonEvolutionChain} = this.state;
    let primaryPokemon= '' ;
    let firstPokemonEvolution = '' ;
    let secondPokemonEvolution = '' ;
    if (pokemonEvolutionChain !== undefined ) {
      const {
        evolves_to,
        species,
      } = pokemonEvolutionChain.chain;
      primaryPokemon = species.name;
      firstPokemonEvolution = evolves_to[0].species.name;
      if (evolves_to[0].evolves_to.length > 0){
        secondPokemonEvolution = evolves_to[0].evolves_to[0].species.name;
      }
      
    }
    const {params} = match;
    const pokemonId = parseInt(params.id);
    let pokemonChosen = pokemonData.filter((pokemon) => {
      return pokemon.id === pokemonId;
    });
    console.log('pokemonchosen',pokemonChosen);
    let pokemonInfo = pokemonChosen[0];
    console.log('pokemonInfo', pokemonInfo);
    if (pokemonInfo !== undefined && this.state.pokemonSpecies === undefined) {
      this.askPokemonSpecies(pokemonInfo.species.url);
    }
    
    
    return (
      <div className="pokemon-detail-wrapper">
        <div className="pokemon-detail-info-images">
          <div className="pokemon-detail-images">
            <img 
              src={pokemonInfo!==undefined?pokemonInfo.sprites.front_default:'No data'} 
              alt={pokemonInfo!==undefined?pokemonInfo.name:'No data'}
              className="pokemon-front"
            />
            <img 
              src={pokemonInfo!==undefined?pokemonInfo.sprites.back_default:'No data'} 
              alt={pokemonInfo!==undefined?pokemonInfo.name:'No data'}
              className="pokemon-back"
            />
          </div>         
          <div className="pokemon-detail-info">
            <p className="pokemon-detail-name">
              {pokemonInfo!==undefined?pokemonInfo.name:'No data'}
            </p>
            <ul className="pokemon-detail-list">
              <li className="pokemon-detail-item pokemon-detail-height">
                <p className="pokemon-detail-info-paragraph">
                  Altura:
                </p>  
                <p>
                  {pokemonInfo!==undefined?pokemonInfo.height:'No data'}
                </p>
              </li>
              <li className="pokemon-detail-item pokemon-detail-weigth">
                <p className="pokemon-detail-info-paragraph">
                  Peso:
                </p>
                <p>
                  {pokemonInfo!==undefined?pokemonInfo.weight:'No data'}
                </p>  
              </li>
              <li className="pokemon-detail-item pokemon-detail-abilities">
                  
                <ul className="pokemon-detail-abilities-list">
                  <p className="pokemon-detail-info-paragraph">
                    Habilidades:
                  </p>
                  {pokemonInfo!==undefined
                    ?(pokemonInfo.abilities.map((pokemonAbilities) => {
                      const {
                        ability,
                        slot
                      } = pokemonAbilities;
                      return (
                        <li 
                          key={slot} 
                          className="pokemon-detail-abilities-item"
                        >
                          {ability.name}
                        </li>
                      );
                      }))
                    : 'No data'}
                </ul>
              </li>
              <li className="pokemon-detail-item pokemon-detail-evolutions"> 
                <ul className="pokemon-detail-evolutions-list">
                  <p className="pokemon-detail-info-paragraph">
                    Evoluciones:
                  </p>
                  <li>
                    {primaryPokemon} &#10153; {firstPokemonEvolution}
                  </li>
                  <li className={secondPokemonEvolution!==''?'':'hidden'}>
                    {firstPokemonEvolution} &#10153; {secondPokemonEvolution}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          
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
