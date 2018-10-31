import React, { useState } from 'react';
import Number from './Number';

export default function SuperSpecialWeirdThing(params) {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <Number type={'super specially set'} num={num} />
      <button onClick={handleClick}>
        Click for something super special and weird
      </button>
    </div>
  );
}
