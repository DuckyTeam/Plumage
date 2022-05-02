import { Component, h, Prop, Watch } from '@stencil/core';
import {
  PlmgRadioButtonSize,
  isPlmgRadioButtonSize,
} from './plmg-radio-button.types';

@Component({
  tag: 'plmg-radio-button',
  styleUrl: 'plmg-radio-button.scss',
  shadow: false,
})
export class RadioButton {
  /**
   * Define radio button's size.
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
   * Define radio button's label'
   */
  @Prop() value: string;
  @Watch('value')
  validateValue(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('value: required');
    if (newValue && typeof newValue !== 'string')
      throw new Error('value must be a string');
  }

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
   * Define radio button's selected status
   *
   * Allowed values:
   *   - true
   *   - false
   *
   * Default: false
   */
  @Prop() selected: boolean = false;
  @Watch('selected')
  validatesSelected(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('selected: must be boolean');
  }

  /**
   * Define radio button's highlighted status (in case of error)
   *
   * Allowed values:
   *   - true
   *   - false
   *
   * Default: false
   */
  @Prop() highlighted: boolean = false;
  @Watch('highlighted')
  validatesHighlighted(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('highlighted: must be boolean');
  }

  render() {
    const inputClasses = {
      large: this.size === 'large',
      highlighted: this.highlighted,
    };

    const labelClasses = {
      large: this.size === 'large',
    };

    return (
      <div class={'radio-button-wrapper'}>
        <input
          type="radio"
          id={this.value}
          name={this.name}
          value={this.value}
          checked={this.selected}
          class={inputClasses}
        />
        <label htmlFor={this.value} class={labelClasses}>
          {this.value}
        </label>
      </div>
    );
  }
}
