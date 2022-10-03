import { useState, useEffect } from 'react';
import { PlmgTextInput, PlmgButton } from '@ducky/plumage-react';

export default function TextForm() {
  type FormState = {
    [key: string]: {
      value: string;
      valid: boolean;
    };
  };

  const [userDidSubmit, setUserDidSubmit] = useState(false);

  const [formValues, setFormValues] = useState<FormState>({
    name: { value: '', valid: false },
    password: { value: '', valid: false },
    passwordConfirm: { value: '', valid: false },
    email: { value: '', valid: false },
    favouriteNumber: { value: '42', valid: true },
  });

  function validateForm() {
    const formValid = Object.keys(formValues).every(
      (key) => formValues[key].valid
    );
    const passwordValid =
      formValues.password.value === formValues.passwordConfirm.value;
    if (formValid && passwordValid) {
      return true;
    }
  }

  useEffect(() => {
    if (userDidSubmit) {
      validateForm();
    }
  }, [formValues]);

  return (
    <div>
      <h2>Text Input Form</h2>
      <form
        name={'text-inputFields'}
        noValidate={true}
        onSubmit={(event) => {
          event.preventDefault();
          setUserDidSubmit(true);
          if (validateForm()) {
            alert(JSON.stringify(formValues));
          }
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <PlmgTextInput
            label={'Your Name'}
            name={'user-name'}
            placeholder={'Your Name'}
            errorMessage={
              userDidSubmit && !formValues.name.valid
                ? 'Please enter your real name'
                : undefined
            }
            tip={'Your real name'}
            required={true}
            minLength={2}
            maxLength={20}
            onValueUpdated={(event: CustomEvent) => {
              setFormValues({
                ...formValues,
                name: {
                  value: event.detail.value,
                  valid: event.detail.validityState.valid,
                },
              });
            }}
            value={formValues.name.value}
          />
          <PlmgTextInput
            label={'Email'}
            name={'email'}
            placeholder={'Email'}
            errorMessage={
              userDidSubmit && !formValues.email.valid
                ? 'Please enter a valid email address'
                : undefined
            }
            tip={'Your real email'}
            type={'email'}
            required={true}
            onValueUpdated={(event: CustomEvent) => {
              setFormValues({
                ...formValues,
                email: {
                  value: event.detail.value,
                  valid: event.detail.validityState.valid,
                },
              });
            }}
            value={formValues.email.value}
          />
          <PlmgTextInput
            label={'Password'}
            name={'password'}
            placeholder={'Password'}
            errorMessage={
              userDidSubmit && !formValues.password.valid
                ? 'Please provide a password'
                : undefined
            }
            type={'password'}
            tip={'password'}
            required={true}
            onValueUpdated={(event: CustomEvent) => {
              setFormValues({
                ...formValues,
                password: {
                  value: event.detail.value,
                  valid: event.detail.validityState.valid,
                },
              });
            }}
            value={formValues.password.value}
          />
          <PlmgTextInput
            label={'Confirm Password'}
            name={'confirm-password'}
            placeholder={'Confirm Password'}
            onBlur={() => {
              if (
                formValues.password.value !== formValues.passwordConfirm.value
              ) {
                setFormValues({
                  ...formValues,
                  passwordConfirm: {
                    value: formValues.passwordConfirm.value,
                    valid: false,
                  },
                });
              }
            }}
            errorMessage={
              userDidSubmit &&
              formValues.password.value !== formValues.passwordConfirm.value
                ? 'Passwords do not match'
                : undefined
            }
            tip={'Confirm your password'}
            type={'password'}
            required={true}
            onValueUpdated={(event: CustomEvent) => {
              setFormValues({
                ...formValues,
                passwordConfirm: {
                  value: event.detail.value,
                  valid: event.detail.validityState.valid,
                },
              });
            }}
            value={formValues.passwordConfirm.value}
          />
          <PlmgTextInput
            errorMessage={
              userDidSubmit && !formValues.favouriteNumber.valid
                ? 'Please enter a valid number'
                : undefined
            }
            label={'Favourite Number'}
            name={'your-favourite-number'}
            tip={'Pick a number between 1 and 100'}
            type={'number'}
            min={0}
            max={100}
            required={true}
            onValueUpdated={(event: CustomEvent) => {
              setFormValues({
                ...formValues,
                favouriteNumber: {
                  value: event.detail.value,
                  valid: event.detail.validityState.valid,
                },
              });
            }}
            value={formValues.favouriteNumber.value}
            width={25}
          />
        </div>
        <PlmgButton
          size={'small'}
          design={'outline'}
          label={'submit'}
          type={'submit'}
        >
          Submit
        </PlmgButton>
      </form>
    </div>
  );
}
