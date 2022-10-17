import styled from 'styled-components';

const InputContainerStyled = styled.label`
  display: block;
  width: 100%;
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : '')};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : '')};
  margin-left: ${(props) => (props.ml ? `${props.ml}px` : '')};
  margin-right: ${(props) => (props.mr ? `${props.mr}px` : '')};
`;

export default InputContainerStyled;
