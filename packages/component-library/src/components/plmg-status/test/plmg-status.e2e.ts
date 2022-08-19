import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';
import { variants } from '../plmg-status.types';

describe('plmg-status', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-status></plmg-status>');

    const element = await page.find('plmg-status');
    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      let htmlContent = '';
      variants.forEach((variant) => {
        htmlContent += `
    <plmg-status variant="${variant}" icon-left="duck" icon-right="duck">
      Label
    </plmg-status>
    <br/>
    `;
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
