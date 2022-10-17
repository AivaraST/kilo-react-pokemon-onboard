import Grid from '../layout/Grid';
import Typography from '../typography/Typography';
import PokemonCard from './PokemonCard';

function PokemonsList({ pokemons, listName, updateFavoritePokemon }) {
  if (pokemons.length < 1) return null;

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
            key={pokemon.number}
            {...pokemon}
            updateFavoritePokemon={updateFavoritePokemon}
          />
        ))}
      </Grid>
    </>
  );
}
export default PokemonsList;
