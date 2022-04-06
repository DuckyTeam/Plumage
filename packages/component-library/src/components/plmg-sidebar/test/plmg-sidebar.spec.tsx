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
          <slot></slot>
        </mock:shadow-root>
      </plmg-sidebar>
    `);
  });
});
