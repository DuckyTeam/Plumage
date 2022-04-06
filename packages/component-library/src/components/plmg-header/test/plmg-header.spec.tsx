import { newSpecPage } from '@stencil/core/testing';
import { Header } from '../plmg-header';

describe('plmg-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Header],
      html: `<plmg-header></plmg-header>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plmg-header>
    `);
  });
});
