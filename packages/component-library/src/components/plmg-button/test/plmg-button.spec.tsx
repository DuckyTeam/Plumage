import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../plmg-button';

describe('plmg-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button></plmg-button>`,
    });

    expect(page.root).toEqualHtml(`
      <plmg-button>
        <mock:shadow-root>
          <button class="filled medium primary">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </plmg-button>
    `);
  });
});
