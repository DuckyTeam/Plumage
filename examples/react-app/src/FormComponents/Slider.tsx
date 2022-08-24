import { PlmgSlider } from '@ducky/plumage-react';

type Props = {
  name: string;
  marks: boolean | undefined;
  step: number | undefined;
  range: string;
  value: number | undefined;
  defaultValue: number | undefined;
  onValueChanged: (newValue: number) => void;
  thumbLabel: boolean | undefined;
};

export default function CustomSlider(props: Props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <PlmgSlider
        name={props.name}
        marks={props.marks}
        thumbLabel={props.thumbLabel}
        valueControl={props.value}
        step={props.step}
        rangeValues={props.range}
        onValueUpdated={(e) => props.onValueChanged(e.detail.value)}
      />
    </div>
  );
}
