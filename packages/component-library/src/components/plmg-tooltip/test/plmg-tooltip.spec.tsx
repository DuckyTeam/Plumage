import { newSpecPage } from '@stencil/core/testing';
import { Tooltip } from '../plmg-tooltip';

describe('plmg-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<plmg-tooltip></plmg-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-tooltip>
        <mock:shadow-root>
           <div style="position: fixed; overflow: visible; left: -1000px; top: -1000px;">
                <span class="neutral none plmg-tooltip top"></span>
           </div>
        </mock:shadow-root>
      </plmg-tooltip>
    `);
  });
});
