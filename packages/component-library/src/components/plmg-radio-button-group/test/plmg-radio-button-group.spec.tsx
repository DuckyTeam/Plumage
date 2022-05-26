import { newSpecPage } from '@stencil/core/testing';
import { RadioButtonGroup } from '../plmg-radio-button-group';

describe('plmg-radio-button-group', () => {
  it('renders with string values', async () => {
    const page = await newSpecPage({
      components: [RadioButtonGroup],
      html: `<plmg-radio-button-group values='${JSON.stringify([
        'val 1',
        'val 2',
      ])}'></plmg-radio-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-radio-button-group values="[&quot;val 1&quot;,&quot;val 2&quot;]">
        <fieldset class="plmg-radio-button-group">
          <legend></legend>
        <plmg-radio-button size="medium" value="val 1"></plmg-radio-button>
        <plmg-radio-button size="medium" value="val 2"></plmg-radio-button>
      </fieldset>
    `);
  });
  it('renders with error message', async () => {
    const page = await newSpecPage({
      components: [RadioButtonGroup],
      html: `<plmg-radio-button-group values='${JSON.stringify([
        'val 1',
      ])}' error-message='uh oh!'></plmg-radio-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-radio-button-group values="[&quot;val 1&quot]" error-message='uh oh!'>
        <fieldset class="plmg-radio-button-group">
          <legend></legend>
        <plmg-radio-button highlighted="" size="medium" value="val 1"></plmg-radio-button>
        <plmg-error-message message="uh oh!" size="medium"></plmg-error-message>
      </fieldset>
    `);
  });
});
