// import { useState } from "react";
import { PlmgTextInput } from '@ducky/plumage-react';

export default function TextForm() {
  // const [sliders, setSlider] = useState({
  //   stepped: 0,
  //   decimal: 0.1,
  //   large: 100000,
  //   marked: 0,
  // });

  // const handleSlider = (event: any) => {
  //   const { name } = event.target;
  //   const { value } = event.detail;
  //   if (sliders[name] !== value) {
  //     setSlider((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   }
  //   event.preventDefault();
  //   event.stopPropagation();
  // };

  const handleSubmit = () => {
    alert(`Submitted Slider Values
      Stepped Slider: ${text - inputs}
    `);
  };

  return (
    <div>
      <h1>Text Input Form</h1>
      <div style={{ border: '4px dotted blue', padding: '0px 5px 5px 5px' }}>
        <h2>Text Input Form</h2>
        <form name={'text-inputs'}>
          <PlmgTextInput label={'Text Input'} />
        </form>
      </div>
      <br />
    </div>
  );
}
