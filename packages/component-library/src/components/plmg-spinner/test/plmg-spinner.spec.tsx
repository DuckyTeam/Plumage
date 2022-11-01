import { newSpecPage } from '@stencil/core/testing';
import { Spinner } from '../plmg-spinner';

describe('plmg-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Spinner],
      html: `<plmg-spinner></plmg-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plmg-spinner>
    `);
  });
});
