import { Component, h, State, Prop, Watch } from '@stencil/core';

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

  @Prop() values: string;
  @State() innerValues: string[];

  componentWillLoad() {
    this.parseValuesProp();
  }

  @Watch('values')
  parseValuesProp() {
    if (this.values) {
      this.innerValues = JSON.parse(this.values);
    }
  }
  render() {
    return (
      <fieldset>
        <legend>
          {this.label}
          {this.required && <span>*</span>}
        </legend>
        {this.innerValues.map((radio) => (
          <plmg-radio-button value={radio} name={this.name} />
        ))}
      </fieldset>
    );
  }
}
