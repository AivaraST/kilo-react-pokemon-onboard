import styled from 'styled-components';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Typography from '../typography/Typography';

function PokemonCard({ number, name, favorite, updateFavoritePokemon }) {
  const numberFormatted = String(`000${number}`).slice(-3);
  const delay = Math.floor(Math.random() * (3000 - 0 + 1) + 0);

  function handleOnClick() {
    updateFavoritePokemon(name);
  }

  return (
    <PokemonCardStyled>
      <PokemonFavorite onClick={() => handleOnClick()}>
        {favorite ? (
          <AiFillStar size={32} color="#e7cc56" />
        ) : (
          <AiOutlineStar size={32} />
        )}
      </PokemonFavorite>
      <Typography fontSize={24} fontWeight={700} align="center" capitalize>
        {name}
      </Typography>
      <PokemonImage
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${number}.png`}
        alt={`Pokemon Card - ${name}`}
        width={110}
        height={110}
        loading="lazy"
        delay={delay}
      />
      <Typography fontSize={14} fontWeight={300} align="center">
        #{numberFormatted}
      </Typography>
    </PokemonCardStyled>
  );
}

const PokemonCardStyled = styled.div`
  border-radius: 8px;
  padding: 24px 16px;
  background: #bedcdc;
  position: relative;
  overflow: hidden;
  min-height: 150px;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    img {
      transform: translateY(-10px);
    }
  }
`;

const PokemonFavorite = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

const PokemonImage = styled.img.attrs((props) => ({
  style: {
    animationDelay: `${props.delay}ms`,
  },
}))`
  margin: 0 auto;
  animation-name: floating;
  animation-duration: 2500ms;
  animation-iteration-count: infinite;

  @keyframes floating {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default PokemonCard;
