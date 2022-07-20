import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-tabs></plmg-tabs>');

    const element = await page.find('plmg-tabs');
    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      const htmlContent = `
        <plmg-tabs>
          <plmg-tab label="Tab 1"></plmg-tab>
          <plmg-tab icon="home" label="Tab 2"></plmg-tab>
          <plmg-tab icon="home"></plmg-tab>
        </plmg-tabs>
        `;
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
