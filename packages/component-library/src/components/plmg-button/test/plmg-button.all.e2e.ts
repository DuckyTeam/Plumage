import { newE2EPage } from '@stencil/core/testing';
import { designs, sizes, colors } from '../plmg-button.types';

describe('plmg-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    const fullWidthValues = [true, false];
    const shadowValues = [true, false];
    // button type can be ignored since it does not impact the style

    let htmlContent = '';
    designs.forEach((design) => {
      sizes.forEach((size) => {
        colors.forEach((color) => {
          fullWidthValues.forEach((fullWidth) => {
            shadowValues.forEach((shadow) => {
              htmlContent += `
              <plmg-button design="${design}" size="${size}" color="${color}" fullWidth="${fullWidth}" shadow="${shadow}" ></plmg-button>
              `;
            });
          });
        });
      });
    });
    await page.setContent(htmlContent);

    const element = await page.find('plmg-button');
    expect(element).toHaveClass('hydrated');
  });
});
