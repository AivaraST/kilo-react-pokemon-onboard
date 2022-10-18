import React, { useMemo, useState } from 'react';
import axios from 'axios';
import { CgSearch } from 'react-icons/cg';
import PokemonsList from '../components/pokemons/PokemonsList';
import Input from '../components/inputs/Input';
import Button from '../components/buttons/Button';
import Container from '../components/layout/Container';
import Typography from '../components/typography/Typography';
import Box from '../components/layout/Box';
import withLoader from '../hocs/withLoader';

function filterPokemonsFavorite(pokemons) {
  return pokemons.filter((pokemon) => pokemon.favorite === true);
}

const PokemonListWithLoader = withLoader(PokemonsList);

function Pokemons() {
  console.log('Pokemons component rendered');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const pokemonsFavorited = useMemo(
    () => filterPokemonsFavorite(pokemons),
    [pokemons]
  );
  const [loading, setLoading] = useState(false);

  function handleOnChange(e) {
    setAmount(e.currentTarget.valueAsNumber);
    setError('');
  }

  function updateFavoritePokemon(name) {
    setPokemons((pokemonsOld) =>
      pokemonsOld.map((pokemon) => {
        if (pokemon.name === name) {
          return { ...pokemon, favorite: !pokemon.favorite };
        }
        return pokemon;
      })
    );
  }

  async function handleSubmit() {
    if (!amount || amount < 1) {
      setError('Please enter valid number.');
      return;
    }

    setLoading(true);
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${amount}`
    );
    const fetchedPokemons = response.data.results;

    fetchedPokemons.forEach((_fetchedPokemon, index) => {
      fetchedPokemons[index].number = index + 1;
      fetchedPokemons[index].favorite = false;
    });

    setPokemons(fetchedPokemons);
    setLoading(false);
  }

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
            onChange={(e) => handleOnChange(e)}
            icon={<CgSearch />}
            error={error}
            mb={16}
          />
          <Button onClick={(e) => handleSubmit(e)} disabled={loading}>
            Fetch
          </Button>
        </Box>

        <Box mb={48}>
          <PokemonsList
            listName="Your most liked pokemon list!"
            pokemons={pokemonsFavorited}
            loading={loading}
            updateFavoritePokemon={(name) => updateFavoritePokemon(name)}
          />
        </Box>
        <Box>
          <PokemonListWithLoader
            listName="Here we go! Choose your favourite pokemons."
            pokemons={pokemons}
            loading={loading}
            updateFavoritePokemon={(name) => updateFavoritePokemon(name)}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Pokemons;
