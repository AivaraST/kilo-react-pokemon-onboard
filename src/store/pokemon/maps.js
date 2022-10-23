import { fetchPokemons, toggleFavoritePokemon } from './actions';

/**
 * Using hooks we can use useSelector which is equivalent to mapStateToProps.
 */
export const mapStateToPropsPokemons = (state) => ({
  pokemons: state.pokemonReducer.pokemons,
  loading: state.pokemonReducer.loading,
  failed: state.pokemonReducer.failed,
});

/**
 * Using hooks we can use useDispatch which is equivalent to mapDispatchToProps.
 */
export const mapDispatchToPropsPokemons = (dispatch) => ({
  fetchPokemons: (amount) => dispatch(fetchPokemons(amount)),
  toggleFavoritePokemon: (index) => dispatch(toggleFavoritePokemon(index)),
});
