
export const selectAllPokemon = ({pokemon: {entities}}) => {
	return Object.keys(entities).map(id => entities[id]);
};
