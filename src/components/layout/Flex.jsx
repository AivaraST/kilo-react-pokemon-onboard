import styled from 'styled-components';
import BoxCoreStyled from './BoxCoreStyled';

const Flex = styled(BoxCoreStyled)`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || ''};
  justify-content: ${(props) => props.justifyContent || ''};
  align-items: ${(props) => props.alignItems || ''};
`;

export default Flex;
