import { useState } from 'react';
import { PlmgButton, PlmgSlider } from '@ducky/plumage-react';

export default function SlidersForm() {
  const SLIDERS = {
    stepped: {
      label: 'stepped',
      default: 25,
    },
    decimal: {
      label: 'decimal',
      default: 0.5,
    },
    large: {
      label: 'large',
      default: 50,
    },
  };

  const [sliders, setSliders] = useState({
    stepped: SLIDERS.stepped.default,
    decimal: SLIDERS.decimal.default,
    large: SLIDERS.large.default,
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
        display: 'flex',
        flexDirection: 'column',
        padding: '32px',
        border: '2px solid #ccc',
        boxShadow: '0px 0px 10px #ccc',
        marginTop: '32px',
        marginBottom: '32px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2>Sliders</h2>
        <label htmlFor={SLIDERS.stepped.label}>{SLIDERS.stepped.label}</label>
        <PlmgSlider
          name={SLIDERS.stepped.label}
          default={SLIDERS.stepped.default}
          marks={true}
          step={5}
          range={'0, 500'}
          value={sliders.stepped}
          onValueUpdated={(event) => {
            setSliders({
              ...sliders,
              [SLIDERS.stepped.label]: event.detail.value,
            });
          }}
        />
        <PlmgButton
          style={{ paddingTop: '32px' }}
          label={SLIDERS.stepped.label}
          design={'outline'}
          size={'small'}
          iconLeft={'restartAlt'}
          color={'neutral'}
          shadow={false}
          type={'reset'}
          onClick={() => {
            setSliders({
              ...sliders,
              [SLIDERS.stepped.label]: SLIDERS.stepped.default,
            });
          }}
        >
          Reset
        </PlmgButton>

        <label htmlFor={SLIDERS.decimal.label}>{SLIDERS.decimal.label}</label>
        <PlmgSlider
          name={SLIDERS.decimal.label}
          default={SLIDERS.decimal.default}
          marks={true}
          step={0.1}
          range={'0, 1'}
          value={sliders.decimal}
          onValueUpdated={(event) => {
            setSliders({
              ...sliders,
              [SLIDERS.decimal.label]: event.detail.value,
            });
          }}
          thumbLabel={true}
        />
        <PlmgButton
          style={{ paddingTop: '32px' }}
          design={'outline'}
          label={SLIDERS.decimal.label}
          size={'small'}
          iconLeft={'restartAlt'}
          color={'neutral'}
          shadow={false}
          onClick={() => {
            setSliders({
              ...sliders,
              [SLIDERS.decimal.label]: SLIDERS.decimal.default,
            });
          }}
          type={'reset'}
        >
          Reset
        </PlmgButton>

        <label htmlFor={SLIDERS.large.label}>{SLIDERS.large.label}</label>
        <PlmgSlider
          name={'large'}
          marks={true}
          step={5}
          range={'0, 500'}
          default={SLIDERS.large.default}
          value={sliders.large}
          thumbLabel={true}
          onValueUpdated={(event) => {
            setSliders({
              ...sliders,
              [SLIDERS.large.label]: event.detail.value,
            });
          }}
        />
        <PlmgButton
          style={{ paddingTop: '32px' }}
          label={SLIDERS.large.label}
          design={'outline'}
          size={'small'}
          iconLeft={'restartAlt'}
          color={'neutral'}
          shadow={false}
          onClick={() => {
            setSliders({
              ...sliders,
              [SLIDERS.large.label]: SLIDERS.large.default,
            });
          }}
          type={'reset'}
        >
          Reset
        </PlmgButton>
        <p>Controlled Values: {JSON.stringify(sliders)}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
