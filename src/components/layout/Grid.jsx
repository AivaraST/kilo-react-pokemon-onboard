import styled from 'styled-components';
import BoxCoreStyled from './BoxCoreStyled';

const Grid = styled(BoxCoreStyled)`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns || 2}, 1fr)`};
  grid-gap: ${(props) => props.gridGap || '1rem'};
`;

export default Grid;
