import { useState } from 'react';
import { PlmgTab, PlmgTabs, PlmgRadioButtonGroup } from '@ducky/plumage-react';
import Sliders from './Sliders';
import TextForm from './TextForm';

export default function FormElements() {
  const [currentTab, setTab] = useState(0);

  const tabClicked = (event: any) => {
    setTab(event.detail.tabId);
  };

  const renderTab = () => {
    if (currentTab === 0) {
      return <Sliders />;
    }

    if (currentTab === 1) {
      return <TextForm />;
    }

    if (currentTab === 2) {
      return (
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
              console.log(
                'Radio Button other colours:',
                e.detail.selectedValue
              );
            }}
          />
          <input type="submit"></input>
        </form>
      );
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
      </PlmgTabs>
      <div style={{ border: '4px dotted blue', padding: '5px', margin: '5px' }}>
        {renderTab()}
      </div>
    </div>
  );
}
