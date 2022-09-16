import { newSpecPage } from '@stencil/core/testing';
import { DropdownItem } from '../plmg-dropdown-item';

describe('plmg-dropdown-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DropdownItem],
      html: `<plmg-dropdown-item></plmg-dropdown-item>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-dropdown-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plmg-dropdown-item>
    `);
  });
});
