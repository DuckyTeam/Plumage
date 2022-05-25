import { newSpecPage } from '@stencil/core/testing';
import { Slider } from '../plmg-slider';

describe('plmg-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Slider],
      html: `<plmg-slider></plmg-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plmg-slider>
    `);
  });
});
