import React from 'react';
import ReactDOM from 'react-dom';
import { PlmgButton, PlmgSvgIcon } from '@ducky/plumage-react';

ReactDOM.render(
  <>
    <PlmgButton
      onClick={(e) => {
        console.log('clicked', e);
      }}
      type={'button'}
    >
      Button
    </PlmgButton>
    <PlmgSvgIcon icon={'home'} size={'6em'} />
    PlmgSvgIcon home
    <br />
  </>,
  document.getElementById('root')
);
