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
      PlmgButton
    </PlmgButton>
    <PlmgSvgIcon icon={'home'} size={'6em'} />
    PlmgSvgIcon home
    <br />
    <PlmgCard
      headerText="Header Text"
      bottomActionText="Click here"
      bottomButtonAction={() =>
        console.log('bottomButtonClicked event received')
      }
    >
      <div slot="slot-1">
        <h1>PlmgCard slot-1</h1>
      </div>
      <div slot="slot-2">
        <h1>PlmgCard slot-2</h1>
      </div>
    </PlmgCard>
  </>,
  document.getElementById('root')
);
