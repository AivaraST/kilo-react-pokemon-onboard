import React, { useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import { connect } from 'react-redux';
import PokemonsList from '../components/pokemons/PokemonsList';
import Input from '../components/inputs/Input';
import Button from '../components/buttons/Button';
import Container from '../components/layout/Container';
import Typography from '../components/typography/Typography';
import Box from '../components/layout/Box';
import {
  mapDispatchToPropsPokemons,
  mapStateToPropsPokemons,
} from '../store/pokemon/maps';
import PokemonListWithLoader from '../components/pokemons/PokemonsListWithLoader';

function filterPokemonsFavorite(pokemons) {
  return pokemons.filter((pokemon) => pokemon.favorite === true);
}

function Pokemons({
  pokemons,
  loading,
  failed,
  fetchPokemons,
  toggleFavoritePokemon,
}) {
  console.log('Pokemons page rendered...');

  const [amount, setAmount] = useState();
  const [inputError, setInputError] = useState('');
  const pokemonsFavorite = filterPokemonsFavorite(pokemons);

  const handleOnChange = (e) => {
    setAmount(e.currentTarget.valueAsNumber);
    setInputError('');
  };

  const handleSubmit = () => {
    if (!amount || amount < 1) {
      setInputError('Please enter valid number.');
      return;
    }

    fetchPokemons(amount);
  };

  return (
    <Container>
      <Box pt={96} pb={96}>
        <Box mb={32}>
          <Typography as="h1" fontSize={48} mb={16}>
            Pokédex
          </Typography>
          <Typography as="p" fontSize={24} mb={16}>
            Reach all the Pokémon data by one click!
          </Typography>
          <Input
            type="number"
            label="How much pokemons you want to see today? 👹"
            placeholder="Enter number"
            onChange={handleOnChange}
            icon={<CgSearch />}
            error={inputError}
            mb={16}
          />
          <Button onClick={handleSubmit} disabled={loading}>
            Fetch
          </Button>
        </Box>

        <Box mb={48}>
          <PokemonsList
            listName="Your most liked pokemon list!"
            pokemons={pokemonsFavorite}
            loading={loading}
            toggleFavoritePokemon={toggleFavoritePokemon}
          />
        </Box>
        <Box>
          <PokemonListWithLoader
            listName="Here we go! Choose your favourite pokemons."
            pokemons={pokemons}
            loading={loading}
            failed={failed}
            toggleFavoritePokemon={toggleFavoritePokemon}
          />
        </Box>
      </Box>
    </Container>
  );
}

/**
 * From Redux v7.1.0 we can use use useSelector, useDispatch hooks instead of "connecting" it through HOC.
 * With hooks we will not need those mapStateToProps, mapDispatchToProps maps to define what should be accessible through props.
 */
export default connect(
  mapStateToPropsPokemons,
  mapDispatchToPropsPokemons
)(Pokemons);
