import React from 'react';
import ReactDOM from 'react-dom';
import { PlmgButton, PlmgSvgIcon } from '@ducky/plumage-react';

ReactDOM.render(
  <>
    <PlmgButton
      onClick={(e: any) => {
        console.log('clicked', e);
      }}
      type={'button'}
    >
      Button
    </PlmgButton>
    <br />
    <PlmgButton
      onClick={(e: any) => {
        console.log('clicked', e);
      }}
      type={'button'}
      icon-center={'home'}
    />
    PlmgButton with icon-center
    <br />
    <PlmgSvgIcon icon={'home'} size={'6em'} />
    PlmgSvgIcon home
    <br />
  </>,
  document.getElementById('root')
);
