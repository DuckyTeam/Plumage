import { newSpecPage } from '@stencil/core/testing';
import { PlmgDropdownItem } from '../plmg-dropdown-item';

describe('plmg-dropdown-item', () => {
  it('renders links', async () => {
    const page = await newSpecPage({
      components: [PlmgDropdownItem],
      html: `<plmg-dropdown-item text='Dropdown Item' href='https://ducky.eco' rel='noopener noreferrer' target='_blank'></plmg-dropdown-item>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-dropdown-item href="https://ducky.eco" rel="noopener noreferrer" target="_blank" text="Dropdown Item">
      <mock:shadow-root>
      <a class="plmg-dropdown-item" href="https://ducky.eco" rel="noopener noreferrer" title="Dropdown Item">
        <span class="plmg-dropdown-item-content">
          Dropdown Item
        </span>
        <plmg-svg-icon class="plmg-dropdown-item-active-icon" icon="check"></plmg-svg-icon>
        </a>
      </mock:shadow-root>
    </plmg-dropdown-item>
    `);
  });
  it('renders with icon', async () => {
    const page = await newSpecPage({
      components: [PlmgDropdownItem],
      html: `<plmg-dropdown-item icon="duck" text='Dropdown Item' href='https://ducky.eco' rel='noopener noreferrer' target='_blank'></plmg-dropdown-item>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-dropdown-item href="https://ducky.eco" icon="duck" rel="noopener noreferrer" target="_blank" text="Dropdown Item">
      <mock:shadow-root>
      <a class="plmg-dropdown-item" href="https://ducky.eco" rel="noopener noreferrer" title="Dropdown Item">
      <plmg-svg-icon class="plmg-dropdown-item-icon" icon="duck"></plmg-svg-icon>
        <span class="plmg-dropdown-item-content">
          Dropdown Item
        </span>
        <plmg-svg-icon class="plmg-dropdown-item-active-icon" icon="check"></plmg-svg-icon>
        </a>
      </mock:shadow-root>
    </plmg-dropdown-item>
    `);
  });
});
