import { newSpecPage } from '@stencil/core/testing';
import { Separator } from '../plmg-separator';

describe('plmg-separator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Separator],
      html: `<plmg-separator></plmg-separator>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-separator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plmg-separator>
    `);
  });
});
