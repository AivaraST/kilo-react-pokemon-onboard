import styled from 'styled-components';

const BoxCoreStyled = styled.div`
  margin: ${(props) => props.margin && props.margin};
  margin-top: ${(props) => props.mt && `${props.mt}px`};
  margin-bottom: ${(props) => props.mb && `${props.mb}px`};
  margin-left: ${(props) => props.ml && `${props.ml}px`};
  margin-right: ${(props) => props.mr && `${props.mr}px`};
  padding: ${(props) => props.padding && props.padding};
  padding-top: ${(props) => props.pt && `${props.pt}px`};
  padding-bottom: ${(props) => props.pb && `${props.pb}px`};
  padding-left: ${(props) => props.pl && `${props.pl}px`};
  padding-right: ${(props) => props.pr && `${props.pr}px`};
`;

export default BoxCoreStyled;
