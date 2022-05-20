import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-tooltip></plmg-tooltip>');

    const element = await page.find('plmg-tooltip');

    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      const arrowSides = ['none', 'left', 'right', 'top', 'bottom'];
      const arrowPositions = ['start', 'middle', 'end'];
      const bgColors = ['neutral', 'primary'];

      let htmlContent = '';
      bgColors.forEach((bgcolor) => {
        arrowSides.forEach((arrowSide) => {
          arrowPositions.forEach((arrowPosition) => {
            htmlContent += `
            <plmg-tooltip bg-color="${bgcolor} arrow-side="${arrowSide} arrow-position="${arrowPosition}">
            </plmg-tooltip>
            `;
          });
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
