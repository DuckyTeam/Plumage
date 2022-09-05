import { PlmgButton, PlmgSlider } from '@ducky/plumage-react';
import { RANGE_INPUT_PARAMETERS } from './Constants/SliderInputs';

export type Props = {
  onUpdate: (newValue: number, label: string) => void;
  sliderValues: {
    [key: string]: number;
  };
};

export default function SlidersForm(props: Props) {
  const { sliderValues, onUpdate } = props;
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
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert(
            `You have submitted the form with the following values: ${JSON.stringify(
              sliderValues
            )}`
          );
        }}
      >
        <h2>Sliders</h2>
        <label>{RANGE_INPUT_PARAMETERS.decimal.label}</label>
        <PlmgSlider
          name={RANGE_INPUT_PARAMETERS.decimal.label}
          default={RANGE_INPUT_PARAMETERS.decimal.default}
          marks={RANGE_INPUT_PARAMETERS.decimal.marks}
          step={RANGE_INPUT_PARAMETERS.decimal.step}
          range={RANGE_INPUT_PARAMETERS.decimal.range}
          value={sliderValues.decimal}
          onValueUpdated={(event) =>
            onUpdate(parseFloat(event.detail.value), 'decimal')
          }
        />
        <PlmgButton
          style={{ paddingTop: '32px' }}
          label={RANGE_INPUT_PARAMETERS.decimal.label}
          design={'outline'}
          size={'small'}
          iconLeft={'restartAlt'}
          color={'neutral'}
          shadow={false}
          type={'reset'}
          onClick={() => {
            onUpdate(RANGE_INPUT_PARAMETERS.decimal.default, 'decimal');
          }}
        >
          Reset
        </PlmgButton>
        <label>{RANGE_INPUT_PARAMETERS.stepped.label}</label>
        <PlmgSlider
          name={RANGE_INPUT_PARAMETERS.stepped.label}
          default={RANGE_INPUT_PARAMETERS.stepped.default}
          marks={RANGE_INPUT_PARAMETERS.stepped.marks}
          step={RANGE_INPUT_PARAMETERS.stepped.step}
          range={RANGE_INPUT_PARAMETERS.stepped.range}
          value={sliderValues.stepped}
          onValueUpdated={(event) =>
            onUpdate(parseFloat(event.detail.value), 'stepped')
          }
        />
        <PlmgButton
          style={{ paddingTop: '32px' }}
          label={RANGE_INPUT_PARAMETERS.stepped.label}
          design={'outline'}
          size={'small'}
          iconLeft={'restartAlt'}
          color={'neutral'}
          shadow={false}
          type={'reset'}
          onClick={() => {
            onUpdate(RANGE_INPUT_PARAMETERS.stepped.default, 'stepped');
          }}
        >
          Reset
        </PlmgButton>
        <label>{RANGE_INPUT_PARAMETERS.large.label}</label>
        <PlmgSlider
          name={RANGE_INPUT_PARAMETERS.large.label}
          default={RANGE_INPUT_PARAMETERS.large.default}
          marks={RANGE_INPUT_PARAMETERS.large.marks}
          step={RANGE_INPUT_PARAMETERS.large.step}
          range={RANGE_INPUT_PARAMETERS.large.range}
          value={sliderValues.large}
          onValueUpdated={(event) =>
            onUpdate(parseFloat(event.detail.value), 'large')
          }
        />
        <PlmgButton
          style={{ paddingTop: '32px' }}
          label={RANGE_INPUT_PARAMETERS.large.label}
          design={'outline'}
          size={'small'}
          iconLeft={'restartAlt'}
          color={'neutral'}
          shadow={false}
          type={'reset'}
          onClick={() => {
            onUpdate(RANGE_INPUT_PARAMETERS.large.default, 'large');
          }}
        >
          Reset
        </PlmgButton>

        <p>Controlled Values: {JSON.stringify(sliderValues)}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
