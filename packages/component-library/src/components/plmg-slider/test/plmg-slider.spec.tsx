import { newSpecPage } from '@stencil/core/testing';
import { Slider } from '../plmg-slider';

describe('plmg-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Slider],
      html: `<plmg-slider></plmg-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-slider range-values="0, 10, 20" marks="false" thumb-label="false" class="hydrated">
      <div class="plmg-slider-component-container">
        <div class="plmg-slider-track-rail-container">
          <label htmlfor="input-range"></label>
            <input class="plmg-slider-input" type="range" id="input-range" aria-valuemin="0" aria-valuemax="50" aria-valuenow="0" min="0" max="50" style="background: linear-gradient(to right, rgb(0, 130, 144) 0%, rgb(0, 130, 144) 0%, rgb(191, 203, 209) 0%, rgb(191, 203, 209) 100%);">
          </div>
          <div class="plmg-slider-thumb-label-container">
            <label htmlfor="output-range"></label>
            <output id="output-range" class="plmg-slider-thumb-label" style="left: calc(0% + 8px);">0</output>
          </div>
          <div class="plmg-slider-mark-container"><span style="left: calc(0% + 3px);"></span>
            <span style="left: calc(10% + 1.5px);"></span>
            <span style="left: calc(20% + 0px);">
            </span><span style="left: calc(40% + -3px);"></span>
            <span style="left: calc(60% + -6px);"></span>
            <span style="left: calc(100% + -12px);"></span></div>
          <div class="plmg-slider-mark-labels-container">
          <datalist>
            <option class="plmg-slider-mark-label-item" style="left: calc(0% + 3px);">0</option>
            <option class="plmg-slider-mark-label-item" style="left: calc(10% + 1.5px);">5</option>
            <option class="plmg-slider-mark-label-item" style="left: calc(20% + 0px);">10</option>
            <option class="plmg-slider-mark-label-item" style="left: calc(40% + -3px);">20</option>
            <option class="plmg-slider-mark-label-item" style="left: calc(60% + -6px);">30</option>
            <option class="plmg-slider-mark-label-item" style="left: calc(100% + -12px);">50</option>
          </datalist>
          </div>
          <div class="plmg-slider-input-field-container">
            <label htmlfor="input-field"></label>
            <input type="number" id="input-field" tabindex="0" aria-valuemin="0" aria-valuemax="50" aria-valuenow="0" min="0" max="50">
          </div>
        </div>
      </plmg-slider>
    `);
  });
});
