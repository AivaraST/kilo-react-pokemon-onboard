import { useState } from 'react';

function Clicker() {
  const [amount, setAmount] = useState(0);

  function handleOnClick() {
    setAmount((value) => value + 1);
  }

  return (
    <>
      <p>
        You clicked {amount} times and this number is{' '}
        {amount % 2 ? 'odd' : 'even'}
      </p>
      <button type="submit" onClick={handleOnClick}>
        You you clicked me {amount} times
      </button>
    </>
  );
}

export default Clicker;
