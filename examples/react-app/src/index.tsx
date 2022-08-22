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
  PlmgRadioButtonGroup,
  PlmgSeparator,
  PlmgTooltip,
  PlmgAvatar,
  PlmgStatus,
} from '@ducky/plumage-react';
import Sliders from './Sliders';
import TextForm from './TextForm';
import Avatars from './Avatars';

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
          alignItems: 'center',
        }}
      >
        <span>Menu Item</span>
        <PlmgSeparator
          thickness="thick"
          style={{ alignSelf: 'stretch' }}
          direction="vertical"
          color="#78909C"
        ></PlmgSeparator>
        <span>Menu Item 2</span>
        <PlmgAvatar
          size={'small'}
          iconColor={'#E81F64'}
          backgroundColor={'#FAD2E0'}
          interactive
          onAvatarClick={() =>
            alert(`I'm a clickable avatar, but the others aren't`)
          }
        ></PlmgAvatar>
      </div>
    </PlmgHeader>
    <Avatars />
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
      <Avatars />
      <Sliders />
      <TextForm />
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
      <br />
      <form>
        <PlmgRadioButtonGroup
          name="colours"
          label="What's your favourite colour"
          size="medium"
          required
          values='[
          "red",
          "blue",
          "yellow",
          "green",
          "purple (the obvious choice)"
        ]'
          errorMessage={'Please select a colour'}
          onValueChanged={(e: CustomEvent<{ selectedValue: string }>) => {
            console.log('Radio Button colours:', e.detail.selectedValue);
          }}
        />
        <PlmgRadioButtonGroup
          name="other colours"
          label="What's your favourite fruit"
          size="medium"
          required
          values='[
          "apples",
          "blueberries",
          "bananas",
          "kiwis",
          "grapes"
        ]'
          errorMessage={'Please select a fruit'}
          onValueChanged={(e: CustomEvent<{ selectedValue: string }>) => {
            console.log('Radio Button other colours:', e.detail.selectedValue);
          }}
        />
        <input type="submit"></input>
      </form>
    </div>
  </PlmgPageContainer>,
  document.getElementById('root')
);
