import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-dropdown></plmg-dropdown>');

    const element = await page.find('plmg-dropdown');
    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      let htmlContent = `
        <plmg-dropdown align="left"/>
        <plmg-dropdown align="right"/>
      `;
      await page.setContent('<main>' + htmlContent + '</main>');
      debugger;
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
