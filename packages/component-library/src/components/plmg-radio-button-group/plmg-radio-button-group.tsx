import { Component, h, Prop, State, Watch } from '@stencil/core';
import {
  PlmgRadioButtonSize,
  isPlmgRadioButtonSize,
} from '../plmg-radio-button/plmg-radio-button.types';
@Component({
  tag: 'plmg-radio-button-group',
  styleUrl: 'plmg-radio-button-group.scss',
  shadow: false,
})
export class RadioButtonGroup {
  /**
   * Define form's name'
   */
  @Prop() name: string;
  @Watch('name')
  validateName(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('name: required');
    if (newValue && typeof newValue !== 'string')
      throw new Error('name must be a string');
  }

  /**
   * Define form's label'
   */
  @Prop() label: string;
  @Watch('label')
  validateLabel(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('label: required');
    if (newValue && typeof newValue !== 'string')
      throw new Error('label must be a string');
  }

  /**
   * Define size of all radio button's in radio button group.
   *
   * Allowed values:
   *   - medium
   *   - large
   *
   * Default: medium
   */
  @Prop() size: PlmgRadioButtonSize = 'medium';
  @Watch('size')
  validateSize(newValue: string) {
    if (!isPlmgRadioButtonSize(newValue))
      throw new Error('size: must be a valid value');
  }

  /**
   * Define radio group's required status
   *
   * Allowed values:
   *   - true
   *   - false
   *
   * Default: false
   */
  @Prop() required: boolean = false;
  @Watch('required')
  validatesRequired(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('required: must be boolean');
  }

  /**
   * Define each radio button's value
   *
   * Accepts an array or JSON string
   */
  @Prop() values: string[] | string;
  @State() parsedValues: string[];

  componentWillLoad() {
    this.parseValuesProp(this.values);
  }

  @Watch('values')
  parseValuesProp(newValue: string | string[]) {
    if (newValue) {
      this.parsedValues = Array.isArray(newValue)
        ? newValue
        : JSON.parse(newValue);
    }
  }
  validatesValues(newValue: string[] | string) {
    if (
      typeof newValue !== 'object' ||
      (typeof newValue === 'object' &&
        !Array.isArray(newValue) &&
        typeof newValue !== 'string')
    ) {
      throw new Error('values: must be array or string');
    }
    if (
      Array.isArray(newValue) &&
      newValue.some((value) => typeof value !== 'string')
    ) {
      throw new Error('values: values within array must be strings');
    }
  }

  /**
   * Define error message for radio group
   *
   * Will render one error message for the
   * radio button group, affects styling of
   * all radio buttons in group
   */
  @Prop() errorMessage?: string | undefined;
  @Watch('errorMessage')
  validatesErrorMessage(newValue: string) {
    if (newValue !== undefined && typeof newValue !== 'string')
      throw new Error('errorMessage: must be a string if provided');
  }

  render() {
    return (
      <fieldset>
        <legend>
          {this.label}
          {this.required && <span>*</span>}
        </legend>
        {this.parsedValues.map((radio) => (
          <plmg-radio-button
            value={radio}
            name={this.name}
            size={this.size}
            highlighted={!!this.errorMessage}
          />
        ))}
        {!!this.errorMessage && (
          <plmg-error-message size={this.size} message={this.errorMessage} />
        )}
      </fieldset>
    );
  }
}
