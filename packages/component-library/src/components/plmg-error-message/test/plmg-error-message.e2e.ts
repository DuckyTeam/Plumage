import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-error-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-error-message></plmg-error-message>');

    const element = await page.find('plmg-error-message');
    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      let htmlContent = `
        <plmg-error-message size="medium" message="Error!"/>
        <plmg-error-message size="large" message="Error!"/>
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
