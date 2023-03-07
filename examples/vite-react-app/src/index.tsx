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
      <PlmgButton type={'button'} text="PlmgButton" />
    </div>
  </PlmgPageContainer>,
  document.getElementById('root')
);
