import {
  ACTION_SET_POKEMONS,
  ACTION_SET_POKEMONS_LOADING,
  ACTION_TOGGLE_FAVORITE_POKEMON,
  ACTION_SET_POKEMONS_FAILED,
} from './actions';
import pokemonInitialState from './state';

/**
 * Reducers:
 * Reducers specify how our state should change when some action was dispatched.
 * Reducer should be a function that accepts state (state should have initial/default state) and action as an arguments.
 */
// eslint-disable-next-line default-param-last
const pokemonReducer = (state = pokemonInitialState, action) => {
  if (action.type === ACTION_SET_POKEMONS) {
    return {
      ...state,
      pokemons: action.payload,
    };
  }

  if (action.type === ACTION_TOGGLE_FAVORITE_POKEMON) {
    // const updatedState = { ...state };
    // updatedState.pokemons[action.payload].favorite =
    // !updatedState.pokemons[action.payload].favorite;
    // return updatedState

    const pokemons = state.pokemons.map((pokemon) => {
      if (pokemon.id === action.payload) {
        return { ...pokemon, favorite: !pokemon.favorite };
      }
      return pokemon;
    });

    return {
      ...state,
      pokemons,
    };
  }

  if (action.type === ACTION_SET_POKEMONS_LOADING) {
    return {
      ...state,
      loading: action.payload,
    };
  }

  if (action.type === ACTION_SET_POKEMONS_FAILED) {
    return {
      ...state,
      failed: action.payload,
    };
  }

  return state;
};

export default pokemonReducer;
