import React from 'react';
import ReactDOM from 'react-dom';
import {
  PlmgButton,
  PlmgCard,
  PlmgHeader,
  PlmgPageContainer,
  PlmgSidebar,
  PlmgSidebarItem,
  PlmgSvgIcon,
  PlmgSeparator,
} from '@ducky/plumage-react';

ReactDOM.render(
  <PlmgPageContainer>
    <PlmgSidebar
      slot={'sidebar'}
      logoSrc={
        'https://storage.googleapis.com/ducky_static_assets/ducky_logo_horisontal_azur.png'
      }
      logoHref={'https://ducky.eco'}
    >
      <PlmgSidebarItem active={true} href={'/'} icon={'home'} text={'Home'} />
      <PlmgSidebarItem
        href={'https://ducky.eco'}
        icon={'duck'}
        text={'Ducky website'}
      />
      <PlmgSidebarItem icon={'link'} text={'More links'}>
        <PlmgSidebarItem
          href={'https://plumage.ducky.eco'}
          icon={'brush'}
          text={'Plumage design system'}
        />
        <PlmgSidebarItem
          href={'https://components.ducky.eco'}
          icon={'gridView'}
          text={'Components library'}
        />
      </PlmgSidebarItem>
    </PlmgSidebar>
    <PlmgHeader slot={'header'}>
      <div slot={'right'} style={{ display: 'flex', flexDirection: 'row' }}>
        <span>Menu Item</span>
        <PlmgSeparator direction="vertical" />
        <span>Menu Item 2</span>
      </div>
    </PlmgHeader>

    <PlmgSeparator thickness="thin" direction="vertical" />
    <div slot={'content'} style={{ padding: '24px' }}>
      <PlmgButton
        onClick={(e: any) => {
          console.log('clicked', e);
        }}
        type={'button'}
      >
        PlmgButton
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
      <PlmgCard
        headerText="Header Text"
        topActionIcon={'home'}
        topActionLabel={'Top Action'}
        bottomActionText="Click here"
        bottomButtonAction={() =>
          console.log('bottomButtonClicked event received')
        }
        topActionClicked={() => console.log('topActionClicked event received')}
      >
        <div slot="slot-1">
          <h1>PlmgCard slot-1</h1>
        </div>
        <PlmgSeparator thickness="thin" />
        <div slot="slot-2">
          <h1>PlmgCard slot-2</h1>
        </div>
      </PlmgCard>
      <div style={{ display: 'flex', gap: '10px', padding: '5px 0 5px 0' }}>
        <p>Item</p>
        <PlmgSeparator direction="vertical" thickness="thick" />
        <p>Item2</p>
      </div>
      <div
        style={{
          display: 'flex',
          alignContent: 'left',
          width: '150px',
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}
      >
        <p>Item</p>
        <PlmgSeparator thickness="thick" color="green" />
        <p>Item2</p>
      </div>
    </div>
  </PlmgPageContainer>,
  document.getElementById('root')
);
