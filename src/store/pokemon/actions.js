import axios from 'axios';

/**
 * Action types:
 * We define them as constants so it's will be consistent through app.
 * Those constants are used when we creating actions and then checking in reducer which actions was dispatched.
 * Maybe it's better to move them out, but currently seems that action types and action creator functions can sit in one file.
 */
export const ACTION_SET_POKEMONS = 'ACTION_SET_POKEMONS';
export const ACTION_TOGGLE_FAVORITE_POKEMON = 'ACTION_TOGGLE_FAVORITE_POKEMON';
export const ACTION_SET_POKEMONS_LOADING = 'ACTION_SET_POKEMONS_LOADING';
export const ACTION_SET_POKEMONS_FAILED = 'ACTION_SET_POKEMONS_FAILED';

/**
 * Action creator functions:
 * These functions will return object with information about what action type and payload with some dynamic information.
 * Thats not necessary, we can dispatch action just passing object themself to dispatch functon like store.dispatch({type: 'POKEMON_FETCH'}), but
 * in that way we cannot pass dynamic payload to action creator function when dispatching, or we will need dispatch object with information about action inline.
 */
export const setPokemons = (payload) => ({
  type: ACTION_SET_POKEMONS,
  payload,
});

export const toggleFavoritePokemon = (payload) => ({
  type: ACTION_TOGGLE_FAVORITE_POKEMON,
  payload,
});

export const setPokemonsLoading = (payload) => ({
  type: ACTION_SET_POKEMONS_LOADING,
  payload,
});

export const setPokemonsFailed = (payload) => ({
  type: ACTION_SET_POKEMONS_FAILED,
  payload,
});

/**
 * Async action creator functions:
 * Thanks to redux-thunk library we can dispatch async functions.
 * These functions should return another functions that do some asynchronous stuff like request to API.
 */
export const fetchPokemons = (amount) => async (dispatch) => {
  dispatch(setPokemonsLoading(true));

  axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${amount}`)
    .then(({ data }) => {
      const pokemons = data.results;
      pokemons.forEach((_, index) => {
        pokemons[index].id = index + 1;
        pokemons[index].favorite = false;
      });

      dispatch(setPokemons(pokemons));
      dispatch(setPokemonsLoading(false));
    })
    .catch(({ message }) => {
      dispatch(setPokemonsFailed(message));
      dispatch(setPokemonsLoading(false));
    });
};
