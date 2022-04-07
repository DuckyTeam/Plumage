import { newSpecPage } from '@stencil/core/testing';
import { Header } from '../plmg-header';

describe('plmg-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Header],
      html: `<plmg-header></plmg-header>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-header>
        <mock:shadow-root>
          <div class="plmg-header-container">
            <plmg-button class="plmg-sidebar-expand-btn"  label="Expand sidebar" design="borderless" icon-center="menu" size="medium"></plmg-button>
            <div class="plmg-sidebar-content-container">
              <div class="plmg-header-left-container">
                <slot name="left"></slot>
              </div>
              <div class="plmg-header-right-container">
                <slot name="right"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </plmg-header>
    `);
  });
});
