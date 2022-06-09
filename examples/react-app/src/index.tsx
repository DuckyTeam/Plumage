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
  PlmgSlider,
} from '@ducky/plumage-react';

const handleSliders = (e: any) => {
  alert(`Submitted Slider Values
    Stepped Slider: ${'TODO'}
    Decimal Slider: ${'TODO'}
    Large Value Slider: ${'TODO'}
  `);
  e.preventDefault();
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
      <div style={{ border: '4px dotted blue' }}>
        <h2>My Slider Form</h2>
        <form name={'sliders'} onSubmit={handleSliders}>
          <span>Stepped Slider (5)</span>
          <PlmgSlider
            marks={true}
            thumbLabel={false}
            step={5}
            rangeValues={[0, 50, 70, 100]}
          />
          <br />
          <span>Decimal Slider</span>
          <PlmgSlider thumbLabel rangeValues={[0.1, 0.2, 0.3, 0.4, 0.5]} />
          <br />
          <span>Large Value Slider</span>
          <PlmgSlider
            step={10000}
            rangeValues={[100000, 200000, 300000, 400000, 500000]}
          />
          <br />
          <input
            style={{ height: '20px' }}
            type={'submit'}
            value={'Submit Sliders'}
          />
        </form>
      </div>
      <br />
      <span>Marked Slider</span>
      <PlmgSlider
        marks={true}
        thumbLabel={false}
        rangeValues={[0, 10, 20, 30]}
      />
      <span>{`Current Marked Slider Value: ${'TODO'}`}</span>
    </div>
  </PlmgPageContainer>,
  document.getElementById('root')
);
