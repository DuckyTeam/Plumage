import { newSpecPage } from '@stencil/core/testing';
import { PlmgP } from '../plmg-p';

describe('plmg-p', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlmgP],
      html: `<plmg-p></plmg-p>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-p>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plmg-p>
    `);
  });
});
