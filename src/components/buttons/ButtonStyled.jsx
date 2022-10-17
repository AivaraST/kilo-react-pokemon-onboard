import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${(props) => props.maxWidth && `${props.maxWidth}px`};
  margin: ${(props) => props.centered && `0 auto`};
  margin-top: ${(props) => props.mt && `${props.mt}px`};
  margin-bottom: ${(props) => props.mb && `${props.mb}px`};
  margin-left: ${(props) => props.ml && `${props.ml}px`};
  margin-right: ${(props) => props.mr && `${props.mr}px`};
  background-color: #5d5e7d;
  border-radius: 12px;
  padding: 12px 24px;
  outline: none;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #373757;
  }

  &:disabled {
    background-color: #636379;
    cursor: not-allowed;
  }

  svg {
    animation: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default ButtonStyled;
