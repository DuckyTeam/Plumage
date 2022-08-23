import { useState } from 'react';
import CustomSlider from '../FormComponents/Slider';
import { PlmgButton } from '@ducky/plumage-react';

export default function SlidersForm() {
  const DEFAULTS = {
    stepped: 25,
    decimal: 0.5,
    large: 50,
  };

  const [sliders, setSliderValues] = useState({
    stepped: DEFAULTS.stepped,
    decimal: DEFAULTS.decimal,
    large: DEFAULTS.large,
  });

  const handleSubmit = (event: any) => {
    alert(
      `You have submitted the form with the following values: ${JSON.stringify(
        sliders
      )}`
    );
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '4fr 1fr',
        width: '600px',
        gap: '32px',
        padding: '32px',
        border: '2px solid #ccc',
        boxShadow: '0px 0px 10px #ccc',
        margin: '32px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <CustomSlider
          name={'Stepped'}
          marks={true}
          step={5}
          range={'0, 500'}
          defaultValue={DEFAULTS.stepped}
          value={sliders.stepped}
          onValueChanged={(newValue) => {
            setSliderValues({ ...sliders, stepped: newValue });
          }}
          thumbLabel={true}
        />
        <PlmgButton
          style={{ paddingTop: '32px' }}
          design={'outline'}
          size={'small'}
          iconLeft={'restartAlt'}
          color={'neutral'}
          shadow={false}
          onClick={() => {
            setSliderValues({ ...sliders, stepped: DEFAULTS.stepped });
          }}
        >
          Reset
        </PlmgButton>
        <CustomSlider
          name={'Decimal'}
          marks={true}
          step={0.1}
          range={'0, 1'}
          defaultValue={DEFAULTS.decimal}
          value={sliders.decimal}
          onValueChanged={(newValue) => {
            setSliderValues({ ...sliders, decimal: newValue });
          }}
          thumbLabel={true}
        />
        <PlmgButton
          style={{ paddingTop: '32px' }}
          design={'outline'}
          size={'small'}
          iconLeft={'restartAlt'}
          color={'neutral'}
          shadow={false}
          onClick={() => {
            setSliderValues({ ...sliders, decimal: DEFAULTS.decimal });
          }}
        >
          Reset
        </PlmgButton>
        <CustomSlider
          name={'Large'}
          marks={true}
          step={5}
          range={'0, 500'}
          defaultValue={DEFAULTS.large}
          value={sliders.large}
          onValueChanged={(newValue) => {
            setSliderValues({ ...sliders, large: newValue });
          }}
          thumbLabel={true}
        />
        <PlmgButton
          style={{ paddingTop: '32px' }}
          design={'outline'}
          size={'small'}
          iconLeft={'restartAlt'}
          color={'neutral'}
          shadow={false}
          onClick={() => {
            setSliderValues({ ...sliders, large: DEFAULTS.large });
          }}
        >
          Reset
        </PlmgButton>
        <p>Controlled Values: {JSON.stringify(sliders)}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
