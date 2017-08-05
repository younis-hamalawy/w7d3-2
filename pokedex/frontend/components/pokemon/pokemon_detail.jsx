import React from 'react';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';


class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  // componentWillReceiveProps(newProps){
  //   if (this.props.pokemon.id !== newProps.match.params.pokemon.id){
  //     this.props.requestSinglePokemon(newProps.match.params.pokemon.id);
  //   }
  // }

  render() {
    const { pokemon, items, loading } = this.props;
    console.log(this.props);
    if (!pokemon) {
      return null;
    }

    console.log("HI");
    return(
      <div>
        <img src={pokemon.image_url} />
        <ul className="poke">
          <li><h2>{pokemon.name}</h2></li>
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
