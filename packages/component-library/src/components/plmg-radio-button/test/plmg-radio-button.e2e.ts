import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-radio-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-radio-button></plmg-radio-button>');

    const element = await page.find('plmg-radio-button');
    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      let htmlContent = '';
      someControl.forEach((control) => {
        htmlContent += `
    <plmg-radio-button control="${control}">
  control="${control}"
    </plmg-radio-button>
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
