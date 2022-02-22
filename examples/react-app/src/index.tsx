import React from 'react';
import ReactDOM from 'react-dom';
import { PlmgButton } from '@ducky/plumage-react';

ReactDOM.render(
  <PlmgButton
    onClick={(e) => {
      console.log('clicked', e);
    }}
    type={'button'}
  >
    This is a Plumage component
  </PlmgButton>,
  document.getElementById('root')
);
