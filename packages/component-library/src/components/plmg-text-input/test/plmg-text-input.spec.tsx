import { newSpecPage } from '@stencil/core/testing';
import { TextInput } from '../plmg-text-input';

describe('plmg-text-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-text-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plmg-text-input>
    `);
  });
});
