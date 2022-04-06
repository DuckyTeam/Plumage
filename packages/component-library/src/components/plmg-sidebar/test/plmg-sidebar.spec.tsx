import { newSpecPage } from '@stencil/core/testing';
import { Sidebar } from '../plmg-sidebar';

describe('plmg-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `<plmg-sidebar></plmg-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-sidebar>
        <mock:shadow-root>
          <nav class="plmg-sidebar">
            <div class="plmg-sidebar-top">
                <p class="plmg-sidebar-home-link"></p>
                <plmg-button class="plmg-sidebar-collapse-btn" design="borderless" iconcenter="menuOpen" label="Close Sidebar" size="medium"></plmg-button>
            </div>
            <slot></slot>
          </nav>

        </mock:shadow-root>
      </plmg-sidebar>
    `);
  });
});
