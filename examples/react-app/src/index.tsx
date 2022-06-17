import React, { useCallback, useState } from 'react';
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

const TooltipRefExample = () => {
  const [button, setButton] = useState(undefined);
  const buttonRef = useCallback((node) => {
    if (node !== null) {
      setButton(node);
    }
  }, []);

  return (
    <>
      <PlmgButton label={'hover-me-button'} ref={buttonRef}>
        HoverMe
      </PlmgButton>
      <PlmgTooltip
        role={'tooltip'}
        id={'hover-me-button'}
        targetElement={button}
        position={'top'}
        color={'primary'}
        arrowPosition={'start'}
        content={'Top with arrow start'}
      ></PlmgTooltip>
    </>
  );
};

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
        onBottomActionClicked={() =>
          console.log('bottomButtonClicked event received')
        }
        onTopActionClicked={() =>
          console.log('topActionClicked event received')
        }
      >
        <div slot="slot-1">
          <h1>PlmgCard slot-1</h1>
          <PlmgSeparator thickness="thick"></PlmgSeparator>
        </div>
        <div slot="slot-2">
          <h1>PlmgCard slot-2</h1>
        </div>
      </PlmgCard>
      <p
        tabIndex={0}
        id={'targetelement'}
        aria-describeby={'tooltip-demonstration'}
        style={{ width: 'fit-content' }}
      >
        Tooltip Target
      </p>
      <PlmgTooltip
        role={'tooltip'}
        id={'tooltip-demonstration'}
        targetElement={'targetelement'}
        position={'right'}
        arrowPosition={'middle'}
        content={'Right with arrow middle'}
      ></PlmgTooltip>
      <TooltipRefExample />
    </div>
  </PlmgPageContainer>,
  document.getElementById('root')
);
