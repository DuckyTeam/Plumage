import { newSpecPage } from '@stencil/core/testing';
import { Content } from '../plmg-content';

describe('plmg-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Content],
      html: `<plmg-content></plmg-content>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plmg-content>
    `);
  });
});
