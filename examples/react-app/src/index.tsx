import React, { useCallback, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  PlmgButton,
  PlmgCard,
  PlmgDropdown,
  PlmgDropdownItem,
  PlmgHeader,
  PlmgPageContainer,
  PlmgSidebar,
  PlmgSidebarItem,
  PlmgSvgIcon,
  PlmgSeparator,
  PlmgTooltip,
  PlmgAvatar,
} from '@ducky/plumage-react';
import Avatars from './Avatars';
import FormElements from './FormElements';
import { PlmgRadioButtonGroup } from '@ducky/plumage-react';
import { PlmgRadioButton } from '@ducky/plumage-react';

const TooltipRefExample = () => {
  const [button, setButton] = useState(undefined);

  const buttonRef = useCallback((node) => {
    if (node !== null) {
      setButton(node);
    }
  }, []);

  return (
    <>
      <PlmgButton label={'hover-me-button'} ref={buttonRef} text="Hover Me" />
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

const ButtonExample = () => {
  const [buttonText, setButtonText] = useState('My text changes on click!');

  return (
    <PlmgButton
      onClick={() => {
        setButtonText((prevText) =>
          prevText === 'Wow!' ? 'My text changes' : 'Wow!'
        );
      }}
      text={buttonText}
    />
  );
};

const ButtonDisabledExample = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonDisabled(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [buttonDisabled]);

  return (
    <PlmgButton
      onClick={() => {
        setButtonDisabled(true);
      }}
      disabled={buttonDisabled}
      text={buttonDisabled ? 'I am disabled...' : 'I am enabled!'}
    />
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
        <PlmgDropdown align={'right'}>
          <PlmgAvatar slot={'trigger'} size={'medium'} interactive />
          <div slot={'menu'}>
            <PlmgDropdownItem
              icon={'duck'}
              text={'Dropdown Item 1'}
              href={'https://ducky.eco'}
              target={'_blank'}
            />
            <PlmgSeparator style={{ padding: '8px 8px', color: '#BFCBD1' }} />
            <PlmgDropdownItem
              icon={'duck'}
              text={'Dropdown Item 1'}
              href={'https://ducky.eco'}
              target={'_blank'}
            />
          </div>
        </PlmgDropdown>
      </div>
    </PlmgHeader>
    <div slot={'content'} style={{ padding: '24px' }}>
      <ButtonExample />
      <ButtonDisabledExample />
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
      <PlmgSeparator />
      <PlmgRadioButtonGroup
        name="fruits"
        values={['apples', 'oranges', 'pears']}
        value="oranges"
        label="Radio button group with checked value"
        onValueChanged={(e: any) => {
          console.log('checked ', e.detail.checkedValue);
        }}
      />
      <br />
      Single Radio Button with checked=true
      <PlmgRadioButton name="dairy" value={'cheese'} checked={true} />
      Single Radio Button without checked set
      <PlmgRadioButton name="dairy" value={'cheese'} />
      <PlmgSeparator />
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
      <br />
      <Avatars />
      <br />
      <FormElements />
    </div>
  </PlmgPageContainer>,
  document.getElementById('root')
);
