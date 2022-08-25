import { newSpecPage } from '@stencil/core/testing';
import { Slider } from '../plmg-slider';

describe('plmg-slider', () => {
  it('builds', () => {
    expect(new Slider()).toBeTruthy();
  });

  it('the name prop has a value', async () => {
    const page = await newSpecPage({
      components: [Slider],
      html: `<div></div>`,
    });
    let component = page.doc.createElement('plmg-slider');
    component.setAttribute('range', '0, 10');
    (component as any).name = 'My Slider';
    page.root.appendChild(component);
    await page.waitForChanges();
    expect(page.rootInstance.name).toBe('My Slider');
  });

  it('initially renders the component without the range input', async () => {
    const page = await newSpecPage({
      components: [Slider],
      html: `<div></div>`,
    });
    let component = page.doc.createElement('plmg-slider');
    component.setAttribute('range', '0, 10');
    (component as any).name = 'Range Slider';
    (component as any).marks = 'false';
    page.root.appendChild(component);
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <plmg-slider range="0, 10" value="0">
        <mock:shadow-root>
          <div class="plmg-component-container">
          <div class="plmg-slider-container">
          </div>
          <div class="plmg-slider-input-field-container" tabindex="0">
          <label aria-label="Range Slider" htmlfor="range-slider-number-input">
            <input aria-valuemax="10" aria-valuemin="0" aria-valuenow="0" id="range-slider-number-input" max="10" min="0" name="Range Slider" step="0.1" type="number" value="0">
          </label>
          </div>
        </div>
        </mock:shadow-root>
      </plmg-slider>
    `);
  });
});
