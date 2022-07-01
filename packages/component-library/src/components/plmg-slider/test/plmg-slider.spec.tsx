import { newSpecPage } from '@stencil/core/testing';
import { Slider } from '../plmg-slider';

describe('plmg-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Slider],
      html: `<plmg-slider default-value="25" step="1" name="range-slider" marks="false" thumb-label="true" range-values="0,5,10,20,30,50" value="25"></plmg-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-slider default-value="25" marks="false" name="range-slider" range-values="0,5,10,20,30,50" step="1" thumb-label="true" value="0">
        <mock:shadow-root>
          <div class="plmg-component-container">
          <div class="plmg-slider-container">
          </div>
          <div class="plmg-slider-input-field-container">
            <label htmlfor="slider-input">
            <input aria-valuemax="0" aria-valuemin="0" aria-valuenow="0" max="0" min="0" name="slider-input" step="1" type="number" value="0">
            </label>
          </div>
        </div>
        </mock:shadow-root>
      </plmg-slider>
    `);
  });
});
