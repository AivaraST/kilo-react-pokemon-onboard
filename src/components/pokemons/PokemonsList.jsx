import { memo } from 'react';
import Grid from '../layout/Grid';
import Typography from '../typography/Typography';
import PokemonCard from './PokemonCard';

function PokemonsList({ pokemons, listName, toggleFavoritePokemon }) {
  if (pokemons.length < 1) return null;
  console.log('PokemonsList rendered...', listName);

  return (
    <>
      {listName && (
        <Typography fontSize={24} fontWeight={600} mb={16}>
          {listName}
        </Typography>
      )}

      <Grid columns={5} gap={16}>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            toggleFavoritePokemon={toggleFavoritePokemon}
          />
        ))}
      </Grid>
    </>
  );
}

export default memo(PokemonsList);
