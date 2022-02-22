import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../plmg-button';

describe('plmg-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button>Content</plmg-button>`,
    });

    expect(page.root).toEqualHtml(`
      <plmg-button>
          <button class="filled medium plmg-button primary" type="button">Content</button>
      </plmg-button>
    `);
  });
});
