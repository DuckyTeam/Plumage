import { newSpecPage } from '@stencil/core/testing';
import { PlmgButton } from '../plmg-button';

describe('plmg-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlmgButton],
      html: `<plmg-button></plmg-button>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plmg-button>
    `);
  });
});
