import { PlmgButton, PlmgSlider } from '@ducky/plumage-react';
import { SLIDERS } from './Constants/Sliders';

export type Props = {
  onUpdate: (newValue: number, label: string) => void;
  sliders: {
    [key: string]: number;
  };
};

export default function SlidersForm(props: Props) {
  const { sliders } = props;
  const { onUpdate } = props;
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
              sliders
            )}`
          );
        }}
      >
        <h2>Sliders</h2>
        <label>{SLIDERS.decimal.label}</label>
        <PlmgSlider
          name={SLIDERS.decimal.label}
          default={SLIDERS.decimal.default}
          marks={SLIDERS.decimal.marks}
          step={SLIDERS.decimal.step}
          range={SLIDERS.decimal.range}
          value={sliders.decimal}
          onValueUpdated={(event) =>
            onUpdate(parseFloat(event.detail.value), 'decimal')
          }
        />
        <PlmgButton
          style={{ paddingTop: '32px' }}
          label={SLIDERS.decimal.label}
          design={'outline'}
          size={'small'}
          iconLeft={'restartAlt'}
          color={'neutral'}
          shadow={false}
          type={'reset'}
          onClick={() => {
            onUpdate(SLIDERS.decimal.default, 'decimal');
          }}
        >
          Reset
        </PlmgButton>
        <label>{SLIDERS.stepped.label}</label>
        <PlmgSlider
          name={SLIDERS.stepped.label}
          default={SLIDERS.stepped.default}
          marks={SLIDERS.stepped.marks}
          step={SLIDERS.stepped.step}
          range={SLIDERS.stepped.range}
          value={sliders.stepped}
          onValueUpdated={(event) =>
            onUpdate(parseFloat(event.detail.value), 'stepped')
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
          onClick={() => {
            onUpdate(SLIDERS.stepped.default, 'stepped');
          }}
        >
          Reset
        </PlmgButton>
        <label>{SLIDERS.large.label}</label>
        <PlmgSlider
          name={SLIDERS.large.label}
          default={SLIDERS.large.default}
          marks={SLIDERS.large.marks}
          step={SLIDERS.large.step}
          range={SLIDERS.large.range}
          value={sliders.large}
          onValueUpdated={(event) =>
            onUpdate(parseFloat(event.detail.value), 'large')
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
          type={'reset'}
          onClick={() => {
            onUpdate(SLIDERS.large.default, 'large');
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
