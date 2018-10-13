import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class PokemonDetail extends Component {
  render() {
    console.log('PokemonDetails',this.props);
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    return (
      <div >
        Holaaaa!!
        <Link to="/" className="btn-back" >Volver al listado</Link>
      </div>
    );
  }
}

export default PokemonDetail;
