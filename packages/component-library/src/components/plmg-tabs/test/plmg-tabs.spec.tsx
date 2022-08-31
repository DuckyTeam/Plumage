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
        <plmg-tab label="Tab"></plmg-tab>
          <div class="plmg-tabs-list" role="tablist">
            <button class="plmg-tab-button" role="tab" tabindex="-1"></button>
          </div>
      </plmg-tabs>
    `);
  });
});
