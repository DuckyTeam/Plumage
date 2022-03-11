import React from 'react';
import ReactDOM from 'react-dom';
import { PlmgButton, PlmgSvgIcon, PlmgCard } from '@ducky/plumage-react';

ReactDOM.render(
  <>
    <PlmgButton
      onClick={(e) => {
        console.log('clicked', e);
      }}
      type={'button'}
    >
      This is a Plumage component
    </PlmgButton>
    <PlmgSvgIcon icon={'home'} size={'6em'} />
    PlmgSvgIcon home
    <br />
    <PlmgCard
      headerText="Header Text"
      bottomButtonText="Click here"
      bottomButtonAction={() => console.log('Ahhhh')}
    >
      <div slot="item-one">
        <h1>Hello Darkness</h1>
      </div>
      <div slot="item-two">
        <h1>My Old Friend</h1>
      </div>
    </PlmgCard>
  </>,
  document.getElementById('root')
);
