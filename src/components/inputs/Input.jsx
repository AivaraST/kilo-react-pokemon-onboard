import { useId } from 'react';
import Typography from '../typography/Typography';
import InputContainerStyled from './InputContainerStyled';
import InputWrapperStyled from './InputWrapperStyled';
import InputFieldStyled from './InputFieldStyled';
import InputIconStyled from './InputIconStyled';

function Input({ label, error, icon, mt, mb, ml, mr, ...props }) {
  const id = useId();

  return (
    <InputContainerStyled htmlFor={id} mt={mt} mb={mb} ml={ml} mr={mr}>
      <Typography mb={8}>{label}</Typography>
      <InputWrapperStyled>
        {icon && <InputIconStyled>{icon}</InputIconStyled>}
        <InputFieldStyled id={id} icon={icon} {...props} />
      </InputWrapperStyled>
      {error && (
        <Typography fontSize={12} color="#FA5F55">
          {error}
        </Typography>
      )}
    </InputContainerStyled>
  );
}

export default Input;
