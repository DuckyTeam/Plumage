import { newSpecPage } from '@stencil/core/testing';
import { PageContainer } from '../plmg-page-container';

describe('plmg-page-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageContainer],
      html: `<plmg-page-container></plmg-page-container>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-page-container>
        <mock:shadow-root>
          <div class="plmg-page-container">
            <slot name="sidebar"></slot>
            <slot name="header"></slot>
             <div class="plmg-content">
                 <slot name="content"></slot>
             </div>
             <slot name="footer"></slot>
          </div>
        </mock:shadow-root>
      </plmg-page-container>
    `);
  });
});
