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
  PlmgTooltip,
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
      <div
        slot={'right'}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <span>Menu Item</span>
        <PlmgSeparator
          thickness="thick"
          direction="vertical"
          color="#78909C"
        ></PlmgSeparator>
        <span>Menu Item 2</span>
      </div>
    </PlmgHeader>

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
          <PlmgSeparator thickness="thick"></PlmgSeparator>
        </div>
        <div slot="slot-2">
          <h1>PlmgCard slot-2</h1>
        </div>
      </PlmgCard>
      <p id={'targetelement'} style={{ width: 'fit-content' }}>
        Tooltip Target
      </p>
      <PlmgTooltip
        targetElement={'targetelement'}
        arrowSide={'top'}
        arrowPosition={'start'}
        content={'Bottom with arrow start'}
      ></PlmgTooltip>
    </div>
  </PlmgPageContainer>,
  document.getElementById('root')
);
