import React from 'react';
import ReactDOM from 'react-dom';
import { PlmgButton, PlmgCard } from '@ducky/plumage-react';

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
    <PlmgCard
      headerText="Header Text"
      bottomButtonText="Click here"
      bottomButtonAction={() => console.log('Ahhhh')}
    >
      <h1>Hello There</h1>
    </PlmgCard>
  </>,
  document.getElementById('root')
);
