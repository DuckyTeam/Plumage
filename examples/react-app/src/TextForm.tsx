import { useState } from 'react';
import { PlmgTextInput } from '@ducky/plumage-react';

export default function TextForm() {
  const [input, setInputs] = useState({
    text: '',
  });

  const handleChange = (event: any) => {
    console.log(event);
    const { label } = event.target;
    const { value } = event.detail;
    if (input[label] !== value) {
      setInputs((prevState) => ({
        ...prevState,
        [label]: value,
      }));
    }
    event.preventDefault();
    event.stopPropagation();
  };

  // const handleSubmit = () => {
  //   alert(`Submitted Slider Values
  //     Stepped Slider: ${text - inputs}
  //   `);
  // };

  return (
    <div>
      <h1>Text Input Form</h1>
      <div style={{ border: '4px dotted blue', padding: '0px 5px 5px 5px' }}>
        <h2>Text Input Form</h2>
        <form name={'text-inputs'}>
          <PlmgTextInput
            label={'text'}
            onValueUpdated={(event) => handleChange(event)}
          />
          <p>{input.text}</p>
        </form>
      </div>
      <br />
    </div>
  );
}
