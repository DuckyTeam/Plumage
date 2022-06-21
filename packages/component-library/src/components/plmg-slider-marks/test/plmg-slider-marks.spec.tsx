import { newSpecPage } from '@stencil/core/testing';
import { SliderMarks } from '../plmg-slider-marks';

describe('plmg-slider-marks', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SliderMarks],
      html: `<plmg-slider-marks></plmg-slider-marks>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-slider-marks>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plmg-slider-marks>
    `);
  });
});
