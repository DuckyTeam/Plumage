import { useState } from 'react';
import { PlmgTextInput } from '@ducky/plumage-react';

export default function TextForm() {
  const [inputs, setInputs] = useState({
    textInput: 'default value',
    textInputTwo: '',
  });

  const handleChange = (event: any) => {
    const { id } = event.target;
    const { value } = event.detail;
    if (inputs[id] !== value) {
      setInputs((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
    event.preventDefault();
    event.stopPropagation();
  };

  const handleSubmit = () => {
    alert(`Submitted Slider Values
      Text Input: ${inputs.textInput}
      Text Input 2: ${inputs.textInputTwo}
    `);
  };

  return (
    <div style={{ border: '2px dashed blue' }}>
      <h2>Text Input Form</h2>
      <form name={'text-inputs'} onSubmit={handleSubmit}>
        <div style={{ display: 'flex' }}>
          <PlmgTextInput
            id={'textInput'}
            label={'text input'}
            tip
            tipText={'helpful message'}
            filled
            default={inputs.textInput}
            onValueUpdated={(e) => handleChange(e)}
          />{' '}
          <PlmgTextInput
            label={'textInput2'}
            error
            tip
            tipText={'helpful message'}
            errorMessage="I failed"
            id={'textInputTwo'}
            onValueUpdated={(e) => handleChange(e)}
          />
        </div>
        <input type={'submit'} value={'Submit Sliders'} />
      </form>
      <br />
    </div>
  );
}
