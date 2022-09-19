import { newSpecPage } from '@stencil/core/testing';
import { PlmgDropdownItem } from '../plmg-dropdown-item';

describe('plmg-dropdown-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlmgDropdownItem],
      html: `<plmg-dropdown-item></plmg-dropdown-item>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-dropdown-item>
        <mock:shadow-root>
        <a class="plmg-dropdown-item">
        <span class="plmg-dropdown-item-content"></span>
        <plmg-svg-icon class="plmg-dropdown-item-active-icon" icon="check"></plmg-svg-icon>
        </a>
        </mock:shadow-root>
      </plmg-dropdown-item>
    `);
  });
});
