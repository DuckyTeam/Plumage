import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-slider></plmg-slider');

    const element = await page.find('plmg-slider');
    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      const marks = [true, false];
      const thumbLabel = [true, false];

      let htmlContent = '';
      marks.forEach((mark) => {
        thumbLabel.forEach((thumb) => {
          htmlContent += `
            <plmg-slider name='slider' range='0, 100' marks=${mark} thumb-label=${thumb}>
            </plmg-slider>
            <br/>
            `;
        });
      });
      await page.setContent('<main>' + htmlContent + '</main>');

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
