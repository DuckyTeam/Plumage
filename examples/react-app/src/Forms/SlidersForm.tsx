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

  const handleChange = (value: number, target: HTMLElement) => {
    const elementName = String(target.getAttribute('name'));
    if (elementName) {
      setSliders({ ...sliders, [elementName]: value });
    }
  };

  const handleReset = (target: HTMLElement) => {
    const elementLabel = target.getAttribute('aria-label');
    if (elementLabel) {
      setSliders({
        ...sliders,
        [elementLabel]: SLIDERS[elementLabel].default,
      });
    }
  };

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
        border: '2px dashed blue',
        width: '100%',
        height: '100%',
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2>Sliders</h2>
        <PlmgSlider
          name={SLIDERS.stepped.label}
          default={SLIDERS.stepped.default}
          marks={true}
          step={5}
          range={'0, 500'}
          value={sliders.stepped}
          onValueUpdated={(event) =>
            handleChange(event.detail.value, event.target)
          }
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
          onClick={(event) => handleReset(event.target)}
        >
          Reset
        </PlmgButton>

        <PlmgSlider
          name={SLIDERS.decimal.label}
          default={SLIDERS.decimal.default}
          marks={true}
          step={0.1}
          range={'0, 1'}
          value={sliders.decimal}
          onValueUpdated={(event) =>
            handleChange(event.detail.value, event.target)
          }
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
          onClick={(event) => handleReset(event.target)}
          type={'reset'}
        >
          Reset
        </PlmgButton>
        <PlmgSlider
          name={'large'}
          marks={true}
          step={5}
          range={'0, 500'}
          default={SLIDERS.large.default}
          value={sliders.large}
          thumbLabel={true}
          onValueUpdated={(event) =>
            handleChange(event.detail.value, event.target)
          }
        />
        <PlmgButton
          style={{ paddingTop: '32px' }}
          label={SLIDERS.large.label}
          design={'outline'}
          size={'small'}
          iconLeft={'restartAlt'}
          color={'neutral'}
          shadow={false}
          onClick={(event) => handleReset(event.target)}
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
