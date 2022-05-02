import { newSpecPage } from '@stencil/core/testing';
import { RadioButtonGroup } from '../plmg-radio-button-group';

describe('plmg-radio-button-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RadioButtonGroup],
      html: `<plmg-radio-button-group></plmg-radio-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-radio-button-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plmg-radio-button-group>
    `);
  });
});
