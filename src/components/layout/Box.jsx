import React from 'react';
import BoxCoreStyled from './BoxCoreStyled';

function Box({ children, ...props }) {
  return <BoxCoreStyled {...props}>{children}</BoxCoreStyled>;
}

export default Box;
