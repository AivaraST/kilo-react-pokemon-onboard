import styled from 'styled-components';

const InputFieldStyled = styled.input`
  display: block;
  width: 100%;
  background-color: #ebf3f5;
  padding: ${(props) => (props.icon ? '8px 16px 8px 36px' : '8px 16px')};
  border-radius: 4px;
  border: 1px solid #ebebeb;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #2e3057;

  &::placeholder {
    color: #aaafc2;
  }
`;

export default InputFieldStyled;
