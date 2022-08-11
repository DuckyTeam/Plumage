import { useState } from 'react';
import { PlmgSlider } from '@ducky/plumage-react';

export default function Sliders() {
  const [sliders, setSlider] = useState({
    stepped: 0,
    decimal: 0.1,
    large: 100000,
    marked: 0,
  });

  const handleSlider = (event: any) => {
    const { name } = event.target;
    const { value } = event.detail;

    if (sliders[name] !== value) {
      setSlider((prevState) => ({
        ...prevState,
        [name]: parseFloat(value),
      }));
    }
    event.preventDefault();
    event.stopPropagation();
  };

  const handleSubmit = () => {
    alert(`Submitted Slider Values
      Stepped Slider: ${sliders.stepped}
      Decimal Slider: ${sliders.decimal}
      Large Value Slider: ${sliders.large}
    `);
  };

  return (
    <div>
      <div style={{ padding: '0px 5px 5px 5px' }}>
        <h2>Slider Form</h2>
        <form name={'sliders'} onSubmit={handleSubmit}>
          <span>Stepped Slider (5)</span>
          <PlmgSlider
            name={'stepped'}
            marks={true}
            defaultValue={20}
            thumbLabel={false}
            step={5}
            rangeValues={'0, 20, 50, 70, 100'}
            onValueUpdated={(e) => handleSlider(e)}
          />
          <br />
          <span>Decimal Slider</span>
          <PlmgSlider
            name={'decimal'}
            thumbLabel
            rangeValues={'0.1, 0.2, 0.3, 0.4, 0.5'}
            onValueUpdated={(e) => handleSlider(e)}
          />
          <br />
          <span>Large Value Slider</span>
          <PlmgSlider
            name={'large'}
            step={10000}
            rangeValues={'100000, 200000, 300000, 400000, 500000'}
            onValueUpdated={(e) => handleSlider(e)}
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
      <h2>Single Sliders</h2>
      <span>Marked Slider</span>
      <PlmgSlider
        name={'marked'}
        marks={true}
        thumbLabel={false}
        rangeValues={'0, 10, 20, 30'}
        onValueUpdated={(e) => handleSlider(e)}
      />
      <span>{`Current Marked Slider Value: ${sliders.marked}`}</span>
    </div>
  );
}
