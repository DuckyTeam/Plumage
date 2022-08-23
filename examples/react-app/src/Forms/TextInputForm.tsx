import { useState, useEffect } from 'react';
import { PlmgTextInput } from '@ducky/plumage-react';

export default function TextInputsForm() {
  const [isValid, setIsValid] = useState(false);
  const [inputFields, setInputFields] = useState([
    {
      id: 'first-name',
      inputLabel: 'First Name',
      value: '',
      pattern: '[a-zA-Z]{2,}',
      tip: 'Your real name',
      required: true,
      error: false,
      errorMessage: 'Name must be at least 2 characters',
    },
    {
      id: 'phone-number',
      inputLabel: 'Phone Number',
      value: '',
      tip: '',
      required: true,
      error: false,
      pattern: '[0-9]{8,8}',
      errorMessage: 'Phone number must be 8 digits long',
    },
    {
      id: 'your-e-mail',
      inputLabel: 'your e-mail',
      pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}',
      value: '',
      tip: '',
      required: true,
      error: false,
      errorMessage: 'A valid email is required',
    },
    {
      id: 'favourite song',
      inputLabel: 'your favourite song',
      pattern: '[a-zA-Z]{0}',
      value: '',
      tip: '',
      required: false,
      error: false,
      errorMessage: 'Please enter your favourite song',
    },
  ]);

  const handleChange = (event: any) => {
    const targetId = event.target.id;
    const value = event.detail.value;
    const newInputFields = inputFields.map((inputField: any) => {
      if (inputField.id === targetId) {
        inputField.value = value;
      }
      return inputField;
    });
    setInputFields(newInputFields);

    event.preventDefault();
    event.stopPropagation();
  };

  const handleValidate = (event: any) => {
    const targetId = event.target.id;
    const newInputFields = inputFields.map((inputField: any) => {
      if (inputField.id === targetId) {
        inputField.error = !inputField.value.match(inputField.pattern);
      }
      return inputField;
    });
    setInputFields(newInputFields);
  };

  useEffect(() => {
    const isValid = inputFields.every((inputField: any) => {
      if (inputField.required) {
        return inputField.value.length > 0 && !inputField.error;
      } else {
        return true;
      }
    });
    setIsValid(isValid);
  }, [inputFields]);

  const handleSubmit = (event: any) => {
    alert(
      `Submitted: ${JSON.stringify(
        inputFields.map(
          (inputField: any) => inputField.inputLabel + ': ' + inputField.value
        )
      )})`
    );
  };

  return (
    <div style={{ border: '2px dashed blue' }}>
      <h2>Text Input Form</h2>
      <form name={'text-inputFields'} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {inputFields.map((input, index) => (
            <PlmgTextInput
              key={`${input.id}_${index}`}
              id={input.id}
              errorMessage={input.error ? input.errorMessage : ''}
              label={input.inputLabel}
              required={input.required}
              tip={input.tip}
              onValueUpdated={(e) => handleChange(e)}
              onBlur={(e) => handleValidate(e)}
            ></PlmgTextInput>
          ))}
        </div>
        <input type={'submit'} value={'Submit Form'} disabled={!isValid} />
      </form>
      <br />
    </div>
  );
}
