import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';
import { designs, sizes, colors } from '../plmg-button.types';

describe('plmg-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-button></plmg-button>');

    const element = await page.find('plmg-button');

    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
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
<plmg-button design="${design}" size="${size}" color="${color}" fullWidth="${fullWidth}" shadow="${shadow}" >
    design="${design}" size="${size}" color="${color}" fullWidth="${fullWidth}" shadow="${shadow}"
</plmg-button>
<br/>
              `;
              });
            });
          });
        });
      });
      await page.setContent(htmlContent);

      const results = await new AxePuppeteer(page as unknown as Page)
        .disableRules([
          'document-title',
          'html-has-lang',
          'landmark-one-main',
          'page-has-heading-one',
        ])
        .analyze();

      expect(results.violations).toHaveLength(0);
    });
  });
});
