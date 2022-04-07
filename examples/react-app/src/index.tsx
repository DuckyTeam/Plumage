import React from 'react';
import ReactDOM from 'react-dom';
import {
  PlmgButton,
  PlmgHeader,
  PlmgPageContainer,
  PlmgSidebar,
  PlmgSidebarItem,
  PlmgSvgIcon,
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
      <div slot={'right'}>MenuItem</div>
    </PlmgHeader>
    <div slot={'content'} style={{ padding: '24px' }}>
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
    </div>
  </PlmgPageContainer>,
  document.getElementById('root')
);
