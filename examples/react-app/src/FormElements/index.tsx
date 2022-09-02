import { useState } from 'react';
import { PlmgTab, PlmgTabs } from '@ducky/plumage-react';
import Sliders from './Sliders';
import TextForm from './TextForm';
import Radios from './Radios';
import { SLIDERS } from './Constants/Sliders';

export default function FormElements() {
  const [sliders, setSliders] = useState({
    decimal: SLIDERS.decimal.default,
    stepped: SLIDERS.stepped.default,
    large: SLIDERS.large.default,
  });

  const [currentTab, setTab] = useState(0);

  const tabClicked = (event: any) => {
    setTab(event.detail.tabId);
  };

  const renderTab = () => {
    if (currentTab === 0) {
      return (
        <Sliders
          sliders={sliders}
          onUpdate={(value: number, label: string) => {
            setSliders({ ...sliders, [label]: value });
          }}
        />
      );
    }

    if (currentTab === 1) {
      return <TextForm />;
    }

    if (currentTab === 2) {
      return <Radios />;
    }

    return null;
  };

  return (
    <div>
      <h1>Form Elements:</h1>
      <PlmgTabs onTabChange={(tab) => tabClicked(tab)}>
        <PlmgTab active={currentTab === 0} label="Sliders" />
        <PlmgTab label="Text Input" />
        <PlmgTab label="Radios" />
        <PlmgTab disabled={currentTab === 2} label="Disabled on Radios" />
      </PlmgTabs>
      <div style={{ border: '4px dotted blue', padding: '5px', margin: '5px' }}>
        {renderTab()}
      </div>
    </div>
  );
}
