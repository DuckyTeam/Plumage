import { newSpecPage } from '@stencil/core/testing';
import { Tabs } from '../plmg-tabs';

describe('plmg-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Tabs],
      html: `<plmg-tabs><plmg-tab label="Tab"></plmg-tab></plmg-tabs>`,
    });

    expect(page.root).toEqualHtml(`
      <plmg-tabs>
        <mock:shadow-root>
          <div class="plmg-tabs-list" role="tablist">
            <button class="plmg-tab-button" role="tab"></button>
          </div>
        </mock:shadow-root>
        <plmg-tab label="Tab"></plmg-tab>
      </plmg-tabs>
    `);
  });
});
