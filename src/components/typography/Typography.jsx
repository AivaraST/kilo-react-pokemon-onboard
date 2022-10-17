import TypographyStyled from './TypographyStyled';

function Typography({ children, ...props }) {
  return <TypographyStyled {...props}>{children}</TypographyStyled>;
}

export default Typography;
