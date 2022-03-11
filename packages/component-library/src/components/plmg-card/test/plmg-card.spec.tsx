import { newSpecPage } from '@stencil/core/testing';
import { Card } from '../plmg-card';

describe('plmg-card', () => {
  it('renders empty when nothing passed', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<plmg-card></plmg-card>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-card>
        <mock:shadow-root>
        <div class="plmg-card">
           <div class="content-area">
             <slot name="item-one"></slot>
             <slot name="item-two"></slot>
           </div>
         </div>
        </mock:shadow-root>
      </plmg-card>
    `);
  });
});
