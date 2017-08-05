import React from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render() {
    const pokes = this.props.pokemon;
    return(
      <div>
        <ul className="pokes">
          { pokes.map(poke => <PokemonIndexItem key={poke.id} poke={poke} /> )}
        </ul>

        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />


      </div>
    );
  }
}

export default PokemonIndex;
