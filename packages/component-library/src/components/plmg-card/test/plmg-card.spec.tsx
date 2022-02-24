import { newSpecPage } from '@stencil/core/testing';
import { Card } from '../plmg-card';

describe('plmg-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<plmg-card></plmg-card>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plmg-card>
    `);
  });
});
