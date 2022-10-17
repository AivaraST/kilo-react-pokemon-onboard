import { CgSpinner } from 'react-icons/cg';
import ButtonStyled from './ButtonStyled';

function Button({ children, href, disabled, ...props }) {
  const tagName = href ? 'a' : 'button';

  return (
    <ButtonStyled as={tagName} href={href} disabled={disabled} {...props}>
      {disabled ? <CgSpinner size={16} /> : children}
    </ButtonStyled>
  );
}

export default Button;
