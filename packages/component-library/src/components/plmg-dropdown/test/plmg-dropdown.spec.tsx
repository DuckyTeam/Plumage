import { newSpecPage } from '@stencil/core/testing';
import { Dropdown } from '../plmg-dropdown';

describe('plmg-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Dropdown],
      html: `<plmg-dropdown></plmg-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-dropdown>
        <mock:shadow-root>
        <nav class="plmg-dropdown" tabindex="0">
        <slot name="trigger"></slot>
        </nav>
        </mock:shadow-root>
      </plmg-dropdown>
    `);
  });
});
