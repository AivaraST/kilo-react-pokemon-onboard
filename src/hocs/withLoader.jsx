import styled from 'styled-components';
import { CgPokemon } from 'react-icons/cg';

function withLoader(Component) {
  return function withLoaderHoc(props) {
    if (props.loading) {
      return (
        <Loader>
          <CgPokemon size={64} />
        </Loader>
      );
    }

    if (props.failed) {
      return (
        <Loader>
          <div>Sorry, something went wrong...</div>
          <div>{props.failed}</div>
        </Loader>
      );
    }

    return <Component {...props} />;
  };
}

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    animation: rotate;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default withLoader;
