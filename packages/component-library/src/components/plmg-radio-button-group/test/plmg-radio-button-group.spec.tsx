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
        <fieldset>
          <legend></legend>
        <plmg-radio-button size="medium" value="val 1"></plmg-radio-button>
        <plmg-radio-button size="medium" value="val 2"></plmg-radio-button>
      </fieldset>
    `);
  });
});
