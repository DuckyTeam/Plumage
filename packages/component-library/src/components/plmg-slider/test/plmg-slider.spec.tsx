import { newSpecPage } from '@stencil/core/testing';
import { Slider } from '../plmg-slider';

describe('plmg-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Slider],
      html: `<plmg-slider></plmg-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-sliderr marks="false" thumb-label="false" class="hydrated">
        <div class="plmg-slider-component-container">
          <div class="plmg-slider-thumb-label-container">
            <output id="output-range" class="plmg-slider-thumb-label hidden"></output>
          </div>
          <div class="plmg-slider-track-rail-container">
            <input class="plmg-slider-input" step="0" type="range" id="input-range" min="0" max="90">
          </div>
          <div class="plmg-slider-mark-labels-container">
          </div>
          <div class="plmg-slider-input-field-container">
            <input type="number" step="0" min="0" max="90">
          </div>
        </div>
      </plmg-slider>
    `);
  });
});
