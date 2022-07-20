import { PlmgRadioButtonGroup } from '@ducky/plumage-react';

export default function Radios() {
  return (
    <div>
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
  );
}
