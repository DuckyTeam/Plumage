import { PlmgButton } from '@ducky/plumage-react';
import React, { useState, useEffect } from 'react';

export const Buttons = () => {
  const [buttonState, setButtonState] = useState('default');

  useEffect(() => {
    setTimeout(() => {
      setButtonState('loading');
    }, 1000);
  }, [buttonState]);

  return (
    <div>
      <PlmgButton label={'default'} onClick={() => alert('OW! THAT HURT')}>
        {buttonState}
      </PlmgButton>
    </div>
  );
};
