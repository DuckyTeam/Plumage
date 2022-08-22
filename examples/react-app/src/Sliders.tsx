import { useEffect, useReducer, useState } from 'react';
import { PlmgSlider } from '@ducky/plumage-react';

export default function Sliders() {
  const [sliders, setSlider] = useState({
    stepped: 20,
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

  const incrementSlider = () => {
    setSlider((prevState) => ({
      ...prevState,
      marked: prevState.marked + 1,
    }));
  };

  const decrementSlider = () => {
    setSlider((prevState) => ({
      ...prevState,
      marked: prevState.marked - 1,
    }));
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
      <h1>Sliders</h1>
      <div style={{ border: '4px dotted blue', padding: '0px 5px 5px 5px' }}>
        <h2>Slider Form</h2>
        <form name={'sliders'} onSubmit={handleSubmit}>
          <span>Stepped Slider (5)</span>
          <PlmgSlider
            name={'stepped'}
            marks={true}
            valueControl={sliders.stepped}
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
            value={sliders.decimal}
            rangeValues={'0.1, 0.2, 0.3, 0.4, 0.5'}
            onValueUpdated={(e) => handleSlider(e)}
          />
          <br />
          <span>Large Value Slider</span>
          <PlmgSlider
            name={'large'}
            step={10000}
            value={sliders.large}
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
        thumbLabel={true}
        rangeValues={'0, 10, 20, 30'}
        valueControl={sliders.marked}
        valueDidNotUpdate={(e) => console.log(e)}
        step={1}
        onValueUpdated={(e) => handleSlider(e)}
      />
      <button onClick={decrementSlider}>-</button>
      <span>{`${sliders.marked}`}</span>
      <button onClick={incrementSlider}>+</button>
    </div>
  );
}
