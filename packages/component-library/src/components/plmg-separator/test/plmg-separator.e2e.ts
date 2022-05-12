import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-separator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-separator></plmg-separator>');

    const element = await page.find('plmg-separator');
    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      const direction = ['vertical', 'horizontal', undefined];
      const thickness = ['thick', 'thin', undefined];

      let htmlContent = '';
      direction.forEach((directionControl) => {
        thickness.forEach((thicknessControl) => {
          htmlContent += `
          <plmg-separator direction="${directionControl}" thickness="${thicknessControl}"></plmg-separator>
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
