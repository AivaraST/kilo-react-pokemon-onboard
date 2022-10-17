import styled from 'styled-components';

const TypographyStyled = styled.div`
  font-size: ${(props) => props.fontSize && `${props.fontSize}px`};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  text-transform: ${(props) => props.capitalize && 'capitalize'};
  margin: ${(props) => props.centered && `0 auto`};
  margin-top: ${(props) => props.mt && `${props.mt}px`};
  margin-bottom: ${(props) => props.mb && `${props.mb}px`};
  margin-left: ${(props) => props.ml && `${props.ml}px`};
  margin-right: ${(props) => props.mr && `${props.mr}px`};
`;

export default TypographyStyled;
