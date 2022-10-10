import { useEffect, useId, useRef } from 'react';

function PreselectedInput() {
  const inputRef = useRef();
  const id = useId();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor={id}>
        <div>Age</div>
        <input ref={inputRef} id={id} type="number" />
      </label>
    </div>
  );
}

export default PreselectedInput;
